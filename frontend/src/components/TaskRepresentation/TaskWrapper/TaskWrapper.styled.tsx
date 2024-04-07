import styled from "styled-components";

export default styled.div<{bgColor : string}>`
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: ${({ bgColor }) => bgColor };
    border-radius: 16px;
    overflow: hidden;
    
`