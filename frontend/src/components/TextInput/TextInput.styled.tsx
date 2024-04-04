import styled from "styled-components";

export default styled.input`
    background-color: ${({ theme }) => theme.colors.app.formBackground };
    border-radius: 16px;
    border: none;
    padding: 16px 16px;
    color: ${({ theme }) => theme.colors.text.primary };
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.desktop.text.content }px;
    //box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
`