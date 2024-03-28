package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.ExceptionDO;
import com.iljuhenson.achlearnment.service.DO.TaskDO;
import com.iljuhenson.achlearnment.service.TaskService;
import com.iljuhenson.achlearnment.service.exception.ShopItemException;
import com.iljuhenson.achlearnment.service.exception.TaskException;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

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
    @Operation(
            description = "Returns all the tasks which were assigned to the user today. Returns an error when \"/user/activities\" haven't been queried today.",
            summary = "Returns tasks assigned to user"
    )
    public List<TaskDO> getUserTasks(@AuthenticationPrincipal User user) throws TaskException {
        return taskService.findAllUserTasks(user);
    }

    @PutMapping("/user/tasks/{taskId}/complete")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @Operation(
            description = "Marks user task as completed and increases user balance by the task pay.",
            summary = "Marks user task as completed"
    )
    public void completeUserTask(@AuthenticationPrincipal User user, @PathVariable int taskId) throws TaskException {
        taskService.finishUserTaskOfId(user, taskId);
    }

    @ExceptionHandler({ TaskException.class })
    public ResponseEntity<ExceptionDO> handleShopItemException(
            Exception ex, WebRequest request) {
        return new ResponseEntity<ExceptionDO>(
                new ExceptionDO(ex.getMessage()), new HttpHeaders(), HttpStatus.CONFLICT);
    }


}
