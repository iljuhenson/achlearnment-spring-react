import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import CalendarHeader from "./CalendarHeader/CalendarHeader.tsx";
import Card from "../Card/Card.tsx";
import CalendarMain from "./CalendarMain/CalendarMain.tsx";
import SecondaryDayStyled from "./CalendarMain/SecondaryDay/SecondaryDay.styled.tsx";
import DayStyled from "./CalendarMain/Day/Day.styled.tsx";
import {Activities} from "../../pages/TasksPage/types/tasks";
import ActiveWrapperStyled from "./CalendarMain/ActiveWrapper/ActiveWrapper.styled.tsx";

interface ActivityCalendarProps {
    activities: Activities,
}

function ActivityCalendar({activities}: ActivityCalendarProps) {
    const todaysDate = useMemo(() => new Date(), [])
    const [lastDay, setLastDay] = useState(new Date(todaysDate.getFullYear(), todaysDate.getMonth() + 1, 0))
    const nextMonth = () => {
        setLastDay(new Date(lastDay.getFullYear(), lastDay.getMonth() + 2, 0));
    }

    const prevMonth = () => {
        setLastDay(new Date(lastDay.getFullYear(), lastDay.getMonth(), 0));
    }

    const monthDays = useMemo(() => {
        const days: Array<ReactElement> = []

        const copyDate = new Date(lastDay);
        copyDate.setDate(1);
        const additionalPreviousMonthDays = copyDate.getDay();

        const prevLastDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), 0);

        for(let i = additionalPreviousMonthDays; i > 0; --i) {
            days.push(<SecondaryDayStyled>{prevLastDay.getDate() - i + 1}</SecondaryDayStyled>)
        }

        for(let i = 1; i <= lastDay.getDate(); ++i) {
            const currentDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), i)

            const isActiveDay = activities.filter(activity => {
                return  activity.getMonth() === currentDay.getMonth() && activity.getDate() === currentDay.getDate() && activity.getFullYear() === currentDay.getFullYear()
            }
            ).length !== 0

            if(isActiveDay) {
                days.push(<ActiveWrapperStyled><DayStyled>{i}</DayStyled></ActiveWrapperStyled>)
            } else {
                days.push(<DayStyled>{i}</DayStyled>)
            }

        }

        const currentDaysSize = days.length
        for(let i = 1; i <= 42 - currentDaysSize; ++i) {
            days.push(<SecondaryDayStyled>{i}</SecondaryDayStyled>)

        }
        return days;
    }, [lastDay, activities])

    return (
        <Card isTakingAllHeight={true} headerComponent={
            <CalendarHeader selectedMonth={lastDay.getMonth()} selectedYear={lastDay.getFullYear()} nextMonth={nextMonth} prevMonth={prevMonth}/>
        }>
            <CalendarMain monthDays={monthDays}/>
        </Card>
    );
}

export default ActivityCalendar;