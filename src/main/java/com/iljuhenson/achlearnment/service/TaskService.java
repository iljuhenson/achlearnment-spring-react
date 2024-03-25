package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.Task;
import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.TaskDO;
import com.iljuhenson.achlearnment.service.exception.TaskException;

import java.util.List;

public interface TaskService {
    void finishUserTaskOfId(User user, int taskId);
    List<TaskDO> findAllUserTasks(User user) throws TaskException;
    void generateUserTasks(User user);
}
