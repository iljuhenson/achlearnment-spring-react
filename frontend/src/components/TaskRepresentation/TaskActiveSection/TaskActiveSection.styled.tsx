import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: ${({ theme }) => theme.sizes.desktop.spacing / 2 }px;
    grid-template-rows: 1fr auto;
`