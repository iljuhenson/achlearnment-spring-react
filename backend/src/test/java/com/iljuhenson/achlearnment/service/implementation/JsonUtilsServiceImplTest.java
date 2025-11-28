package com.iljuhenson.achlearnment.service.implementation;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

class JsonUtilsServiceImplTest {
    @Test
    void isWorking() {

        String promptResult = null;
        try {
            promptResult = Files.readString(Path.of("src/test/data/mistakes-overview-result.json"), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        JsonUtilsServiceImpl jsonUtilsService = new JsonUtilsServiceImpl();
        String adv = jsonUtilsService.extractAdvice(promptResult);
    }
}