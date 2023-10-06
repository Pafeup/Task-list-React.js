import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;  
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    };
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid #eee;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: white;
    border: 0px;
    padding: 10px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.colors.mainColorHover};  
    };

    &:active {
        outline: auto black;
    }
`;