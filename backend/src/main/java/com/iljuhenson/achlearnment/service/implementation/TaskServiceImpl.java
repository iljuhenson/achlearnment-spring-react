package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.*;
import com.iljuhenson.achlearnment.repository.*;
import com.iljuhenson.achlearnment.service.DO.TaskDO;
import com.iljuhenson.achlearnment.service.TaskService;
import com.iljuhenson.achlearnment.service.UserService;
import com.iljuhenson.achlearnment.service.exception.TaskException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;
    private FillTaskPartRepository fillTaskPartRepository;
    private MainTaskPartRepository mainTaskPartRepository;
    private TaskTypeRepository taskTypeRepository;
    private UserService userService;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository, FillTaskPartRepository fillTaskPartRepository, MainTaskPartRepository mainTaskPartRepository,  TaskTypeRepository taskTypeRepository, UserService userService) {
        this.taskRepository = taskRepository;
        this.fillTaskPartRepository = fillTaskPartRepository;
        this.mainTaskPartRepository = mainTaskPartRepository;
        this.taskTypeRepository = taskTypeRepository;
        this.userService = userService;
    }

    @Override
    public void finishUserTaskOfId(User user, int taskId) throws TaskException{
        Optional<Task> finishedTaskOptional = user.findTaskById(taskId);

        if (finishedTaskOptional.isEmpty()) {
            throw new TaskException("There's no such task with id of '%d'.".formatted(taskId));
        }

        Task finishedTask = finishedTaskOptional.get();

        if (finishedTask.getCompleted()) {
            throw new TaskException("Task is already completed");
        }
        finishedTask.setCompleted(true);
        int balance = user.getBalance();
        user.setBalance(balance + finishedTask.getTaskType().getPay());

        userService.save(user);
    }

    @Override
    public List<TaskDO> findAllUserTasks(User user) throws TaskException {
        if(!user.hasTodayActivity()) {
            throw new TaskException("You didn't query activity endpoint to unblock this.");
        }

        return user.getTasks().stream().map(task -> new TaskDO(task.getId(), task.getMainTaskPart().getText(), task.getFillTaskPart().getWord(), task.getTaskType().getType(), task.getTaskType().getDuration(), task.getTaskType().getPay(), task.getCompleted())).toList();
    }

    @Override
    public void generateUserTasks(User user) {
        // Remove all the tasks that user has now
        taskRepository.deleteAllByUser(user);

        // Assumes that there are not that many types of tasks in the database
        int amountOfTasks = user.calculateAmountOfTasks();

        List<TaskType> taskTypes = taskTypeRepository.findAll();

        Random random = new Random();

        List<TaskType> randomTaskTypes = IntStream.range(0, amountOfTasks).mapToObj(i -> taskTypes.get(random.nextInt(taskTypes.size()))).toList();

        List<MainTaskPart> mainTaskParts = mainTaskPartRepository.findAll();
        List<Integer> mainTaskPartIndexes = IntStream.range(1, mainTaskParts.size()).boxed().collect(Collectors.toList());
        Collections.shuffle(mainTaskPartIndexes);
        List<MainTaskPart> randomMainTaskParts = mainTaskPartIndexes.subList(0, amountOfTasks).stream().map(mainTaskParts::get).toList();

        List<FillTaskPart> fillTaskParts = fillTaskPartRepository.findAll();
        List<Integer> fillTaskPartIndexes = IntStream.range(1, fillTaskParts.size()).boxed().collect(Collectors.toList());
        Collections.shuffle(fillTaskPartIndexes);
        List<FillTaskPart> randomFillTaskParts = fillTaskPartIndexes.subList(0, amountOfTasks).stream().map(fillTaskParts::get).toList();

        Set<Task> tasks = IntStream.range(0, amountOfTasks).mapToObj(i -> new Task(randomFillTaskParts.get(i), randomMainTaskParts.get(i), randomTaskTypes.get(i), user)).collect(Collectors.toSet());

        user.setTasks(tasks);
//
//        userService.save(user);
    }
}
