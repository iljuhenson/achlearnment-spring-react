import styled from "styled-components";

export default styled.input`
    background-color: ${({ theme }) => theme.colors.app.formBackground };
    border-radius: 16px;
    border: none;
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.text.primary };
    width: 100%;
`