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
    max-width: 900px;
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
    background-color: #8fce7b;
  }

  .rightSide{
    background-color: #b65d91;
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