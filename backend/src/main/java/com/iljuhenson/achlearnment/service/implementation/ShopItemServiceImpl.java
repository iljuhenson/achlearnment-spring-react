package com.iljuhenson.achlearnment.service.implementation;

import com.iljuhenson.achlearnment.entity.ShopItem;
import com.iljuhenson.achlearnment.entity.User;
import com.iljuhenson.achlearnment.repository.ShopItemRepository;
import com.iljuhenson.achlearnment.repository.UserRepository;
import com.iljuhenson.achlearnment.service.DO.ShopItemDO;
import com.iljuhenson.achlearnment.service.ShopItemService;
import com.iljuhenson.achlearnment.service.UserService;
import com.iljuhenson.achlearnment.service.exception.ShopItemException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ShopItemServiceImpl implements ShopItemService {
    private ShopItemRepository shopItemRepository;
    private UserService userService;

    public ShopItemServiceImpl(ShopItemRepository shopItemRepository, UserService userService) {
        this.shopItemRepository = shopItemRepository;
        this.userService = userService;
    }

    @Override
    public List<ShopItemDO> findAll(User user) {
        List<ShopItem> shopItems = shopItemRepository.findAll();
        Set<ShopItem> userShopItems = user.getShopItems();

        List<ShopItemDO> shopItemsDO = shopItems.stream().map(item -> {
            boolean isBought = userShopItems.stream().anyMatch(userItem -> userItem.getId() == item.getId());
            return new ShopItemDO(item.getId(), item.getName(), item.getDescription(), item.getPrice(), isBought);
        }).toList();
        return shopItemsDO;
    }

    @Override
    public void buyItem(User user, int itemId) throws ShopItemException {
        // Check if user doesn't have that item already
        if (user.hasItemOfId(itemId)) {
            throw new ShopItemException("Item is already bought");
        }

        // Check if item with such id exists.
        Optional<ShopItem> optionalItem = shopItemRepository.findById(itemId);
        if (optionalItem.isEmpty()) {
            throw new ShopItemException("There's no such item with id of '%d'".formatted(itemId));
        }

        // Check whether user has enough money to but the item
        ShopItem item = optionalItem.get();
        if (item.getPrice() > user.getBalance()) {
            throw new ShopItemException("Not enough money to buy this item");
        }

        // if everything is okay, then buy the item
        user.buyShopItem(item);
        userService.save(user);
    }

    @Override
    public void listAllUsersPerks() {

    }
}
