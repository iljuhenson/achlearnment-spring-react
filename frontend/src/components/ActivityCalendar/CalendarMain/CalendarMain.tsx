import React, {ReactElement} from 'react';
import DaysGridStyled from "./DaysGrid/DaysGrid.styled.tsx";
import DayStyled from "./Day/Day.styled.tsx";

interface CalendarMainProps {
    monthDays: Array<ReactElement>;
}

function CalendarMain({ monthDays }: CalendarMainProps) {
    return (
        <DaysGridStyled>
            {monthDays}
        </DaysGridStyled>
    );
}

export default CalendarMain;