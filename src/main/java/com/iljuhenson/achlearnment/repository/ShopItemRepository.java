package com.iljuhenson.achlearnment.repository;

import com.iljuhenson.achlearnment.entity.ShopItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopItemRepository extends JpaRepository<ShopItem, Integer> {
}
