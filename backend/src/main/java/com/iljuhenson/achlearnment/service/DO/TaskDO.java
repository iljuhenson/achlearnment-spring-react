package com.iljuhenson.achlearnment.service.DO;

public class TaskDO {
    private int id;
    private String mainTaskPart;
    private String fillTaskPart;
    private String taskType;
    private int duration;
    private int pay;
    private boolean isCompleted;

    public TaskDO() {
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPay() {
        return pay;
    }

    public void setPay(int pay) {
        this.pay = pay;
    }

    public TaskDO(int id, String mainTaskPart, String fillTaskPart, String taskType, int duration, int pay, boolean isCompleted) {
        this.id = id;
        this.mainTaskPart = mainTaskPart;
        this.fillTaskPart = fillTaskPart;
        this.taskType = taskType;
        this.duration = duration;
        this.pay = pay;
        this.isCompleted = isCompleted;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMainTaskPart() {
        return mainTaskPart;
    }

    public void setMainTaskPart(String mainTaskPart) {
        this.mainTaskPart = mainTaskPart;
    }

    public String getFillTaskPart() {
        return fillTaskPart;
    }

    public void setFillTaskPart(String fillTaskPart) {
        this.fillTaskPart = fillTaskPart;
    }
}
