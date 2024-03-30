package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.TaskType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskTypeRepository extends JpaRepository<TaskType, Integer> {
}
