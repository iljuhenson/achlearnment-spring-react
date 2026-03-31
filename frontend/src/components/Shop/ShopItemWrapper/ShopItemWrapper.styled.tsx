import styled from "styled-components";

export default styled.div<{ color?: string }>`
    background-color: ${(props) => props.color };
    border-radius: 16px;
    
`