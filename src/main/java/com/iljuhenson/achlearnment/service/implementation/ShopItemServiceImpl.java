package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.ShopItem;
import com.iljuhenson.achlearnment.service.ShopItemService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopItemServiceImpl implements ShopItemService {
    @Override
    public List<ShopItem> findAll() {
        return null;
    }

    @Override
    public List<ShopItem> findAllUsersItems() {
        return null;
    }

    @Override
    public void buyItem(int itemId) {

    }

    @Override
    public void listAllUsersPerks() {

    }
}
