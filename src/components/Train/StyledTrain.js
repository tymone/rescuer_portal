import styled from 'styled-components';

export const StyledTable = styled.div`
  border: 1px solid grey;
`;

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

export const StyledHead = styled(StyledUl)`
  border-bottom: 1px solid gray;
  li {
    font-size: 18px;
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

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 120px;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  font-size: 14px;
`;
