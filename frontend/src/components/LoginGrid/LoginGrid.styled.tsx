import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-gap: ${({ theme }) => theme.sizes.desktop.spacing}px;
    grid-template-columns: repeat(2, minmax(400px, 500px));
    
`