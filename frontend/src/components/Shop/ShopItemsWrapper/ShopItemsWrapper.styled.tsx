import styled from "styled-components";

export default styled.div`
    overflow-y: auto;
    display: flex;
    gap: ${({ theme }) => theme.sizes.desktop.spacing }px;
    flex-direction: column;

    padding: 20px 16px;
`