package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.service.GenAIService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

@Service
@NoArgsConstructor
public class GenAIServiceImpl implements GenAIService {

    @Value("${genai.settings.speech-to-text.model}")
    private String textToSpeechModel;

    @Value("${genai.settings.structured-outputs.model}")
    private String structuredOutputsModel;

    @Value("${genai.settings.structured-outputs.prompt}")
    private String structuredOutputsPrompt;

    @Value("${genai.groq.apikey}")
    private String genAIApiKey;

    private RestClient restClient = RestClient.create();

    public GenAIServiceImpl(String textToSpeechModel, String structuredOutputsModel, String structuredOutputsPrompt, String genAIApiKey) {
        this.textToSpeechModel = textToSpeechModel;
        this.structuredOutputsModel = structuredOutputsModel;
        this.structuredOutputsPrompt = structuredOutputsPrompt;
        this.genAIApiKey = genAIApiKey;
    }

    @Override
    public String speechToTextAsJsonStringResponse(MultipartFile audioFile) {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap<>();

        File localFile = null;
        try {
            localFile = File.createTempFile("audio-", ".mp3");
            audioFile.transferTo(localFile);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        parts.add("model", textToSpeechModel);
        parts.add("temperature", "0");
        parts.add("response_format", "verbose_json");
        parts.add("language", "en");
        parts.add("timestamp_granularities[]", "word");
        parts.add("file", new FileSystemResource(localFile));

        String response = restClient
                .post()
                .uri("https://api.groq.com/openai/v1/audio/transcriptions")
                .body(parts)
                .header("Authorization", "Bearer %s".formatted(genAIApiKey))
                .retrieve()
                .body(String.class);

        return response;
    }

    public String speechToTextAsJsonStringResponse(File audioFile) {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap<>();

        parts.add("model", textToSpeechModel);
        parts.add("temperature", "0");
        parts.add("response_format", "verbose_json");
        parts.add("language", "en");
        parts.add("timestamp_granularities[]", "word");
        parts.add("file", new FileSystemResource(audioFile));

        String response = restClient
                .post()
                .uri("https://api.groq.com/openai/v1/audio/transcriptions")
                .body(parts)
                .header("Authorization", "Bearer %s".formatted(genAIApiKey))
                .retrieve()
                .body(String.class);

        return response;
    }

    @Override
    public String reviewMistakesInTextAsJsonStringResponse(String text, String topic) {
        String jsonRequest = """
                {
                    "model": "%s",
                    "messages": [
                        {
                            "role": "system",
                            "content": "%s The topic of the speech: '%s'"
                        },
                        {
                            "role": "user",
                            "content": "%s"
                        }
                    ],
                    "response_format": {
                        "type": "json_schema",
                        "json_schema": {
                            "name": "mistakes_overview",
                            "required": ["mistakes_summary", "advice", "is_on_topic"],
                            "additionalProperties": false,
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "mistakes_summary": { "type": "string" },
                                    "advice": { "type": "string" },
                                    "is_on_topic": { "type": "boolean" }
                                }
                            }
                        }
                    }
                }""".formatted(structuredOutputsModel, structuredOutputsPrompt, topic, text);

        String response = restClient
                .post()
                .uri("https://api.groq.com/openai/v1/chat/completions")
                .body(jsonRequest)
                .header("Authorization", "Bearer %s".formatted(genAIApiKey))
                .contentType(MediaType.APPLICATION_JSON)
                .retrieve()
                .body(String.class);

        return response;
    }
}
