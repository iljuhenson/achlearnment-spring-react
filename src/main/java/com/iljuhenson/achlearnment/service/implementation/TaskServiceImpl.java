package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.*;
import com.iljuhenson.achlearnment.repository.FillTaskPartRepository;
import com.iljuhenson.achlearnment.repository.MainTaskPartRepository;
import com.iljuhenson.achlearnment.repository.TaskRepository;
import com.iljuhenson.achlearnment.repository.TaskTypeRepository;
import com.iljuhenson.achlearnment.service.DO.TaskDO;
import com.iljuhenson.achlearnment.service.TaskService;
import com.iljuhenson.achlearnment.service.exception.TaskException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.IntStream;

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
    public void finishUserTaskOfId(User user, int taskId) {
        // TODO: implements this method, to do so, I need to create a new column is_finished in db.
    }

    @Override
    public List<TaskDO> findAllUserTasks(User user) throws TaskException {
        if(!user.hasTodayActivity()) {
            throw new TaskException("You can't query tasks until you query activity");
        }

        return user.getTasks().stream().map(task -> new TaskDO(task.getId(), task.getMainTaskPart().getText(), task.getFillTaskPart().getWord())).toList();
    }

    @Override
    public void generateUserTasks(User user) {
        // Remove all the tasks that user has now
        user.clearTasks();

        // Assumes that there are not that many types of tasks in the database
        int amountOfTasks = user.calculateAmountOfTasks();
        List<TaskType> taskTypes = taskTypeRepository.findAll();

        Random random = new Random();

        List<TaskType> randomTaskTypes = IntStream.range(0, amountOfTasks).mapToObj(i -> taskTypes.get(random.nextInt(taskTypes.size()))).toList();

        Set<Task> generatedTasks = new HashSet<Task>();

        for (TaskType taskType : randomTaskTypes) {
            Task task = new Task();

            List<MainTaskPart> mainTaskParts = List.copyOf(taskType.getMainTaskParts());
            MainTaskPart mainTaskPart = mainTaskParts.get(random.nextInt(mainTaskParts.size()));
            task.setMainTaskPart(mainTaskPart);

            List<FillTaskPart> fillTaskParts = fillTaskPartRepository.findAll();
            FillTaskPart fillTaskPart = fillTaskParts.get(random.nextInt(fillTaskParts.size()));
            task.setFillTaskPart(fillTaskPart);

            generatedTasks.add(task);
        }
        user.setTasks(generatedTasks);
    }
}
