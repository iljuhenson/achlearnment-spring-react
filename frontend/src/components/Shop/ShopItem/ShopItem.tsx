import {ShopItem as ShopItemType} from "../../../pages/TasksPage/types/tasks";
import { ShoppingBagOutlined} from "@mui/icons-material";
import ShopItemWrapperStyled from "../ShopItemWrapper/ShopItemWrapper.styled.tsx";
import IconWrapperStyled from "../../IconWrapper/IconWrapper.styled.tsx";
import ShopItemInnerWrapperStyled from "../ShopItemInnerWrapper/ShopItemInnerWrapper.styled.tsx";
import ShopItemNameWrapperStyled from "../ShopItemNameWrapper/ShopItemNameWrapper.styled.tsx";
import ShopItemInfoWrapperStyled from "../ShopItemInfoWrapper/ShopItemInfoWrapper.styled.tsx";
import ShopItemPriceWrapperStyled from "../ShopItemPriceWrapper/ShopItemPriceWrapper.styled.tsx";
import {useTheme} from "styled-components";

function ShopItem({id, name, price, description, bought} : ShopItemType) {
    const theme = useTheme();
    return (
        <ShopItemWrapperStyled color={bought ? theme.colors.shop.purchased : theme.colors.shop.available}>
            <ShopItemInnerWrapperStyled>
                <IconWrapperStyled>
                    <ShoppingBagOutlined />
                </IconWrapperStyled>
                <ShopItemInfoWrapperStyled>
                    <ShopItemNameWrapperStyled>
                        {name}
                    </ShopItemNameWrapperStyled>
                    <ShopItemPriceWrapperStyled>
                        {price}
                    </ShopItemPriceWrapperStyled>
                </ShopItemInfoWrapperStyled>
            </ShopItemInnerWrapperStyled>

        </ShopItemWrapperStyled>
    );
}

export default ShopItem;