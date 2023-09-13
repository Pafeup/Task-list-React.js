import styled from "styled-components";

export const SectionArea = styled.section`
    background-color: white;
    margin-bottom: 10px;
    box-shadow: 8px 8px 24px -20px rgba(66, 68, 90, 1);
`;

export const Header = styled.header`
    border-bottom: 2px solid #eee;
    padding: 20px;
    gap: 20px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
`;

export const Title = styled.h3`
    padding: 10px;
    margin: 0;
`;