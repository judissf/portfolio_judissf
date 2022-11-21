import CardAll from "./style"
import {TbShoppingCartPlus} from 'react-icons/tb'

const Card = ({product}: any) => (
 <CardAll>
  <div className="Img">
   <img src={product.img_url} alt={product.name} />
  </div>
  <h2>{product.name}</h2>
  <p>R$ {product.price.toFixed(2).replace('.',',')}</p>
  <div className="btn">
  <button>
    <TbShoppingCartPlus/>
    Adicionar ao carrinho
   </button>
  </div>
 </CardAll>
)

export default Card