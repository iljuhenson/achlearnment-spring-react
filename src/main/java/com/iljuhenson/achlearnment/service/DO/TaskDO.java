package com.iljuhenson.achlearnment.service.DO;

public class TaskDO {
    private int id;
    private String mainTaskPart;
    private String fillTaskPart;

    public TaskDO() {
    }

    public TaskDO(int id, String mainTaskPart, String fillTaskPart) {
        this.id = id;
        this.mainTaskPart = mainTaskPart;
        this.fillTaskPart = fillTaskPart;
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
