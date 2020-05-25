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

export const StyledSpan = styled.span`
  padding: 15px 0;
  width: 100%;
  text-align: center;
  i {
    font-size: 20px;
  }
`;

export const StyledReadDetails = styled.div`
  border: 2px solid black;
  width: 500px;
  margin: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const StyledLabel = styled.label`
  width: 100%;
  margin: 20px 0;
`;

export const StyledReadInput = styled.input`
  border: none;
  font-size: 20px;
  margin: 0 10px;
`;

export const StyledTrainingTableWrapper = styled.div`
  padding: 15px 0 0 0;
`;

export const StyledTrainingTable = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    border: 1px solid black;
    width: 100%;
    text-align: center;
  }
`;

export const StyledTrainingTableBody = styled(StyledTrainingTable)`
  .fa-check {
    color: green;
  }
  .fa-times {
    color: red;
  }
`;
