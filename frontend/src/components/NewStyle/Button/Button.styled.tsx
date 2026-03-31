import styled from "styled-components";

export default styled.button<{ color?: string }>`
    display: block;
    border: none;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    background-color: ${(props) => props.color || "transparent" };
    cursor: pointer;
`
