import styled from "styled-components";

export default styled.div<{isRightAligned? : boolean}>`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    
    align-items: ${({isRightAligned}) => isRightAligned ? 'flex-end' : 'flex-start'};
`