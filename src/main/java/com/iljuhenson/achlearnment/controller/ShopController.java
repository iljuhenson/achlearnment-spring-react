package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.controller.DO.ShopItemDO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ShopController {
    @GetMapping("/user/shop/items")
    public List<ShopItemDO> getUserPurchasedItems() {
        return null;
    }

    @GetMapping("/shop/items")
    public List<ShopItemDO> getItems() {
        return null;
    }

    @PutMapping("/user/shop/items/{itemId}/buy")
    public String buyItem(@PathVariable int itemId) {
        return "Fail";
    }
}
