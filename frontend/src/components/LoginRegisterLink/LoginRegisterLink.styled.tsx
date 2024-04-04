import styled from "styled-components";
import {Link} from "react-router-dom";

export default styled(Link)`
    color: ${({ theme }) => theme.colors.text.secondary };
    text-align: right;
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`