package com.iljuhenson.achlearnment.service;

import com.iljuhenson.achlearnment.entity.ShopItem;
import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.ShopItemDO;
import com.iljuhenson.achlearnment.service.exception.ShopItemException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;


public interface ShopItemService {
    List<ShopItemDO> findAll(User user);
    void buyItem(User user, int itemId) throws ShopItemException;
    void listAllUsersPerks();
}
