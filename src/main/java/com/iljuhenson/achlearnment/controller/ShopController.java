package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.service.DO.ShopItemDO;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ShopController {
    @GetMapping("/user/shop/items")
    public List<ShopItemDO> getUserPurchasedItems(Principal principal) {
        return null;
    }

    @GetMapping("/shop/items")
    public List<ShopItemDO> getItems(Principal principal) {
        return null;
    }

    @PutMapping("/user/shop/items/{itemId}/buy")
    public String buyItem(@PathVariable int itemId, Principal principal) {
        return "Fail";
    }
}
