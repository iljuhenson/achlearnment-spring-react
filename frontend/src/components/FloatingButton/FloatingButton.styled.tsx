import styled from "styled-components";

export default styled.div`
    background-color: ${({ theme }) => theme.colors.card.background };
    min-height: 70px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.sizes.desktop.text.title }px;
    border-radius: 16px;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    overflow: hidden;
    font-weight: bold;
`