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
    private Boolean isCompleted;

    @ManyToOne
    @JoinColumn(name = "fill_task_part_id", nullable = false)
    private FillTaskPart fillTaskPart;

    @ManyToOne
    @JoinColumn(name = "main_task_part_id", nullable = false)
    private MainTaskPart mainTaskPart;

    @ManyToOne
    @JoinColumn(name = "task_type_id", nullable = false)
    private TaskType taskType;



    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public TaskType getTaskType() {
        return taskType;
    }

    public void setTaskType(TaskType taskType) {
        this.taskType = taskType;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", isCompleted=" + isCompleted +
                ", fillTaskPart=" + fillTaskPart +
                ", mainTaskPart=" + mainTaskPart +
                ", taskType=" + taskType +
                ", user=" + user +
                '}';
    }

    public Boolean getCompleted() {
        return isCompleted;
    }

    public void setCompleted(Boolean completed) {
        isCompleted = completed;
    }

    public Task(Boolean isCompleted) {
        this.isCompleted = isCompleted;
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
