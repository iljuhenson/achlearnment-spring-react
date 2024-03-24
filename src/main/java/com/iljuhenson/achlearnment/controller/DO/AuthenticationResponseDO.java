package com.iljuhenson.achlearnment.controller.DO;

public class AuthenticationResponseDO {
    private String token;

    public AuthenticationResponseDO() {
    }

    public AuthenticationResponseDO(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
