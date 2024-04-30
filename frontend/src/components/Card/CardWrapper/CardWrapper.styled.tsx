import styled from 'styled-components'

export default styled.div<{isTakingAllHeight? : boolean}>`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.card.background };
    width: 100%;
    ${({isTakingAllHeight}) => isTakingAllHeight ? 'height: 100%;' : ''}
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 12px 40px 4px rgba(112, 144, 176, 0.2);
    height: 100%;
    min-height: 0;
`