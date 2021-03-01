import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
  #root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main{
    flex-grow: 1;
    display: flex;
  }
  button{
    display: block;
    margin: 15px auto;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  h1{
    font-size: 40px;
    text-align: center;
    margin: 40px;
  }
  .options {
    display: flex;
    justify-content: center;
    font-size: 30px;
    i{
      padding: 15px;
    }
  }
  .dateTitle{
    font-size: 40px;
    text-align: center;
    margin: 20px;
    input{
      width: 250px;
      font-size: 30px;
      border: none;
      border-bottom: 1px solid grey;
      margin: 0 20px;
    }
  }
  ul{
    list-style: none;
  }
  i {
    color: black;
    cursor: pointer;
  }
`;

export default GlobalStyle;
