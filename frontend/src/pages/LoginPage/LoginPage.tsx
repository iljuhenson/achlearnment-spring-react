
import LoginGridStyled from "../../components/LoginGrid/LoginGrid.styled.tsx";
import ColumnWrapperStyled from "../../components/LoginGrid/ColumnWrapper/ColumnWrapper.styled.tsx";
import FloatingButtonStyled from "../../components/FloatingButton/FloatingButton.styled.tsx";
import LogoWrapperStyled from "../../components/LogoWrapper/LogoWrapper.styled.tsx";
import Card from "../../components/Card/Card.tsx";
import RightAlignedCardTitleStyled from "../../components/RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import CardContentWrapperStyled from "../../components/CardContentWrapper/CardContentWrapper.styled.tsx";
import AuthFormStyled from "../../components/AuthForm/AuthForm.styled.tsx";
import AuthSectionStyled from "../../components/AuthForm/AuthSection/AuthSection.styled.tsx";
import TextInputStyled from "../../components/TextInput/TextInput.styled.tsx";
import LoginRegisterLinkStyled from "../../components/LoginRegisterLink/LoginRegisterLink.styled.tsx";
import DefaultButtonStyled from "../../components/DefaultButton/DefaultButton.styled.tsx";
import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
import NewsCard from "../../components/NewsCard/NewsCard.tsx";
import {useState} from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
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
                                <AuthSectionStyled>
                                    <TextInputStyled type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></TextInputStyled>
                                    <TextInputStyled type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></TextInputStyled>

                                </AuthSectionStyled>
                                <AuthSectionStyled>
                                    <LoginRegisterLinkStyled to="/register">I don't have an account</LoginRegisterLinkStyled>
                                    <DefaultButtonStyled type="submit" value="Login" />

                                </AuthSectionStyled>
                            </AuthFormStyled>
                        </CardContentWrapperStyled>
                    </Card>

                </ColumnWrapperStyled>
                <ColumnWrapperStyled>
                    <NewsCard />

                </ColumnWrapperStyled>
            </LoginGridStyled>

        </AppBackgroundStyled>
    );
}

export default LoginPage;