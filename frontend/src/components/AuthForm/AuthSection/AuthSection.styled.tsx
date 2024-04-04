import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: baseline;
    
    gap: ${({ theme }) => theme.sizes.desktop.spacing}px;
    
`