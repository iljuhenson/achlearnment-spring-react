package com.iljuhenson.achlearnment.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "fill_task_part")
public class FillTaskPart {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "word")
    private String word;

    @OneToMany(mappedBy = "fillTaskPart")
    private Set<Task> tasks;

    public FillTaskPart(String word) {
        this.word = word;
    }

    public FillTaskPart() {
    }

    @Override
    public String toString() {
        return "FillTaskPart{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", tasks=" + tasks +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }
}
