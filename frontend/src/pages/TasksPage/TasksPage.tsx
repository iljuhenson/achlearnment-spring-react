import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
import ColumnWrapperStyled from "../../components/ColumnWrapper/ColumnWrapper.styled.tsx";
import Card from "../../components/Card/Card.tsx";
import AppGridStyled from "../../components/AppGrid/AppGrid.styled.tsx";
import RightAlignedCardTitleStyled from "../../components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import {Activities, BalanceObject, ShopItem, Task} from "./types/tasks";
import {useContext, useEffect, useState} from "react";
import TaskRepresentation from "../../components/TaskRepresentation/TaskRepresentation.tsx";
import {TokenContext} from "../../context/context.ts";
import FlexOneWrapperStyled from "../../components/FlexOneWrapper/FlexOneWrapper.styled.tsx";
import TasksWrapperStyled from "../../components/TasksWrapper/TasksWrapper.styled.tsx";
import CalendarSectionWrapperStyled from "../../components/CalendarSectionWrapper/CalendarSectionWrapper.styled.tsx";
import CalendarSidebarWrapperStyled from "../../components/CalendarSidebarWrapper/CalendarSidebarWrapper.styled.tsx";
import IconWrapperStyled from "../../components/IconWrapper/IconWrapper.styled.tsx";
import {InfoOutlined} from "@mui/icons-material";
import FloatingButtonStyled from "../../components/FloatingButton/FloatingButton.styled.tsx";
import VerticalLogoWrapperStyled from "../../components/VerticalLogoWrapper/VerticalLogoWrapper.styled.tsx";
import LogoWrapperStyled from "../../components/LogoWrapper/LogoWrapper.styled.tsx";

function TasksPage() {
    const {token, updateToken} = useContext(TokenContext);
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [balanceObject, setBalanceObject] = useState<BalanceObject>({balance: 0});
    const [shopItems, setShopItems] = useState<Array<ShopItem>>([]);
    const [activities, setActivities] = useState<Activities>([]);

    const [selectedTask, setSelectedTask] = useState<number | null>(null);

    const expandTask = (taskId: number) => {
        if(taskId === selectedTask) {
            setSelectedTask(null);
        } else {
            setSelectedTask(taskId);
        }

    }

    const fetchTasks = async () => {
        const tasksUrl = "/api/user/tasks";

        const response = await fetch(tasksUrl, {
            method: "GET",
            headers: {
                "Authorization": token ? token : "",
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const jsonResponse: Array<Task> = await response.json();
            setTasks(jsonResponse);
        } else if (response.status === 403) {
            updateToken(undefined);
        }
    }

    const fetchActivities = async () => {
        const activitiesUrl = "/api/user/activities";

        const response = await fetch(activitiesUrl, {
            method: "GET",
            headers: {
                "Authorization": token ? token : "",
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const jsonResponse: Activities = await response.json();
            setActivities(jsonResponse);
        } else if (response.status === 403) {
            updateToken(undefined);
        }
    }

    const fetchBalance = async () => {
        const balanceUrl = "/api/user/balance";

        const response = await fetch(balanceUrl, {
            method: "GET",
            headers: {
                "Authorization": token ? token : "",
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const jsonResponse: BalanceObject = await response.json();
            setBalanceObject(jsonResponse);
        } else if (response.status === 403) {
            updateToken(undefined);
        }
    }

    const fetchShopItems = async () => {
        const shopItemsUrl = "/api/user/shop/items";

        const response = await fetch(shopItemsUrl, {
            method: "GET",
            headers: {
                "Authorization": token ? token : "",
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const jsonResponse: Array<ShopItem> = await response.json();
            setShopItems(jsonResponse);
        } else if (response.status === 403) {
            updateToken(undefined);
        }
    }

    const populateState = async () => {
        await fetchBalance();
        await fetchActivities();
        await fetchTasks();
        await fetchShopItems();
    }

    useEffect(() => {
        populateState();
    }, [token])

    return (
        <AppBackgroundStyled>
            <AppGridStyled>
                <ColumnWrapperStyled>
                    <Card isTakingAllHeight={true}
                          headerComponent={<RightAlignedCardTitleStyled>Tasks</RightAlignedCardTitleStyled>}>
                        <TasksWrapperStyled>
                            {tasks.map(task => <TaskRepresentation key={task.id} selectedTask={selectedTask} expandTask={expandTask} {...task}></TaskRepresentation>)}
                        </TasksWrapperStyled>
                    </Card>
                </ColumnWrapperStyled>
                <ColumnWrapperStyled>
                    <FlexOneWrapperStyled>
                        <CalendarSectionWrapperStyled>
                            <Card isTakingAllHeight={true} headerComponent={
                                <RightAlignedCardTitleStyled>Calendar</RightAlignedCardTitleStyled>
                            }>
                                Calendar Content
                            </Card>
                            <CalendarSidebarWrapperStyled>

                                <FloatingButtonStyled>
                                    <IconWrapperStyled>
                                        <InfoOutlined />
                                    </IconWrapperStyled>
                                </FloatingButtonStyled>
                                <VerticalLogoWrapperStyled>
                                    <p>Achlearnment</p>
                                </VerticalLogoWrapperStyled>
                            </CalendarSidebarWrapperStyled>
                        </CalendarSectionWrapperStyled>
                    </FlexOneWrapperStyled>
                    <FlexOneWrapperStyled><Card isTakingAllHeight={true} headerComponent={
                        <RightAlignedCardTitleStyled>Shop</RightAlignedCardTitleStyled>}>
                        Shop content
                    </Card></FlexOneWrapperStyled>
                </ColumnWrapperStyled>
            </AppGridStyled>
        </AppBackgroundStyled>
    );
}

export default TasksPage;