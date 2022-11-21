import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Head } from './style';
import Logo from './logo.png'

const Header = () => (
 <Head>
  <div>
   <img id="logo" src={Logo} alt='Cantina da Isa' />
   <button>
   <AiOutlineShoppingCart id='cart'/>
   </button>
  </div>
 </Head>
)

export default Header;