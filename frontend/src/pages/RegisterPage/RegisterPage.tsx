import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
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
import NewsCard from "../../components/NewsCard/NewsCard.tsx";
import {useState} from "react";

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (email: string, password: string) => {
        const registerUrl= "/api/auth/register";
        const requestBody = {
            email: email,
            password: password,
        }

        const response = await fetch(registerUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const jsonResponse: {token: string} = await response.json();
        const token : string = "Bearer " + jsonResponse.token;
        localStorage.setItem('token', token);
    }

    return (
        <AppBackgroundStyled>
            <LoginGridStyled>
                <ColumnWrapperStyled>
                    <FloatingButtonStyled>
                        <LogoWrapperStyled>
                            Achlearnment
                        </LogoWrapperStyled>
                    </FloatingButtonStyled>
                    <Card headerComponent={<RightAlignedCardTitleStyled>Register</RightAlignedCardTitleStyled>}>
                        <CardContentWrapperStyled>
                            <AuthFormStyled onSubmit={async (e) => {e.preventDefault(); await register(email, password)}}>
                                <AuthSectionStyled>
                                    <TextInputStyled type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></TextInputStyled>
                                    <TextInputStyled type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></TextInputStyled>

                                </AuthSectionStyled>
                                <AuthSectionStyled>
                                    <LoginRegisterLinkStyled to="/login">I already have an account</LoginRegisterLinkStyled>
                                    <DefaultButtonStyled type="submit" value="Register"  />

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

export default RegisterPage;