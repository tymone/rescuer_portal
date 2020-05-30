import styled from 'styled-components';

export const StyledOverMultitude = styled.li`
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.softBlack};
  background-color: ${({ theme }) => theme.color.softGray};
`;
