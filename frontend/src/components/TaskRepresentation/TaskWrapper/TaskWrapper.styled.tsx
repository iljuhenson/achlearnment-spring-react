import styled from "styled-components";

export default styled.div<{bgColor : string, isExpanded: boolean}>`
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: ${({ bgColor }) => bgColor };
    border-radius: 16px;
    overflow: hidden;
    ${({ isExpanded }) => isExpanded ? "height: auto;" : "height: 68px;" }
    //cursor: pointer;
`