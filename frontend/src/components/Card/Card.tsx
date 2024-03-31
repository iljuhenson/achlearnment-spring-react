import {ReactElement} from 'react'
import CardWrapperStyled from "./CardWrapper/CardWrapper.styled.tsx";
import HeaderWrapperStyled from "./HeaderWrapper/HeaderWrapper.styled.tsx";
import MainWrapperStyled from "./MainWrapper/MainWrapper.styled.tsx";

interface CardProps {
    headerComponent: ReactElement,
    mainComponent: ReactElement,
}

function Card({headerComponent, mainComponent}: CardProps) {
    return (
        <>
            <CardWrapperStyled>
                <HeaderWrapperStyled>
                    {headerComponent}
                </HeaderWrapperStyled>
                <MainWrapperStyled>
                    {mainComponent}
                </MainWrapperStyled>
            </CardWrapperStyled>

        </>
    );
}

export default Card;