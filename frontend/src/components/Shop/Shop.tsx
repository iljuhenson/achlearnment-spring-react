import React from 'react';
import Card from "../Card/Card.tsx";
import RightAlignedCardTitleStyled from "../RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import ShopHeaderStyled from "./ShopHeader/ShopHeader.styled.tsx";
import BalanceStyled from "./Balance/Balance.styled.tsx";
import {ShopItem} from "../../pages/TasksPage/types/tasks";
import ShopItemComponent from "./ShopItem/ShopItem"
import ShopItemsWrapperStyled from "./ShopItemsWrapper/ShopItemsWrapper.styled.tsx";
import ShopHeaderNameStyled from "./ShopHeaderName/ShopHeaderName.styled.tsx";

interface ShopProps {
    balance: number,
    shopItems: Array<ShopItem>,
    showBuyDialog: (shopItemId: number) => void,
}

function Shop({balance, shopItems, showBuyDialog}: ShopProps) {
    return (
        <Card isTakingAllHeight={true} headerComponent={<ShopHeaderStyled>
            <BalanceStyled>Balance: {balance}</BalanceStyled>
            <ShopHeaderNameStyled>Shop</ShopHeaderNameStyled>
        </ShopHeaderStyled>}>
            <ShopItemsWrapperStyled>
                {shopItems.map(item => <div key={item.id} onClick={() => { !item.bought && showBuyDialog(item.id) } }><ShopItemComponent  {...item} /></div>)}
            </ShopItemsWrapperStyled>
        </Card>
    );
}

export default Shop;