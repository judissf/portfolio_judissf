import styled from 'styled-components'

export const MessageDiv = styled.aside`
 display: flex;
 position: sticky;
 top: 100px;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 width: 200px;
 height: 350px;
 padding: 10px;
 margin-top: 30px;
 margin-left: 15px;

 @media (max-width: 600px) {
  display: none;
 }

 background-image: linear-gradient(to bottom, rgba(240,200,200,0.3), rgba(240,240,24, 0.15));

 svg {
  width: 30px;
  height: 30px;
 }
 
 p {
  font-size: 16px;
  text-align: justify;
  font-weight: 500;
 }

`