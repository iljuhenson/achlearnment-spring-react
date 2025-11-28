package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.service.DO.WordDO;

import java.util.ArrayList;
import java.util.List;

public interface JsonUtilsService {
    double extractDuration(String jsonString);
    String extractText(String jsonString);
    List<WordDO> extractTranscription(String response);

    String extractMistakesSummary(String reviewMistakesResponse);

    String extractAdvice(String reviewMistakesResponse);

    boolean extractIsOnTopic(String reviewMistakesResponse);
}
