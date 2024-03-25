package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "user_activity")
public class UserActivity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public UserActivity(LocalDate day) {
        this.day = day;
    }

    @Basic
    @Column(name = "day", nullable = false)
    private LocalDate day;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    public UserActivity() {
    }

    @Override
    public String toString() {
        return "UserActivity{" +
                "id=" + id +
                ", day=" + day +
                ", user=" + user +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
