package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.service.DO.ReviewSpeechResultDO;
import com.iljuhenson.achlearnment.service.DO.WordDO;
import com.iljuhenson.achlearnment.service.GenAIService;
import com.iljuhenson.achlearnment.service.JsonUtilsService;
import com.iljuhenson.achlearnment.service.TeacherService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    private JsonUtilsService jsonUtilsService;

    private GenAIService genAIService;

    public TeacherServiceImpl(JsonUtilsService jsonUtilsService, GenAIService genAIService) {
        this.jsonUtilsService = jsonUtilsService;
        this.genAIService = genAIService;
    }

    public ReviewSpeechResultDO reviewSpeech(MultipartFile audioFile) {
        String speechToTextResponse = genAIService.speechToTextAsJsonStringResponse(audioFile);

        double duration = jsonUtilsService.extractDuration(speechToTextResponse);
        String text = jsonUtilsService.extractText(speechToTextResponse);
        List<WordDO> transcription = jsonUtilsService.extractTranscription(speechToTextResponse);

        boolean isCompleted = validateTaskCompleted(transcription, duration);

        String mistakesSummary = "";
        String advice = "";
        boolean isOnTopic = false;

        if (isCompleted) {
            String reviewMistakesResponse = genAIService.reviewMistakesInTextAsJsonStringResponse(text, "Get from the speech");

            mistakesSummary = jsonUtilsService.extractMistakesSummary(reviewMistakesResponse);
            advice = jsonUtilsService.extractAdvice(reviewMistakesResponse);
            isOnTopic = jsonUtilsService.extractIsOnTopic(reviewMistakesResponse);
        }

        return ReviewSpeechResultDO.builder().mistakesOverview(mistakesSummary).advice(advice).isMarkedAsCompleted(isCompleted).isOnTopic(isOnTopic).build();
    }

    private boolean validateTaskCompleted(List<WordDO> transcription, Double duration) {
        double silenceTime = 0.0D;

        for (int i = 0; i < transcription.size() - 1; i++) {
            silenceTime += transcription.get(i + 1).getStart() - transcription.get(i).getEnd();
        }

        if (silenceTime > duration * 0.5D)
            return false;

        return true;
    }

}
