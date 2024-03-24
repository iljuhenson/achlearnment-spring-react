package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.controller.DO.ActivityDO;
import com.iljuhenson.achlearnment.controller.DO.TaskDO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivityController {
    @GetMapping("/user/activities")
    public List<ActivityDO> getUserActivities() {
        return null;
    }
}
