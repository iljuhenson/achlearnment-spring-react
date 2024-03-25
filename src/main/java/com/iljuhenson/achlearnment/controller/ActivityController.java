package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.UserActivityDO;
import com.iljuhenson.achlearnment.service.UserActivityService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivityController {

    private final UserActivityService userActivityService;
    public ActivityController(UserActivityService userActivityService) {
        this.userActivityService = userActivityService;
    }
    @GetMapping("/user/activities")
    public List<UserActivityDO> getUserActivities(@AuthenticationPrincipal User user) {
        return userActivityService.findAllUserActivities(user);
    }
}
