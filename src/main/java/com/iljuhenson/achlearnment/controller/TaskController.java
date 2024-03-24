package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.controller.DO.TaskDO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {
    @GetMapping("/user/tasks")
    public List<TaskDO> getUserTasks() {
        return null;
    }
}
