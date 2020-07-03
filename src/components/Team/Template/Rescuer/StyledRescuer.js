import styled from 'styled-components';

export const StyledSpan = styled.span`
  padding: 15px 0;
  width: 100%;
  text-align: center;
  i {
    font-size: 20px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 20px auto;
  font-size: 20px;
`;

export const StyledSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

export const StyledSpanTitle = styled.span`
  width: 100%;
  padding-right: 20px;
  margin: 10px 0;
  text-align: right;
`;

export const StyledSpanValue = styled.span`
  width: 100%;
  padding-left: 20px;
  margin: 10px 0;
  text-align: left;
  select {
    border: none;
    border-bottom: 1px solid black;
    font-size: 20px;
  }
  input {
    margin: 0;
    margin-right: 10px;
    width: 22%;
  }
`;

export const StyledInput = styled.input`
  width: 51%;
  margin: 10px 0 10px 20px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
`;

export const StyledIcon = styled.i`
  cursor: default;
  margin-right: 10px;
  &.fa-check {
    color: green;
  }
  &.fa-times {
    color: red;
  }
`;
