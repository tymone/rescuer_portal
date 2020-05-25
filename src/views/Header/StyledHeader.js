import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  line-height: 30px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.color.black};
  color: white;
  i {
    font-size: 20px;
    cursor: pointer;
    color: white;
  }
`;
