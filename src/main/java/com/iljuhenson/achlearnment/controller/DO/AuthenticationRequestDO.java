package com.iljuhenson.achlearnment.controller.DO;

public class AuthenticationRequestDO {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AuthenticationRequestDO() {
    }

    public AuthenticationRequestDO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    private String password;
}
