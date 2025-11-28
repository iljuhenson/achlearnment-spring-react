package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.service.DO.ReviewSpeechResultDO;
import org.springframework.web.multipart.MultipartFile;

public interface TeacherService {
    ReviewSpeechResultDO reviewSpeech(MultipartFile audioFile);
}
