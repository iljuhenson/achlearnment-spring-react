import styled from "styled-components";

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: ${({ theme }) => theme.sizes.desktop.spacing}px;
`