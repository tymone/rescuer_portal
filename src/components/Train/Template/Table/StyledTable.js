import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`;

export const StyledBody = styled(StyledUl)`
  border-bottom: 1px solid grey;
  li {
    font-weight: bold;
    &:nth-of-type(2),
    &:nth-of-type(5) {
      color: red;
    }
    &:nth-of-type(4),
    &:nth-of-type(7) {
      color: green;
    }
  }
`;
