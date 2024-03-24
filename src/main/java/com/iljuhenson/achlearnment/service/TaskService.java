package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.Task;

import java.util.List;

public interface TaskService {
    List<Task> findAllUserTasks();
    void generateUserTasks();
}
