import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
import ColumnWrapperStyled from "../../components/ColumnWrapper/ColumnWrapper.styled.tsx";
import Card from "../../components/Card/Card.tsx";
import AppGridStyled from "../../components/AppGrid/AppGrid.styled.tsx";
import RightAlignedCardTitleStyled from "../../components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import {Activities, BalanceObject, FetchActivities, ShopItem, Task} from "./types/tasks";
import {useContext, useEffect, useState} from "react";
import TaskRepresentation from "../../components/TaskRepresentation/TaskRepresentation.tsx";
import {TokenContext} from "../../context/context.ts";
import FlexOneWrapperStyled from "../../components/FlexOneWrapper/FlexOneWrapper.styled.tsx";
import TasksWrapperStyled from "../../components/TasksWrapper/TasksWrapper.styled.tsx";
import CalendarSectionWrapperStyled from "../../components/CalendarSectionWrapper/CalendarSectionWrapper.styled.tsx";
import CalendarSidebarWrapperStyled from "../../components/CalendarSidebarWrapper/CalendarSidebarWrapper.styled.tsx";
import IconWrapperStyled from "../../components/IconWrapper/IconWrapper.styled.tsx";
import {BookOutlined, InfoOutlined} from "@mui/icons-material";
import FloatingButtonStyled from "../../components/FloatingButton/FloatingButton.styled.tsx";
import VerticalLogoWrapperStyled from "../../components/VerticalLogoWrapper/VerticalLogoWrapper.styled.tsx";
import ActivityCalendar from "../../components/ActivityCalendar/ActivityCalendar.tsx";
import Shop from "../../components/Shop/Shop.tsx";
import * as NewStyle from "../../components/NewStyle/NewStyle.tsx";
// import ModalType from "../../shared/modal-type-enum.ts";
import {ModalType} from "../../shared/modal-type-enum.ts";
import RecordingTaskModalContent from "../../components/RecordingTaskModalContent/RecordingTaskModalContent.tsx";
import BuyItemModalContent from "../../components/BuyItemModalContent/BuyItemModalContent.tsx";

function TasksPage() {
    const {token, updateToken} = useContext(TokenContext);
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [balanceObject, setBalanceObject] = useState<BalanceObject>({balance: 0});
    const [shopItems, setShopItems] = useState<Array<ShopItem>>([]);
    const [activities, setActivities] = useState<Activities>([]);

    const [selectedTask, setSelectedTask] = useState<number | null>(null);

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(ModalType.None);
    const [displayTask, setDisplayTask] = useState<Task | null>(null);
    const [displayShopItem, setDisplayShopItem] = useState<ShopItem | null>(null);

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
            setTasks(jsonResponse.sort((a, b) => a.id - b.id));
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

            const jsonResponse: FetchActivities = await response.json();
            const activities: Activities = jsonResponse.map(activity => new Date(Date.parse(activity)))
            setActivities(activities);
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

        // navigator
        //     .mediaDevices
        //     .getUserMedia({audio: true})
        //     .then((stream) => {
        //         let tempRecorder = new MediaRecorder(stream);
        //
        //         tempRecorder.ondataavailable = e => {
        //             bytes.push(e.data);
        //             // bytesNow = [...bytes];
        //             setBytes(bytes);
        //             let blob = e.data;
        //         }
        //
        //         tempRecorder.onstop = () => {
        //             let recording = new Blob(bytes, { type: "audio/mp3" })
        //             // recordingNow = Object.assign({}, recording);
        //             setRecording(recording);
        //
        //             // setBytes([]);
        //         }
        //
        //         setRecorder(tempRecorder);
        //
        //     });
    }, [token])

    const popupCloseAction = () => {
        setModalOpen(false);
        setModalType(ModalType.None);
        populateState();
    }

    const startCompletingTask = (id: number) => {
        let task = tasks.filter(t => t.id === id)[0];

        setDisplayTask(task);
        setModalType(ModalType.Recording);
        setModalOpen(true);
    }

    const showBuyDialog = (shopItemId: number) => {
        let shopItem = shopItems.filter(i => i.id === shopItemId)[0]

        setDisplayShopItem(shopItem);
        setModalType(ModalType.BuyItem);
        setModalOpen(true);
    }

    const renderBasedOnModalType = () => {
        switch (modalType) {
            case ModalType.BuyItem:
                return <BuyItemModalContent shopItem={displayShopItem || shopItems[0]} />
            case ModalType.Recording:
                return <RecordingTaskModalContent task={displayTask || tasks[0]} isModalOpen={isModalOpen}/>
        }
    }
    return (
        <AppBackgroundStyled>
            <AppGridStyled>
                <ColumnWrapperStyled>
                    <Card isTakingAllHeight={true}
                          headerComponent={<RightAlignedCardTitleStyled>Tasks</RightAlignedCardTitleStyled>}>
                        <TasksWrapperStyled>
                            {tasks.map(task => <TaskRepresentation key={task.id} selectedTask={selectedTask} expandTask={expandTask} startCompletingTask={startCompletingTask} {...task}></TaskRepresentation>)}
                        </TasksWrapperStyled>
                    </Card>
                </ColumnWrapperStyled>
                <ColumnWrapperStyled>
                    <FlexOneWrapperStyled>
                        <CalendarSectionWrapperStyled>
                            <ActivityCalendar activities={activities}/>
                            <CalendarSidebarWrapperStyled>

                                <FloatingButtonStyled>
                                    <IconWrapperStyled>
                                        <BookOutlined />
                                    </IconWrapperStyled>
                                </FloatingButtonStyled>
                                <VerticalLogoWrapperStyled>
                                    <p>Achlearnment</p>
                                </VerticalLogoWrapperStyled>
                            </CalendarSidebarWrapperStyled>
                        </CalendarSectionWrapperStyled>
                    </FlexOneWrapperStyled>
                    <FlexOneWrapperStyled>
                        <Shop balance={balanceObject.balance} showBuyDialog={showBuyDialog} shopItems={shopItems}/>
                    </FlexOneWrapperStyled>
                </ColumnWrapperStyled>
            </AppGridStyled>
            {isModalOpen && <NewStyle.ModalWindow onClose={popupCloseAction} isOpen={isModalOpen}>
                { renderBasedOnModalType() }
            </NewStyle.ModalWindow>}
        </AppBackgroundStyled>
    );
}

export default TasksPage;