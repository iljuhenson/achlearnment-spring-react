package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.ShopItem;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ShopItemService {
    List<ShopItem> findAll();
    List<ShopItem> findAllUsersItems();
    void buyItem(int itemId);
    void listAllUsersPerks();
}
