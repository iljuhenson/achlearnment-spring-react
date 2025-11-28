package com.iljuhenson.achlearnment.service;

import org.springframework.web.multipart.MultipartFile;

public interface GenAIService {
    String speechToTextAsJsonStringResponse(MultipartFile audioFile);

    String reviewMistakesInTextAsJsonStringResponse(String text, String topic);

}