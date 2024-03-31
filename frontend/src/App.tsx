import {ThemeProvider} from "styled-components";
import primary from "./components/Themes/primary.ts";
import GlobalStylesStyled from "./components/GlobalStyles/GlobalStyles.styled.tsx";
import AppBackgroundStyled from "./components/AppBackground/AppBackground.styled.tsx";
import Card from "./components/Card/Card.tsx";
import LoginGridStyled from "./components/LoginGrid/LoginGrid.styled.tsx";
import ColumnWrapperStyled from "./components/LoginGrid/ColumnWrapper/ColumnWrapper.styled.tsx";
import FloatingButtonStyled from "./components/FloatingButton/FloatingButton.styled.tsx";
import RightAlignedCardTitleStyled from "./components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import LogoWrapperStyled from "./components/LogoWrapper/LogoWrapper.styled.tsx";
import NewsMessage from "./components/NewsMessage/NewsMessage.tsx";
import CardContentWrapperStyled from "./components/CardContentWrapper/CardContentWrapper.styled.tsx";
import TextInputStyled from "./components/TextInput/TextInput.styled.tsx";
import AuthFormStyled from "./components/AuthForm/AuthForm.styled.tsx";

function App() {

    return (
        <>
            <ThemeProvider theme={primary}>
                <GlobalStylesStyled/>
                <AppBackgroundStyled>
                    <LoginGridStyled>
                        <ColumnWrapperStyled>
                            <FloatingButtonStyled>
                                <LogoWrapperStyled>
                                    Achlearnment
                                </LogoWrapperStyled>
                            </FloatingButtonStyled>
                            <Card headerComponent={<RightAlignedCardTitleStyled>Login</RightAlignedCardTitleStyled>}>
                                <CardContentWrapperStyled>
                                    <AuthFormStyled>
                                    <TextInputStyled type="text" placeholder="Email"></TextInputStyled>
                                    <TextInputStyled type="password" placeholder="Password"></TextInputStyled>
                                        <input type="submit" />
                                    </AuthFormStyled>
                                </CardContentWrapperStyled>
                            </Card>

                        </ColumnWrapperStyled>
                        <ColumnWrapperStyled>
                            <Card headerComponent={<RightAlignedCardTitleStyled>News</RightAlignedCardTitleStyled>}>
                                <CardContentWrapperStyled>
                                    <NewsMessage color={primary.colors.tasks.easy} username={"Sonya"}
                                                 isRightAligned={false}>
                                        Did you see that new revolutionary app?
                                    </NewsMessage>
                                    <NewsMessage color={primary.colors.tasks.medium} username={"Steve"}
                                                 isRightAligned={true}>
                                        You mean Achlearnment? I’ve been using this for years!
                                    </NewsMessage>
                                    <NewsMessage color={primary.colors.tasks.hard} username={"Ilya"}
                                                 isRightAligned={false}>
                                        You too guys, who’s that guy who made it?
                                    </NewsMessage>
                                    <NewsMessage color={primary.colors.tasks.easy} username={"Sonya"}
                                                 isRightAligned={false}>
                                        Ehmmmm, how could you not know that?!?!?!
                                    </NewsMessage>
                                    <NewsMessage color={primary.colors.tasks.medium} username={"Steve"}
                                                 isRightAligned={true}>
                                        I think his name is iljuhenson. Go check out his github.
                                    </NewsMessage>
                                    <NewsMessage color={primary.colors.tasks.easy} username={"Sonya"}
                                                 isRightAligned={false}>
                                        Nice bit, guys, what a good marketing strategy.
                                    </NewsMessage>
                                </CardContentWrapperStyled>
                            </Card>

                        </ColumnWrapperStyled>
                    </LoginGridStyled>

                </AppBackgroundStyled>
            </ThemeProvider>
        </>
    )
}

export default App
