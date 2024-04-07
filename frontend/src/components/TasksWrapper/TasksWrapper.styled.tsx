import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    gap: ${({ theme }) => theme.sizes.desktop.spacing / 2 }px;
    //overflow-y: auto;
    //height: 100%;
`