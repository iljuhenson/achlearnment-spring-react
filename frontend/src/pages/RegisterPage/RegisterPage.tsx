import AppBackgroundStyled from "../../components/AppBackground/AppBackground.styled.tsx";
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
import NewsCard from "../../components/NewsCard/NewsCard.tsx";
import {useContext, useState} from "react";
import {TokenContext} from "../../context/context.ts";
import CredentialsErrorDialogStyled from "../../components/CredentialsErrorDialog/CredentialsErrorDialog.styled.tsx";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {updateToken} = useContext(TokenContext);
    const [isCredentialsError, setCredentialsError] = useState(false);

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
        if(response.ok) {
            const jsonResponse: {token: string} = await response.json();
            const token : string = "Bearer " + jsonResponse.token;
            updateToken(token);
            navigate('/', {replace: true})

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
                    <Card headerComponent={<RightAlignedCardTitleStyled>Register</RightAlignedCardTitleStyled>}>
                        <CardContentWrapperStyled>
                            <AuthFormStyled onSubmit={async (e) => {e.preventDefault(); await register(email, password)}}>
                                <AuthSectionStyled>
                                    {isCredentialsError && <CredentialsErrorDialogStyled>Wrong email or account with such email already exists.</CredentialsErrorDialogStyled>}
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
            </AppGridStyled>

        </AppBackgroundStyled>
    );
}

export default RegisterPage;