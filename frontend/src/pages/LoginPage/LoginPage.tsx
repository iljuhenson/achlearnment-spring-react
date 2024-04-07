
import AppGridStyled from "../../components/AppGrid/AppGrid.styled.tsx";
import ColumnWrapperStyled from "../../components/ColumnWrapper/ColumnWrapper.styled.tsx";
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
import {useContext, useState} from "react";
import {TokenContext} from "../../context/context.ts";
import CredentialsErrorDialogStyled from "../../components/CredentialsErrorDialog/CredentialsErrorDialog.styled.tsx";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {updateToken} = useContext(TokenContext);
    const [isCredentialsError, setCredentialsError] = useState(false);

    const login = async (email: string, password: string) => {
        const loginUrl= "/api/auth/authenticate";
        const requestBody = {
            email: email,
            password: password,
        }

        const response = await fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {
            const jsonResponse: {token: string} = await response.json();
            const token : string = "Bearer " + jsonResponse.token;
            updateToken(token);
        } else {
            setCredentialsError(true);
        }
    }



    return (
        <AppBackgroundStyled>
            <AppGridStyled>
                <ColumnWrapperStyled>
                    <FloatingButtonStyled>
                        <LogoWrapperStyled>
                            Achlearnment
                        </LogoWrapperStyled>
                    </FloatingButtonStyled>
                    <Card headerComponent={<RightAlignedCardTitleStyled>Login</RightAlignedCardTitleStyled>}>
                        <CardContentWrapperStyled>
                            <AuthFormStyled onSubmit={async (e) => {e.preventDefault(); await login(email, password)}}>
                                <AuthSectionStyled>
                                    {isCredentialsError && <CredentialsErrorDialogStyled>Wrong email or password.</CredentialsErrorDialogStyled>}
                                    <TextInputStyled type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></TextInputStyled>
                                    <TextInputStyled type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></TextInputStyled>

                                </AuthSectionStyled>
                                <AuthSectionStyled>
                                    <LoginRegisterLinkStyled to="/register">I don't have an account</LoginRegisterLinkStyled>
                                    <DefaultButtonStyled type="submit" value="Login"  />

                                </AuthSectionStyled>
                            </AuthFormStyled>
                        </CardContentWrapperStyled>
                    </Card>

                </ColumnWrapperStyled>
                <ColumnWrapperStyled>
                    <NewsCard />

                </ColumnWrapperStyled>
            </AppGridStyled>

        </AppBackgroundStyled>
    );
}

export default LoginPage;