import styled from "styled-components";
export default styled.div`
    background-color: ${({ theme }) => theme.colors.app.background };
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`