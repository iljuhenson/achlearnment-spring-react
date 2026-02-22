import styled from "styled-components";

export default styled.div<{ x: string, y: string }>`
    display: inline-block;
    padding: ${(props) => `${props.y} ${props.x}`};
`
