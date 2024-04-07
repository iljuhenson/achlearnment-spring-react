import {PropsWithChildren, ReactElement} from 'react'
import CardWrapperStyled from "./CardWrapper/CardWrapper.styled.tsx";
import HeaderWrapperStyled from "./HeaderWrapper/HeaderWrapper.styled.tsx";
import MainWrapperStyled from "./MainWrapper/MainWrapper.styled.tsx";

interface CardProps {
    headerComponent: ReactElement,
    isTakingAllHeight?: boolean,
}

function Card({headerComponent, isTakingAllHeight, children}: PropsWithChildren<CardProps>) {
    return (
        <>
            <CardWrapperStyled isTakingAllHeight={isTakingAllHeight || false}>
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