package com.iljuhenson.achlearnment.service.DO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class ReviewSpeechResultDO {
    private boolean isMarkedAsCompleted;
    private boolean isOnTopic;
    private String advice;
    private String mistakesOverview;
}
