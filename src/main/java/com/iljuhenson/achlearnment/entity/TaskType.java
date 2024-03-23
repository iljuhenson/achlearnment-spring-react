package com.iljuhenson.achlearnment.entity;

import com.iljuhenson.achlearnment.entity.enums.TaskTypeEnum;
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
    @Enumerated(EnumType.STRING)
    private TaskTypeEnum type;

    @Column(name = "pay")
    private Integer pay;

    @OneToMany(mappedBy = "taskType")
    private Set<MainTaskPart> mainTaskParts;

    public TaskType() {
    }

    public TaskType(TaskTypeEnum type, Integer pay) {
        this.type = type;
        this.pay = pay;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public TaskTypeEnum getType() {
        return type;
    }

    public void setType(TaskTypeEnum type) {
        this.type = type;
    }

    public Integer getPay() {
        return pay;
    }

    public void setPay(Integer pay) {
        this.pay = pay;
    }

    public Set<MainTaskPart> getMainTaskParts() {
        return mainTaskParts;
    }

    public void setMainTaskParts(Set<MainTaskPart> mainTaskParts) {
        this.mainTaskParts = mainTaskParts;
    }

    @Override
    public String toString() {
        return "TaskType{" +
                "id=" + id +
                ", type=" + type +
                ", pay=" + pay +
                ", mainTaskParts=" + mainTaskParts +
                '}';
    }
}
