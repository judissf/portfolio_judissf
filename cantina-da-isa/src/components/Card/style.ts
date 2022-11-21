import styled from "styled-components"

export const CardAll = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 300px;
 width: 100%;
 height: 350px;
 outline: 1px solid gray;
 margin: 0 5px 10px 5px;
 border-radius: 10px 0 10px 0;
 transition: 0.2s;
 background-color: #f9f9f9;

 &:hover {
  box-shadow: 0 0 5px 2px gray;
  transition: 0.2s;
  scale: 1.01;
 }

 .Img {
  max-width: 300px;
  width: 100%;
  height: 200px;
  border-radius: 8px;

  
  img {
   border-radius: 10px 0 0 0;
   width: 100%;
   height: 100%;
  }
 }

 h2 {
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
  width: max-content;
 }

 p {
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
  width: max-content;
 }

 .btn {
  display: flex;
  align-items: flex-start;
  margin: auto;

  button {
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 200px;
   height: 35px;
   padding: 0;
   color: gray;
   margin: 0 0 5px 0;
   border: none;
   background-image: linear-gradient(to bottom, rgba(240,200,200,1), rgba(240,240,24, 0.2));
   transition: 0.2s;
   border-radius: 8px 0 8px 0;

   &:hover {
    color: black;
    transition: 0.2s;
    cursor: pointer;
   }

   &:active {
    color: white;
    transition: 0s;
   }
  }
 }

`

export default CardAll