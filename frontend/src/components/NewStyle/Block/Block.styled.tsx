import styled from "styled-components";

export default styled.div<{ cols: number }>`
    display: block;
    width: ${(props) => 8.333 * props.cols || 100}%;
`
