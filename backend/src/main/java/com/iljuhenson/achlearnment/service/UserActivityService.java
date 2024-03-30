package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.entity.UserActivity;
import com.iljuhenson.achlearnment.service.DO.UserActivityDO;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public interface UserActivityService {
    List<LocalDate> findAllUserActivities(User user);
}
