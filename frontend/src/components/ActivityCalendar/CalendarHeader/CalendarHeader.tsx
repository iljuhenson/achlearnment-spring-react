
import {ArrowLeft, ArrowRight} from "@mui/icons-material";
import CalendarButtonsWrapperStyled from "./CalendarButtonsWrapper/CalendarButtonsWrapper.styled.tsx";
import ArrowButtonStyled from "./ArrowButton/ArrowButton.styled.tsx";
import CalendarHeaderTopStyled from "./CalendarHeaderTop/CalendarHeaderTop.styled.tsx";
import CalendarHeaderBottomStyled from "./CalendarHeaderBottom/CalendarHeaderBottom.styled.tsx";
import WeekDayNameStyled from "./WeekDayName/WeekDayName.styled.tsx";
import CalendarHeaderTitleStyled from "./CalendarHeaderTitle/CalendarHeaderTitle.styled.tsx";

interface CalendarHeaderProps {
    selectedMonth: number,
    selectedYear: number,
    nextMonth: () => void,
    prevMonth: () => void,
}

function CalendarHeader({selectedMonth, selectedYear, nextMonth, prevMonth}: CalendarHeaderProps) {
    const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
    <>
        <CalendarHeaderTopStyled>
            <CalendarButtonsWrapperStyled>
                <ArrowButtonStyled onClick={prevMonth}>
                    <ArrowLeft />
                </ArrowButtonStyled>

                <p>
                    {monthNames[selectedMonth ]}
                </p>
                <p>
                    {selectedYear}
                </p>
                <ArrowButtonStyled onClick={nextMonth}>
                    <ArrowRight />
                </ArrowButtonStyled>
            </CalendarButtonsWrapperStyled>
            <div>
                <CalendarHeaderTitleStyled>Activity</CalendarHeaderTitleStyled>
            </div>
        </CalendarHeaderTopStyled>
        <CalendarHeaderBottomStyled>
            {weekDayNames.map(weekDayName => <WeekDayNameStyled>{weekDayName}</WeekDayNameStyled>)}
        </CalendarHeaderBottomStyled>
    </>
    );
}

export default CalendarHeader;