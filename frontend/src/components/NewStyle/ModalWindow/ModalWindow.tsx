import {PropsWithChildren, ReactNode} from 'react';
// import IconWrapperStyled from "../IconWrapper/IconWrapper.styled.tsx";
// import {CloseOutlined} from "@mui/icons-material";
import * as NewStyle from "../NewStyle.tsx"
import {CloseOutlined} from "@mui/icons-material";
import {useTheme} from "styled-components";
import BackgroundBlur from "./subcomponents/BackgroundBlur.styled.tsx";

function ModalWindow({isOpen, onClose, children} :{
        isOpen: boolean;
        onClose: () => void;
        children: ReactNode;
    }) {
    const theme = useTheme();

    return (
        <BackgroundBlur>
            <NewStyle.AbsoluteCenter>
                <NewStyle.SizableContainer height={"300px"} width={"500px"}>
                    <NewStyle.Row>
                        <NewStyle.ColoredBackground color={theme.colors.card.header}>
                                <NewStyle.Spacer x={"0"} y={"0"}>
                                <NewStyle.ColoredBackground color={theme.colors.tasks.hard}>
                                    <NewStyle.AbsoluteCenter>
                                        <NewStyle.Spacer x={"0.5em"} y={"0.2em"}>
                                            <CloseOutlined fontSize={"large"}/>
                                        </NewStyle.Spacer>
                                    </NewStyle.AbsoluteCenter>
                                </NewStyle.ColoredBackground>
                                </NewStyle.Spacer>
                        </NewStyle.ColoredBackground>
                    </NewStyle.Row>
                    <NewStyle.Row>
                        <NewStyle.ColoredBackground color={theme.colors.card.background}>
                            {children}
                        </NewStyle.ColoredBackground>
                    </NewStyle.Row>
                </NewStyle.SizableContainer>
            </NewStyle.AbsoluteCenter>
        </BackgroundBlur>
    );
}

export default ModalWindow;
