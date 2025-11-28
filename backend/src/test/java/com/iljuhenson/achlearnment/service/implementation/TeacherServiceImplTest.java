package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.service.TeacherService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;

//@ActiveProfiles("")
class TeacherServiceImplTest {

    TeacherService teacherService;

    @Test
    void ApiReturnsSomething() {
//        ReflectionTestUtils.setField(teacherService, "API_KEY", System.getenv("GROQ_API_KEY"));
//        System.out.println(teacherService.summarizeSpeech(new File("./audio/speech.mp3")));
    }
}