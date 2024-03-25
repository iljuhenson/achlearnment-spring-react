package com.iljuhenson.achlearnment.controller;

import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.service.DO.ShopItemDO;
import com.iljuhenson.achlearnment.service.ShopItemService;
import com.iljuhenson.achlearnment.service.exception.ShopItemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ShopController {
    private ShopItemService shopItemService;

    @Autowired
    public ShopController(ShopItemService shopItemService) {
        this.shopItemService = shopItemService;
    }

    @GetMapping("/user/shop/items")
    public List<ShopItemDO> getUserPurchasedItems(@AuthenticationPrincipal User user) {
        return shopItemService.findAllUsersItems(user);
    }

    @GetMapping("/shop/items")
    public List<ShopItemDO> getItems() {
        return shopItemService.findAll();
    }

    @PutMapping("/user/shop/items/{itemId}/buy")
    public ResponseEntity<?> buyItem(@PathVariable int itemId, @AuthenticationPrincipal User user) throws ShopItemException {
        shopItemService.buyItem(user, itemId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @ExceptionHandler({ ShopItemException.class })
    public ResponseEntity<Object> handleShopItemException(
            Exception ex, WebRequest request) {
        return new ResponseEntity<Object>(
                ex.getMessage(), new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

}
