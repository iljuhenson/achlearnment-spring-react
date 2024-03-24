package com.iljuhenson.achlearnment.controller.DO;

public class RegisterRequestDO {
    private String email;
    private String password;

    public RegisterRequestDO() {
    }

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

    public RegisterRequestDO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
