package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "task_type")
public class TaskType {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type")
    private String type;

    @Column(name = "pay")
    private Integer pay;

    @Column(name = "duration")
    private Integer duration;

    @OneToMany(mappedBy = "taskType")
    private Set<Task> tasks;

    public TaskType() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPay() {
        return pay;
    }

    public void setPay(Integer pay) {
        this.pay = pay;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

    @Override
    public String toString() {
        return "TaskType{" +
                "id=" + id +
                ", type=" + type +
                ", pay=" + pay +
                ", duration=" + duration +
                ", tasks=" + tasks +
                '}';
    }

    public TaskType(String type, Integer pay, Integer duration) {
        this.type = type;
        this.pay = pay;
        this.duration = duration;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public TaskType(Integer pay, Integer duration) {
        this.pay = pay;
        this.duration = duration;
    }
}
