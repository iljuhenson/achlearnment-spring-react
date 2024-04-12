import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(7, auto);
    height: 100%;
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 0 16px 12px;
    p {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
