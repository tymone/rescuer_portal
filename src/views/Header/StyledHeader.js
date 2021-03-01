import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  padding: 0 30px 0 15px;
  background-color: ${({ theme }) => theme.color.black};
  color: white;
  i {
    font-size: 20px;
    line-height: 40px;
    color: white;
  }
`;
