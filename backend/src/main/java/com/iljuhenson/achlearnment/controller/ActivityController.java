package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.UserActivityDO;
import com.iljuhenson.achlearnment.service.UserActivityService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivityController {

    private final UserActivityService userActivityService;
    public ActivityController(UserActivityService userActivityService) {
        this.userActivityService = userActivityService;
    }
    @GetMapping("/user/activities")
    @Operation(
            description = "Returns all dates when user was active. This point is also responsible for generating new tasks on daily base and should be accessed first before the \"/user/tasks\" endpoint.",
            summary = "Returns all dates when user was active"
    )
    public List<LocalDate> getUserActivities(@AuthenticationPrincipal User user) {
        return userActivityService.findAllUserActivities(user);
    }
}
