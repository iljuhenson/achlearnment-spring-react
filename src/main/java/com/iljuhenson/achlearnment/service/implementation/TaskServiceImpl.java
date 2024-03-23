package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.Task;
import com.iljuhenson.achlearnment.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Override
    public List<Task> findAllUserTasks() {
        return null;
    }
}
