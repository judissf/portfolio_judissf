import styled from 'styled-components'

export const SearchDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 max-width: 1230px;
 margin: auto;
 margin-top: 30px;
 height: 110px;

 .buttons--filter {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 24px;

  .buttons {
   width: 100px;
   height: 40px;
   margin-right: 10px;
   border-radius: 10px;
   border: transparent;
   color: gray;
   font-size: 15px;
   font-weight: 600;
   background-image: linear-gradient(to bottom,rgba(240,200,200,0.3),rgba(240,240,24,0.15));
   transition: 0.2s;

   &:hover {
    cursor: pointer;
    color: black;
    transition: 0.2s;
    background-color: rgba(240,200,200,0.6);
   }

   &:active {
    border-radius: 10px;
    transition: 0s;
    color: white;
    font-weight: bolder;
   }
  }

 }

 .search {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid #f2f2bc;
  padding: 5px;
  width: 97%;
  height: 40px;
  margin: 0 15px 0 15px;
  background-color: #f2f2bc;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
   outline: 1px solid gray;
   transition: 0.2s;
   cursor: pointer;
  }

  svg {
   width: 30px;
   height: 30px;
   color: gray;
  }

  input {
   width: 95%;
   height: 100%;
   border: none;
   background-color: #f2f2bc;
   color: gray;
   margin-right: 15px;

   &::placeholder {
    color: gray;
   }

   &:hover {
    cursor: pointer;
   }

   &:focus {
    border: none;
    outline: none;
   }
  }
 }
`
