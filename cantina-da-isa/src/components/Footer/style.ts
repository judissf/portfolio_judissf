import styled from 'styled-components'

export const Foot = styled.footer`
 display: flex;
 max-width: 100vw;
 align-items: center;
 justify-content: center;
 background-image: linear-gradient(to bottom, rgba(240,200,200,1), rgba(240,240,24, 0.2));

 div {
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 150px;
 }

 nav {
  display: flex;
  height: 130px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  @media (max-width: 1226px) {
   margin-left: 15px;
  }
  
  a {
   color: black;
   font-size: 15px;
   font-weight: bold;
   text-decoration: none;
   transition: 0.2s;

   &:hover {
    color: gray;
    transition: 0.2s;
   }
  }
 }

`