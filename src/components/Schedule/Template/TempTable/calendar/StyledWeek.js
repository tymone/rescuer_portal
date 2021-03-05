import styled from 'styled-components';

export const StyledWeek = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
  & :nth-child(${({ catchDay }) => catchDay}) {
    background-color: ${({ theme }) => theme.color.softGray};
  }
`;
