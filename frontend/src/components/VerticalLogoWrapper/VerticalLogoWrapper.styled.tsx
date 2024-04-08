import styled from "styled-components";

export default styled.div`
    position: relative;
    width: 100%;
    flex: 1;
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    font-size: ${({ theme }) => theme.sizes.desktop.text.title }px;
    font-weight: bold;
    
    p {
        position: absolute;
        
        transform: rotate(90deg) translate(0%, 100%); 
        top: 50%;
        //left: 50%;
        //top: 0;
        left: 0;
        //transform: ;
        
        
    }
    
`