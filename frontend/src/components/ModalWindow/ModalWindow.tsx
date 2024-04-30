import React, {PropsWithChildren, ReactElement} from 'react';
import BluredBackgroundStyled from "./BluredBackground/BluredBackground.styled.tsx";
import ModalWindowCardStyled from "./ModalWindowCard/ModalWindowCard.styled.tsx";
import ModalWindowHeaderStyled from "./ModalWindowHeader/ModalWindowHeader.styled.tsx";
import IconWrapperStyled from "../IconWrapper/IconWrapper.styled.tsx";
import {CloseOutlined} from "@mui/icons-material";

function ModalWindow({children} : PropsWithChildren) {
    return (
        <BluredBackgroundStyled>
            <ModalWindowCardStyled>
                <ModalWindowHeaderStyled>
                    <IconWrapperStyled>
                        <CloseOutlined />
                    </IconWrapperStyled>
                </ModalWindowHeaderStyled>
                {/*<ModalWindowMain></ModalWindowMain>*/}
            </ModalWindowCardStyled>
        </BluredBackgroundStyled>
    );
}

export default ModalWindow;