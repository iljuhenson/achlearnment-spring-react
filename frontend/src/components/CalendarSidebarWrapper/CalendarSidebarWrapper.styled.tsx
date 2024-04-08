import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    //background-color: white;
    gap: ${({ theme }) => theme.sizes.desktop.spacing }px;
    
`