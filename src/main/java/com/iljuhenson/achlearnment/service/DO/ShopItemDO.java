package com.iljuhenson.achlearnment.service.DO;

public class ShopItemDO {
    private int id;
    private String name;
    private String description;
    private int price;

    private boolean isBought;

    public ShopItemDO(int id, String name, String description, int price, boolean isBought) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.isBought = isBought;
    }

    public boolean isBought() {
        return isBought;
    }

    public void setBought(boolean bought) {
        isBought = bought;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public ShopItemDO() {
    }

    public ShopItemDO(int id, String name, String description, int price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
