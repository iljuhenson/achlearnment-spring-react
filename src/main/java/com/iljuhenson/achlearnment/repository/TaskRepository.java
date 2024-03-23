package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
