import { createPortal } from 'react-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchModal.css'

const modalSearch = document.querySelector('#modal-search');


const SearchModal = ({closeSearchModal}) => {

   const handleClickBackdrop = e => {
      if (e.target === e.currentTarget) {
         closeSearchModal();
      }
    };

   return createPortal(
      <div className='search-box' onClick={handleClickBackdrop}>
         <form className='search-form'>
         <FaSearch className='search-logo'/>
               <input 
               className='search-input'
               type="text"
        autoComplete="off"
        autoFocus
        placeholder="Який продукт шукаєте?"/>
         </form>
      </div>, modalSearch
   )
}

export default SearchModal;