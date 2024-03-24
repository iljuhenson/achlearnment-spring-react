package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "main_task_part")
public class MainTaskPart {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "text")
    private String text;

    @OneToMany(mappedBy = "mainTaskPart")
    private Set<Task> task;
    @ManyToOne
    @JoinColumn(name = "task_type_id", nullable = false)
    private TaskType taskType;

    public MainTaskPart(String text) {
        this.text = text;
    }

    public MainTaskPart() {
    }

    @Override
    public String toString() {
        return "MainTaskPart{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", task=" + task +
                ", taskType=" + taskType +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Set<Task> getTask() {
        return task;
    }

    public void setTask(Set<Task> task) {
        this.task = task;
    }
}
