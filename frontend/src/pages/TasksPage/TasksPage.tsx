import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
import ColumnWrapperStyled from "../../components/ColumnWrapper/ColumnWrapper.styled.tsx";
import Card from "../../components/Card/Card.tsx";
import AppGridStyled from "../../components/AppGrid/AppGrid.styled.tsx";
import RightAlignedCardTitleStyled from "../../components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import {Activities, BalanceObject, ShopItem, Task} from "./types/tasks";
import {useState} from "react";

function TasksPage() {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [balanceObject, setBalanceObject] = useState<BalanceObject>({balance: 0});
    const [shopItems, setShopItems] = useState<Array<ShopItem>>([]);
    const [activities, setActivities] = useState<Activities>([]);

    return (
        <AppBackgroundStyled>
            <AppGridStyled>
                <ColumnWrapperStyled>
                    <Card headerComponent={<RightAlignedCardTitleStyled>Tasks</RightAlignedCardTitleStyled>}>
                        {/*{tasks.map(task => <)}*/}
                    </Card>
                </ColumnWrapperStyled>
                <ColumnWrapperStyled>

                </ColumnWrapperStyled>
            </AppGridStyled>
        </AppBackgroundStyled>
    );
}

export default TasksPage;