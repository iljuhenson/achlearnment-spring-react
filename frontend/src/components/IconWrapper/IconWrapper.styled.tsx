import styled from "styled-components";

export default styled.div<{isButton? : boolean}>`
    padding: 16px;
    display: flex;
    ${({ isButton }) => isButton ? "cursor: pointer;" : ""}
    
    svg {
        font-size: ${({ theme }) => theme.sizes.desktop.icon }px;
        fill: ${({ theme }) => theme.colors.text.primary };
        font-weight: 400;
    }
    
`