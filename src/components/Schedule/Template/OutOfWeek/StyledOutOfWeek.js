import styled from 'styled-components';

export const StyledOutOfWeek = styled.ul`
  margin: 10px 0;
`;

export const StyledOutOfWeekGroup = styled.li`
  padding: 10px;
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  display: block;
  text-align: left;
  font-weight: bold;
`;

export const StyledRescuers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  font-weight: normal;
`;

export const StyledRescuer = styled.li`
  padding: 10px 10px 0;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.softBlack};
  background-color: ${({ theme }) => theme.color.softGray};
  margin: 10px 0;
`;

export const StyledAddRescuerContainer = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  margin: auto 15px;
  height: 25px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
`;
