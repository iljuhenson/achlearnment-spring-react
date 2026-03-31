import {useContext} from 'react';
import {ShopItem} from "../../pages/TasksPage/types/tasks";
import * as NewStyle from "../NewStyle/NewStyle.tsx"
import {TokenContext} from "../../context/context.ts";
import {useTheme} from "styled-components";

interface BuyItemModalContentProps {
    shopItem: ShopItem,
}

function BuyItemModalContent({shopItem}: BuyItemModalContentProps) {
    const {token} = useContext(TokenContext);
    const theme = useTheme();

    const buyItemRequest = async () => {
        const buyItemUrl = `/api/user/shop/items/${shopItem.id}/buy`;

        await fetch(buyItemUrl, {
            method: "PUT",
            headers: {
                "Authorization": token ? token : "",
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <NewStyle.Spacer x="1rem" y="1rem">
            <NewStyle.Row>
                <p>{shopItem.description}</p>
            </NewStyle.Row>
            <NewStyle.Row>
                <NewStyle.Spacer x="0" y="2rem">
                    <p>Price: <b>{shopItem.price}</b></p>
                </NewStyle.Spacer>
            </NewStyle.Row>
            <NewStyle.Row>
                <NewStyle.Column cols={9}></NewStyle.Column>
                <NewStyle.Column cols={3}>
                    <NewStyle.Button color={theme.colors.shop.available} onClick={buyItemRequest}>
                        Buy
                    </NewStyle.Button>
                </NewStyle.Column>
            </NewStyle.Row>

        </NewStyle.Spacer>
    );
}

export default BuyItemModalContent;
