import {ThemeProvider} from "styled-components";
import primary from "./components/Themes/primary.ts";
import GlobalStylesStyled from "./components/GlobalStyles/GlobalStyles.styled.tsx";
import AppBackgroundStyled from "./components/AppBackground/AppBackground.styled.tsx";
import Card from "./components/Card/Card.tsx";
import LoginGridStyled from "./components/LoginGrid/LoginGrid.styled.tsx";
import ColumnWrapperStyled from "./components/LoginGrid/ColumnWrapper/ColumnWrapper.styled.tsx";
import FloatingButtonStyled from "./components/FloatingButton/FloatingButton.styled.tsx";
import RightAlignedCardTitleStyled from "./components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";

function App() {

    return (
        <>
            <ThemeProvider theme={primary}>
                <GlobalStylesStyled/>
                <AppBackgroundStyled>
                    <LoginGridStyled>
                        <ColumnWrapperStyled>
                            <FloatingButtonStyled>
                                Achlearnment
                            </FloatingButtonStyled>
                            <Card headerComponent={<RightAlignedCardTitleStyled>Login</RightAlignedCardTitleStyled>} mainComponent={<div>text</div>}>

                            </Card>

                        </ColumnWrapperStyled>
                        <ColumnWrapperStyled>
                            <Card headerComponent={<div>text</div>} mainComponent={<div>text</div>}>

                            </Card>

                        </ColumnWrapperStyled>
                    </LoginGridStyled>

                </AppBackgroundStyled>
            </ThemeProvider>
        </>
    )
}

export default App
