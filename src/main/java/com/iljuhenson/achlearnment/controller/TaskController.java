package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.TaskDO;
import com.iljuhenson.achlearnment.service.TaskService;
import com.iljuhenson.achlearnment.service.exception.TaskException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {
    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/user/tasks")
    public List<TaskDO> getUserTasks(@AuthenticationPrincipal User user) throws TaskException {
        return taskService.findAllUserTasks(user);
    }

    @PutMapping("/user/tasks/{taskId}/complete")
    public void completeUserTask(@AuthenticationPrincipal User user, @PathVariable int taskId) {
        taskService.finishUserTaskOfId(user, taskId);
    }

}
