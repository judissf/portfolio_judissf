import styled from "styled-components"

export const All = styled.main`
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 max-width: 1230px;
 width: 100%;
 margin: auto;

 @media (max-width: 1179px) {
   width: 90%;
  }

 ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  width: 79%;
  margin-top: 30px;
  margin-right: 15px;

  @media (max-width: 1179px) {
   overflow-y: scroll;
  }
  
  @media (max-width: 600px) {
   overflow: hidden;
   margin: auto;
   margin-top: 30px;
  }
 }
`
