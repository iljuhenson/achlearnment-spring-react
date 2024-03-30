package com.iljuhenson.achlearnment.service.DO;

public class ExceptionDO {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ExceptionDO() {
    }

    public ExceptionDO(String message) {
        this.message = message;
    }
}
