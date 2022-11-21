import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../context";
import Card from "../Card";
import { All } from "./style";

interface IContainer {
 children: React.ReactNode;
}

const Container = ({children}:IContainer) => {
 const { products } = useContext(Context)

 return (
  <All>
   {children}
   <ul>
    {products.map((product) => (
     <li key={uuidv4()}>
      <Card product={product}/>
     </li>
    ))}
   </ul>
  </All> 
 )

}
export default Container