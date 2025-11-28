package com.iljuhenson.achlearnment.service.DO;

import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;
@ActiveProfiles("application")
class UserTaskRecordingDOTest {
    @Test
    void name() {
        File audioFile = new File("src/test/data/speech.mp3");
//        ReflectionTestUtils.setField(UserTaskRecordingDO.class, "API_KEY", System.getenv("GROQ_API_KEY"));
//        UserTaskRecordingDO t = UserTaskRecordingDO.initialize(audioFile);
    }
}