import { FaSearch } from 'react-icons/fa';

const SearchModal = () => {
   return (
      <div className='search-box'>
         <form className='search-form'>
         <FaSearch className='search-logo'/>
               <input 
               className='search-input'
               type="text"
        autoComplete="off"
        autoFocus
        placeholder="Який продукт шукаєте?"/>
         </form>
      </div>
   )
}

export default SearchModal;