import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes.desktop.spacing}px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    //height: 100%;
    min-height: 0;
    //overflow: hidden;
`