import styled from "styled-components";

export default styled.div`
    position: relative;
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        //position: absolute;
        font-size: ${({ theme }) => theme.sizes.desktop.text.title }px;
        writing-mode: tb-rl;
            //transform: rotate(-180deg);
        
        //transform: translate(-50%, -50%); 
        //transform-origin: bottom left;
        //top: 50%;
        //left: 50%;
        //top: 0;
        //right: -100%;
        //transform: ;
        
        
    }
    
`