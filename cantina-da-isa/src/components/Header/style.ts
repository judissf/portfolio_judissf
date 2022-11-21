import styled from "styled-components"

export const Head = styled.header`
 display: flex;
 position: sticky;
 top: 0;
 align-items: center;
 justify-content: center;
 max-width: 100vw;
 width: 100%;
 height: 70px;
 background-image: linear-gradient(to bottom, rgba(240,200,200,1), rgba(240,240,24, 0.2));
 margin: 0;
 padding: 0;

 div {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 15px 0 15px;
  justify-content: space-between;
  align-items: center;
  
  #logo{
   width: 200px;
  }

  #cart {
   width: 35px;
   height: 35px;
  }

  button {
   background-color: transparent;
   border: transparent;
   padding: 0;

   &:hover {
    cursor: pointer;
   }
  }
 }



`