import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  
  body {
   background-color: #f1cd96;
   font-family: Arial, Helvetica, sans-serif;
  }

  .container{
    display: flex;
    max-width: 1100px;
    margin: auto;
  }

  .container .leftSide{
    flex: 1;
    margin-right: 40px;
  }

  .container .rightSide{
    flex:1;
    margin-left: 40px;
  }

  .leftSide{
    background-color: white;
  }

  .leftSide h1{
    color: #6666e9;
    margin:0; font-size: 40px;
  }

  .leftSide p{
    color: #8e8e97c1;
    line-height: 20px;
    margin-bottom: 40px;
    font-size: 16px;
  }
  .leftSide input{
    width: 100%;
    border: 0;
    border-bottom: 2px solid rgba(150, 163, 171, .5);
    padding: 10px 2px;
    margin-bottom:20px;
    font-size: 14px;
    outline: 0;
  }

  .leftSide button{
    background-color: #5c5cc0;
    color: white;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    padding: 15px 0;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;
    transition: all ease .4s;
  }

  .leftSide button:hover{
    opacity: 0.5;
  }

  .rightSide{
    background-color: white;
  }




`




/* 
 Global é possível criar classes

 .nomedaclasse {
…
}

 No styled component Vc usa a classe: 
 Ex.:
const Container = styled.div.attr({
className: nomedaclasse
})

*/