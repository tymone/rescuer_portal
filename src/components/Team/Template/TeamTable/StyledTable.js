import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 100%;
  margin: 30px auto;
  border: 1px solid gray;
`;

export const StyledHead = styled.ul`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid gray;
  justify-content: space-around;
  list-style: none;
  li {
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.softGray};
  }
`;
