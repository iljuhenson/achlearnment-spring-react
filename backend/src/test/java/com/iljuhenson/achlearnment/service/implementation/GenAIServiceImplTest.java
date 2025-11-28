package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.service.GenAIService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

@TestPropertySource(locations="classpath:test.properties")
class GenAIServiceImplTest {
    @Test
    void reviewMistakesInTextAsJsonStringResponse() {
        GenAIService genAIService = new GenAIServiceImpl("whisper-large-v3-turbo", "moonshotai/kimi-k2-instruct-0905", "You are an english teacher who is listening to a student talking about a certain topic, which will be given at the end of this prompt. Create short mistakes overview no longer than 100 words, give student advice what to do to fix those mistakes and check if the user was talking on topic, don't be very strict about the topic checking. Output JSON only using the schema provided.", System.getenv("GROQ_API_KEY"));

        String response = genAIService.reviewMistakesInTextAsJsonStringResponse("It's either you have it or you don't. That sounds like excuses to me. I mean, you got to figure it out. If you really have an obsession to figure it out, you will figure it out. Every puzzle is constructed differently. Everybody has a different puzzle, man. You just got to figure out your own puzzle.", "Motivation");

        System.out.println(response);
    }


    @Test
    void speechToTextAsJsonStringResponse() {
        GenAIService genAIService = new GenAIServiceImpl("whisper-large-v3-turbo", "moonshotai/kimi-k2-instruct-0905", "You are an english teacher who is listening to a student talking about a certain topic, which will be given at the end of this prompt. Create short mistakes overview no longer than 100 words, give student advice what to do to fix those mistakes and check if the user was talking on topic, don't be very strict about the topic checking. Output JSON only using the schema provided.", System.getenv("GROQ_API_KEY"));

        try {
            String response = genAIService.speechToTextAsJsonStringResponse(new MockMultipartFile("my_file.mp3", Files.readAllBytes(Path.of("my_file.mp3"))));
            System.out.println(response);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

//        GenAIServiceImpl genAIService = new GenAIServiceImpl("whisper-large-v3-turbo", "moonshotai/kimi-k2-instruct-0905", "You are an english teacher who is listening to a student talking about a certain topic, which will be given at the end of this prompt. Create short mistakes overview no longer than 100 words, give student advice what to do to fix those mistakes and check if the user was talking on topic, don't be very strict about the topic checking. Output JSON only using the schema provided.", System.getenv("GROQ_API_KEY"));
//
//        System.out.println(genAIService.speechToTextAsJsonStringResponse(new File("src/test/data/speech.mp3")));
    }
}