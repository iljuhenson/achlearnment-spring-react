import styled from "styled-components";

export default styled.div`
    padding: 8px;
    svg {
        font-size: ${({ theme }) => theme.sizes.desktop.icon }px;
        color: ${({ theme }) => theme.colors.text.primary };
    }
    
`