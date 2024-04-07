import styled from "styled-components";

export default styled.div`
    padding: 8px;
    display: flex;
    
    svg {
        font-size: ${({ theme }) => theme.sizes.desktop.icon }px;
        color: ${({ theme }) => theme.colors.text.primary };
    }
    
`