import styled from 'styled-components';

export const StyledTaskDetails = styled.div`
  border: 1px solid grey;
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

export const StyledContent = styled.p`
  width: 100%;
  padding: 50px;
  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    resize: none;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const StyledInfoColumn = styled.div`
  width: 50%;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    width: 100%;
    text-align: right;
    padding: 5px 20px 5px 0;
  }
`;

export const StyledValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    width: 100%;
    padding: 5px 0 5px 20px;
    text-align: left;
  }
  select {
    width: 51%;
    margin: 5px 0 5px 20px;
  }
  input {
    width: 51%;
    margin: 5px 0 5px 20px;
    border: none;
    border-bottom: 1px solid black;
    line-height: 18px;
  }
`;

export const StyledInputTitle = styled.div`
  span {
    display: block;
    margin: 10px 0;
  }
  input {
    width: 70%;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
  }
`;
