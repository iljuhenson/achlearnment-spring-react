package com.iljuhenson.achlearnment.service.implementation;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.iljuhenson.achlearnment.service.DO.WordDO;
import com.iljuhenson.achlearnment.service.JsonUtilsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JsonUtilsServiceImpl implements JsonUtilsService {
    private ObjectMapper mapper;

    public JsonUtilsServiceImpl() {
        this.mapper = new ObjectMapper();
    }


    private JsonNode getJsonFromString(String jsonString) {
        JsonNode json = null;
        try {
            json = mapper.readTree(jsonString);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return json;
    }

    @Override
    public double extractDuration(String jsonString) {
        JsonNode json = getJsonFromString(jsonString);
        return json.get("duration").asDouble();
    }

    @Override
    public List<WordDO> extractTranscription(String jsonString) {
        JsonNode json = getJsonFromString(jsonString);
        JsonNode wordsAsJson = json.get("words");

        List<WordDO> words = new ArrayList<>();
        for(JsonNode node: wordsAsJson){
            WordDO word = new WordDO(node.get("word").asText(), node.get("start").asDouble(), node.get("end").asDouble());
            words.add(word);
        }

        return words;
    }

    @Override
    public String extractText(String jsonString) {
        JsonNode json = getJsonFromString(jsonString);
        return json.get("text").asText();
    }

    private JsonNode getMistakesOverviewContentJson(String jsonString) {
        JsonNode json = getJsonFromString(jsonString);

        String choices = json.get("choices").get(0).get("message").get("content").asText();

        JsonNode choicesJson = getJsonFromString(choices);

        return choicesJson;
    }

    @Override
    public String extractMistakesSummary(String reviewMistakesResponse) {
        JsonNode json = getMistakesOverviewContentJson(reviewMistakesResponse);
        return json.get("mistakes_summary").asText();
    }

    @Override
    public String extractAdvice(String reviewMistakesResponse) {
        JsonNode json = getMistakesOverviewContentJson(reviewMistakesResponse);
        return json.get("advice").asText();
    }

    @Override
    public boolean extractIsOnTopic(String reviewMistakesResponse) {
        JsonNode json = getMistakesOverviewContentJson(reviewMistakesResponse);
        return json.get("is_on_topic").asBoolean();
    }
}
