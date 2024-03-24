package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.service.DO.ActivityDO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivityController {
    @GetMapping("/user/activities")
    public List<ActivityDO> getUserActivities(Principal principal) {
        return null;
    }
}
