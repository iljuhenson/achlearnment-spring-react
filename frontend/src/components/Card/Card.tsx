import {PropsWithChildren, ReactElement} from 'react'
import CardWrapperStyled from "./CardWrapper/CardWrapper.styled.tsx";
import HeaderWrapperStyled from "./HeaderWrapper/HeaderWrapper.styled.tsx";
import MainWrapperStyled from "./MainWrapper/MainWrapper.styled.tsx";

interface CardProps {
    headerComponent: ReactElement,
}

function Card({headerComponent, children}: PropsWithChildren<CardProps>) {
    return (
        <>
            <CardWrapperStyled>
                <HeaderWrapperStyled>
                    {headerComponent}
                </HeaderWrapperStyled>
                <MainWrapperStyled>
                    {children}
                </MainWrapperStyled>
            </CardWrapperStyled>

        </>
    );
}

export default Card;