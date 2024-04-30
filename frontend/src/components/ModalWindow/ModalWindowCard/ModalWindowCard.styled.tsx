import styled from "styled-components";

export default styled.div`
    min-height: 300px;
    width: 500px;
    background-color: ${({ theme }) => theme.colors.card.background };
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
`