import styled from "styled-components";

export default styled.div<{ width: string, height: string }>`
    display: block;
    min-height: ${(props) => props.height};
    width: ${(props) => props.width};
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    background-color: ${(props) => props.theme.colors.card.background};
`
