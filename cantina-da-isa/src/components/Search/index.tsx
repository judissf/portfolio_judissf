import { BiSearch } from 'react-icons/bi'
import { SearchDiv } from './style'

const Search = () => (
 <SearchDiv>
  <div className='buttons--filter'>
    <button className='buttons'>Pães</button>
    <button className='buttons'>Sucos</button>
    <button className='buttons'>Doces</button>
  </div>
  <div className='search'>
   <BiSearch />
   <input type='text' placeholder='Procure por produtos aqui' />
  </div>
 </SearchDiv>
)

export default Search
