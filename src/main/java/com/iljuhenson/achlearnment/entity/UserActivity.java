package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "user_activity")
public class UserActivity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "day", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date day;
    @ManyToOne
    @JoinColumn(name = "id")
    private User user;

    public UserActivity() {
    }

    public UserActivity(Date day) {
        this.day = day;
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

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
