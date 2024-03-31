import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: ${({ theme }) => theme.sizes.desktop.text.content}px;
     color: ${({ theme }) => theme.colors.text.primary};
    }
 `