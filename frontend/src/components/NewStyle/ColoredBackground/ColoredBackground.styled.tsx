import styled from "styled-components";

export default styled.div<{ color: string }>`
    display: block;
    background-color: ${(props) => props.color };
`
