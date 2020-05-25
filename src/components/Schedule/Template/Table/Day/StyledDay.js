import styled from 'styled-components';

export const StyledDayName = styled.div`
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  font-size: 20px;
  padding: 10px 0;
`;

export const StyledDayList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledDayListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  border: 1px solid black;
  margin-bottom: 12px;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.softBlack};
  background-color: ${({ theme }) => theme.color.softGray};
`;
