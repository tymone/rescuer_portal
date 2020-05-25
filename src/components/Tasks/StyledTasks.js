import styled from 'styled-components';

export const StyledListWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  .taskList {
    flex: 1;
    background-color: #eee;
    margin: 0 10px;
    text-align: center;
  }
  h2 {
    margin: 20px 0;
  }
  ul {
    list-style: none;
  }
  li {
    background-color: #fff;
    border-radius: 20px;
    width: 90%;
    margin: 10px auto;
    padding: 5px;
  }
  span {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    padding: 15px;
  }
  .options {
    a {
      width: 100%;
      i {
        width: 100%;
        text-align: right;
        font-size: 20px;
        padding: 10px 20px;
      }
    }
  }
`;

export const StyledTaskDetails = styled.div`
  border: 1px solid grey;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  p {
    padding: 50px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  span {
    width: 50%;
    padding: 10px 0;
  }
`;
