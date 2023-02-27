import styled from "styled-components";

export const P = styled.p`
    margin: 5px;
    display: inline;
`

export const Li = styled.li`
    margin-bottom: 10px;
    
`;

export const DelButton = styled.button`
    outline: none;
    border: 1px solid grey;
    background-color: white;
    transition: background-color 250ms linear;
    &:hover, &:focus {
        background-color: #0088ff;
    }
`;