import React from 'react';
import Card from "../Card/Card.tsx";
import RightAlignedCardTitleStyled from "../RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import ShopHeaderStyled from "./ShopHeader/ShopHeader.styled.tsx";
import BalanceStyled from "./Balance/Balance.styled.tsx";
import {ShopItem} from "../../pages/TasksPage/types/tasks";
import ShopItemComponent from "./ShopItem/ShopItem"
import ShopItemsWrapperStyled from "./ShopItemsWrapper/ShopItemsWrapper.styled.tsx";

interface ShopProps {
    balance: number,
    shopItems: Array<ShopItem>
}

function Shop({balance, shopItems}: ShopProps) {
    return (
        <Card isTakingAllHeight={true} headerComponent={<ShopHeaderStyled>
            <BalanceStyled>Balance: {balance}</BalanceStyled>
            <p>Shop</p>
        </ShopHeaderStyled>}>
            <ShopItemsWrapperStyled>
                {shopItems.map(item => <ShopItemComponent key={item.id} {...item} />)}
            </ShopItemsWrapperStyled>
        </Card>
    );
}

export default Shop;