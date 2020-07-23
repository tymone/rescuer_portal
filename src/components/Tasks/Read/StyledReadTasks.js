import styled from 'styled-components';

export const StyledListWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const StyledTaskList = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.softGray};
  margin: 0 10px;
  border-radius: 15px;
  text-align: center;
`;

export const StyledTaskListTitle = styled.h2`
  margin: 20px 0;
`;

export const StyledListItem = styled.li`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  width: 90%;
  margin: 10px auto;
  padding: 5px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;

export const StyledParagraph = styled.p`
  padding: 15px;
`;

export const StyledOptions = styled.div`
  a {
    width: 100%;
    i {
      width: 100%;
      text-align: right;
      font-size: 20px;
      padding: 10px 20px;
    }
  }
`;
