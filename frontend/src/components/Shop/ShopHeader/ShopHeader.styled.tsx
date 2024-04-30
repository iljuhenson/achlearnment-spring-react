import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
`