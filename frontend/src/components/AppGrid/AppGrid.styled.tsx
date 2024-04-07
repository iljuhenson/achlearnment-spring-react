import styled from "styled-components";

export default styled.div`
    display: grid;
    //padding: ;
    grid-gap: ${({ theme }) => theme.sizes.desktop.spacing}px;
    grid-template-columns: repeat(2, minmax(400px, 500px));
    grid-template-rows: repeat(1, minmax(500px, 600px));
`