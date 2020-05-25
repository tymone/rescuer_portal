import styled from 'styled-components';

export const StyledRescuer = styled.li`
  width: 20%;
  height: 25px;
  text-align: center;
  border: 1px solid black;
  padding: 2px 0;
  &:nth-of-type(5) {
    font-weight: bold;
    border-right: 0;
    input {
      font-weight: bold;
    }
  }
`;
export const StyledInput = styled.input`
  text-align: center;
  font-size: 18px;
  border: none;
  width: 100%;
`;
