package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.FillTaskPart;
import com.iljuhenson.achlearnment.entity.MainTaskPart;
import com.iljuhenson.achlearnment.entity.Task;
import com.iljuhenson.achlearnment.entity.TaskType;
import com.iljuhenson.achlearnment.repository.FillTaskPartRepository;
import com.iljuhenson.achlearnment.repository.MainTaskPartRepository;
import com.iljuhenson.achlearnment.repository.TaskRepository;
import com.iljuhenson.achlearnment.repository.TaskTypeRepository;
import com.iljuhenson.achlearnment.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;
    private FillTaskPartRepository fillTaskPartRepository;
    private MainTaskPartRepository mainTaskPartRepository;
    private TaskTypeRepository taskTypeRepository;

    public TaskServiceImpl(TaskRepository taskRepository, FillTaskPartRepository fillTaskPartRepository, MainTaskPartRepository mainTaskPartRepository,  TaskTypeRepository taskTypeRepository) {
        this.taskRepository = taskRepository;
        this.fillTaskPartRepository = fillTaskPartRepository;
        this.mainTaskPartRepository = mainTaskPartRepository;
        this.taskTypeRepository = taskTypeRepository;
    }

    @Override
    public List<Task> findAllUserTasks() {
        return null;
    }

    @Override
    public void generateUserTasks() {
        Random random = new Random();

    }
}
