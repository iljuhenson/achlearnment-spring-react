package com.iljuhenson.achlearnment.entity;

import com.iljuhenson.achlearnment.entity.enums.ShopItemFunctionEnum;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Entity
@Table(name = "user")
public class User implements UserDetails {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "balance")
    private Integer balance = 0;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = {CascadeType.MERGE})
    private Set<UserActivity> userActivities;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = {CascadeType.MERGE})
    private Set<Task> tasks;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToMany
    @JoinTable(name = "user_shop_item", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "shop_item_id"))
    private Set<ShopItem> shopItems;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_authority", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "authority_id"))
    private Set<Authority> authorities;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User() {
    }


    public void buyShopItem(ShopItem item) {
        balance -= item.getPrice();
        shopItems.add(item);
    }

    public boolean hasItemOfId(int id) {
        return !shopItems
                .stream()
                .filter(item -> item.getId() == id)
                .toList()
                .isEmpty();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorityList = new ArrayList<>();

        for (Authority authority : authorities) {
            authorityList.add( new SimpleGrantedAuthority(authority.getName().name()));
        }

        return authorityList;
    }

    public void setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean hasTodayActivity() {
        return userActivities.stream().anyMatch(activity -> activity.getDay().equals(LocalDate.now()));
    }

    public int calculateAmountOfTasks() {
        int defaultTaskAmount = 4;

        int bonusTaskAmount = (int) shopItems.stream().filter(shopItem -> shopItem.getFunction() == ShopItemFunctionEnum.EXPAND_DAILY_TASK_AMOUNT).count();

        return defaultTaskAmount + bonusTaskAmount;
    }

    public void clearTasks() {
        tasks = null;
    }

    public Optional<Task> findTaskById(int taskId) {
        return tasks.stream().filter(task -> taskId == task.getId()).findFirst();
    }
}
