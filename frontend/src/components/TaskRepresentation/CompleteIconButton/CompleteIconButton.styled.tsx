import styled from "styled-components";

export default styled.div`
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.4);
    border-top-left-radius: 16px;
    display: flex;

    svg {
        font-size: ${({ theme }) => theme.sizes.desktop.icon}px;
        height: ${({ theme }) => theme.sizes.desktop.icon}px;
        width: ${({ theme }) => theme.sizes.desktop.icon}px;
        color: ${({ theme }) => theme.colors.text.primary };
    }
`