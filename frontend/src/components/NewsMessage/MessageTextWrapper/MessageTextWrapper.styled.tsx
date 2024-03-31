import styled from "styled-components";

export default styled.div<{color: string}>`
    background-color: ${({color}) => color};
    max-width: 350px;
    border-radius: 16px;
    padding: 16px 20px;
    color: ${({ theme }) => theme.colors.text.primary};
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
`