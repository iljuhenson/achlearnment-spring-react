import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: ${({ theme }) => theme.sizes.desktop.spacing / 2 }px;
`