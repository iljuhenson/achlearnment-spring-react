import React from 'react';
import {ShopItem as ShopItemType} from "../../../pages/TasksPage/types/tasks";
import { ShoppingBagOutlined} from "@mui/icons-material";
import ShopItemWrapperStyled from "../ShopItemWrapper/ShopItemWrapper.styled.tsx";
import IconWrapperStyled from "../../IconWrapper/IconWrapper.styled.tsx";

function ShopItem({id, name, price, description, bought} : ShopItemType) {
    return (
        <ShopItemWrapperStyled>
            <IconWrapperStyled>
                <ShoppingBagOutlined />
            </IconWrapperStyled>
        </ShopItemWrapperStyled>
    );
}

export default ShopItem;