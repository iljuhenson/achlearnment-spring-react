package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.entity.UserActivity;
import com.iljuhenson.achlearnment.repository.UserRepository;
import com.iljuhenson.achlearnment.service.DO.UserActivityDO;
import com.iljuhenson.achlearnment.service.TaskService;
import com.iljuhenson.achlearnment.service.UserActivityService;
import com.iljuhenson.achlearnment.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
public class UserActivityServiceImpl implements UserActivityService {
    private final UserService userService;
    private final TaskService taskService;

    public UserActivityServiceImpl(UserService userService, TaskService taskService) {
        this.userService = userService;
        this.taskService = taskService;
    }

    @Override
    @Transactional
    public List<LocalDate> findAllUserActivities(User user) {
        if (!user.hasTodayActivity()) {
            updateTodayUserActivity(user);
            taskService.generateUserTasks(user);
            userService.save(user);
        }

        return user.getUserActivities().stream().map(UserActivity::getDay).toList();
    }

    public void updateTodayUserActivity(User user) {
        UserActivity userActivity = new UserActivity(LocalDate.now());

        userActivity.setUser(user);

        Set<UserActivity> updatedUserActivities = user.getUserActivities();
        updatedUserActivities.add(userActivity);

        user.setUserActivities(updatedUserActivities);
    }
}
