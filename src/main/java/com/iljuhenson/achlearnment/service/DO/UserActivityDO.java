package com.iljuhenson.achlearnment.service.DO;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

public class UserActivityDO {
    private LocalDate day;

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public UserActivityDO() {
    }

    public UserActivityDO(LocalDate day) {
        this.day = day;
    }
}
