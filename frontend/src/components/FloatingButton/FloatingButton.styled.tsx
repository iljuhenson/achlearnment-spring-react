import styled from "styled-components";

export default styled.div`
    background-color: ${({ theme }) => theme.colors.card.background };
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    overflow: hidden;
`