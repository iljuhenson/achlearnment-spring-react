package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.Task;
import com.iljuhenson.achlearnment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> deleteAllByUser(User user);

}
