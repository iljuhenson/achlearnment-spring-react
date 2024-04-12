import styled from "styled-components";

export default styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${({ theme }) => theme.sizes.desktop.text.content }px;
    height: ${({ theme }) => theme.sizes.desktop.text.content }px;
    
    svg {
        
        font-size: ${({ theme }) => theme.sizes.desktop.icon / 1.5 }px;
        fill: ${({ theme }) => theme.colors.text.secondary };
        font-weight: 400;
        //font-size: ${({ theme }) => theme.sizes.desktop.icon }px;
    }
`