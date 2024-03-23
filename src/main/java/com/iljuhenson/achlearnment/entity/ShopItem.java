package com.iljuhenson.achlearnment.entity;

import com.iljuhenson.achlearnment.entity.enums.ShopItemFunctionEnum;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "shop_item")
public class ShopItem {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Integer price;

    @Column(name = "description")
    private String description;

    @Column(name = "function")
    @Enumerated
    private ShopItemFunctionEnum function;

    @ManyToMany
    @JoinTable(name = "user_shop_item", joinColumns = @JoinColumn(name = "shop_item_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> users;

    public ShopItem(String name, Integer price, String description, ShopItemFunctionEnum function) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.function = function;
    }

    public ShopItem() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ShopItemFunctionEnum getFunction() {
        return function;
    }

    public void setFunction(ShopItemFunctionEnum function) {
        this.function = function;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "ShopItem{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", function=" + function +
                ", users=" + users +
                '}';
    }
}
