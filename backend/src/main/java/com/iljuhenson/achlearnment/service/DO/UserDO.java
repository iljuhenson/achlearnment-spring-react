package com.iljuhenson.achlearnment.service.DO;

public class UserDO {
    private int balance;

    public UserDO() {
    }

    public UserDO(int balance) {
        this.balance = balance;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
