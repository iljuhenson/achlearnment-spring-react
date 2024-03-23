package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "balance")
    private Integer balance;

    @OneToMany(mappedBy = "user")
    private Set<UserActivity> userActivities;

    @OneToMany(mappedBy = "user")
    private Set<Task> tasks;

    @ManyToMany
    @JoinTable(name = "user_shop_item", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "shop_item_id"))
    private Set<ShopItem> shopItems;

    public User(Integer balance) {
        this.balance = balance;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public Set<UserActivity> getUserActivities() {
        return userActivities;
    }

    public void setUserActivities(Set<UserActivity> userActivities) {
        this.userActivities = userActivities;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

    public Set<ShopItem> getShopItems() {
        return shopItems;
    }

    public void setShopItems(Set<ShopItem> shopItems) {
        this.shopItems = shopItems;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", balance=" + balance +
                ", userActivities=" + userActivities +
                ", tasks=" + tasks +
                ", shopItems=" + shopItems +
                '}';
    }
}
