import styled from "styled-components";

export default styled.div<{ cols: number }>`
    display: inline-block;
    width: ${(props) => 8.333 * Math.max(1, Math.min(props.cols || 12, 12))}%;
`
