import styled, { css } from "styled-components";

export const List = styled.li`
    padding: 20px 20px;
    margin: auto;
    list-style: none;
`;

export const Item = styled.li`
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: 2px solid #eee;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `};
`;

export const Button = styled.button`
    background-color: green;
    color: white;
    border: 0;
    height: 30px;
    width: 30px;
    font-weight: bold;
    transition: 0.3s;

    ${({ toggleDone }) => toggleDone && css`
    
        &:hover {
            background-color: hsl(120, 100%, 30%);
        };

        &:active {
            outline: auto black;
            background-color: hsl(120, 100%, 35%);
        };
    `};

    ${({ remove }) => remove && css`
        background-color: crimson;
        font-weight: normal;

        &:hover {
            background-color: hsl(348, 83%, 52%);
        };

        &:active {
            outline: auto black;
            background-color: hsl(348, 83%, 57%);
        };
    `}
`;