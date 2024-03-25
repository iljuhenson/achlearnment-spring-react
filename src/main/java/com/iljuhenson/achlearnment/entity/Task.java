package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "is_completed")
    private Boolean is_completed;

    @ManyToOne
    @JoinColumn(name = "fill_task_part_id", nullable = false)
    private FillTaskPart fillTaskPart;

    @ManyToOne
    @JoinColumn(name = "main_task_part_id", nullable = false)
    private MainTaskPart mainTaskPart;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", is_completed=" + is_completed +
                ", fillTaskPart=" + fillTaskPart +
                ", mainTaskPart=" + mainTaskPart +
                ", user=" + user +
                '}';
    }

    public Boolean getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(Boolean is_completed) {
        this.is_completed = is_completed;
    }

    public Task() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public FillTaskPart getFillTaskPart() {
        return fillTaskPart;
    }

    public void setFillTaskPart(FillTaskPart fillTaskPart) {
        this.fillTaskPart = fillTaskPart;
    }

    public MainTaskPart getMainTaskPart() {
        return mainTaskPart;
    }

    public void setMainTaskPart(MainTaskPart mainTaskPart) {
        this.mainTaskPart = mainTaskPart;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
