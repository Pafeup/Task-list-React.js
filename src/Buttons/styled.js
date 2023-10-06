import styled from "styled-components";

export const ButtonsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 5px;
    }
`

export const StyledButtons = styled.button`
    color: ${({ theme }) => theme.colors.mainColor};
    background-color: transparent;
    border: 0px transparent;
    padding: 0 10px;
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.colors.mainColorHover};
    }

    &:disabled {
        color: #ddd;
    }
`