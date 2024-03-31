import {PropsWithChildren} from 'react';
import MessageTextWrapperStyled from "./MessageTextWrapper/MessageTextWrapper.styled.tsx";
import NewsMessageWrapperStyled from "./NewsMessageWrapper/NewsMessageWrapper.styled.tsx";
import UsernameWrapperStyled from "./UsernameWrapper/UsernameWrapper.styled.tsx";

interface Props {
    color: string,
    username: string,
    isRightAligned?: boolean,
}

function NewsMessage({color, isRightAligned, username, children}: PropsWithChildren<Props>) {
    return (
        <NewsMessageWrapperStyled isRightAligned={isRightAligned}>
            <UsernameWrapperStyled>
                {username}
            </UsernameWrapperStyled>
            <MessageTextWrapperStyled color={color}>
                {children}
            </MessageTextWrapperStyled>
        </NewsMessageWrapperStyled>
    );
}

export default NewsMessage;