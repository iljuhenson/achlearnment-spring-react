import React from 'react';
import IconWrapperStyled from "../IconWrapper/IconWrapper.styled.tsx";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";
import CalendarButtonsWrapperStyled from "./CalendarButtonsWrapper/CalendarButtonsWrapper.styled.tsx";
import ArrowButtonStyled from "./ArrowButton/ArrowButton.styled.tsx";
import CalendarHeaderTopStyled from "./CalendarHeaderTop/CalendarHeaderTop.styled.tsx";
import CalendarHeaderBottomStyled from "./CalendarHeaderBottom/CalendarHeaderBottom.styled.tsx";

function CalendarHeader() {
    return (
    <>
        <CalendarHeaderTopStyled>
            <CalendarButtonsWrapperStyled>
                <ArrowButtonStyled>
                    <ArrowLeft />
                </ArrowButtonStyled>

                <p>
                    Aug
                </p>
                <p>
                    2023
                </p>
                <ArrowButtonStyled>
                    <ArrowRight />
                </ArrowButtonStyled>
            </CalendarButtonsWrapperStyled>
            <div>
                <p>Activity</p>
            </div>
        </CalendarHeaderTopStyled>
        <CalendarHeaderBottomStyled>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
        </CalendarHeaderBottomStyled>
    </>
    );
}

export default CalendarHeader;