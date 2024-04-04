import styled from "styled-components";

export default styled.input`
    background-color: ${({ theme }) => theme.colors.tasks.easy };
    border-radius: 16px;
    border: none;
    padding: 12px 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary };
`