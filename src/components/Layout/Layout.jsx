import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import './Layout.css';
import SearchModal from '../SearchModal/SearchModal';

const Layout = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)

  const openSearchModal = () => {
setShowSearchModal(true)
  }

  const closeSearchModal = () => {
    setShowSearchModal(false)
  }

  return (
    <div className="wrapper">
      <header>
        <div className="header">
        {showSearchModal && <SearchModal closeSearchModal={closeSearchModal}/>}
         <div className="search">
            <FaSearch className="search-icon" onClick={openSearchModal}/>
          </div>
          
          <div className="header-logo">
            <NavLink className="logo" to="/">
              Cosmetics
            </NavLink>
          </div>
          <div className="header-menu">
            <AiOutlineHeart />
            <BiUser />
            <FaShoppingCart />
          </div>
        </div>
        <div className="presentation"></div>

        <ul className="nav-list">
          <li className='parfums-category'>
            <NavLink className="categories" to="/parfums">Парфумерія</NavLink>
            <ul className="nav-podlist parfums">
              <li>
                <NavLink className="pod-categories" to="/parfums/women-parfums">Жіночі парфуми</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/parfums/men-parfums">Чоловічі парфуми</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/parfums/unisex-parfums">Унісекс парфуми</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/parfums/kids-parfums">Дитячі парфуми</NavLink>
              </li>
            </ul>
          </li>

          <li className='makeup-category'>
            <NavLink className="categories" to="/makeup">Макіяж</NavLink>
            <ul className="nav-podlist makeup">
              <li>
                <NavLink className="pod-categories" to="/makeup/eyes">Очі</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/makeup/brows">Брови</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/makeup/lips">Губи</NavLink>
              </li>
              <li><NavLink className="pod-categories" to="/makeup/face">Обличчя</NavLink>
              </li>
            </ul>
          </li>

          <li className='hair-category'>
            <NavLink className="categories " to="/hair">Волосся</NavLink>
            <ul className="nav-podlist hair">
              <li>
                <NavLink className="pod-categories" to="/hair/shampoo">Шампунь</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/hair/balm">Бальзам</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/hair/mask">Маска</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/hair/paint">Фарбування</NavLink>
              </li>
            </ul>
          </li>

          <li className='face-category'>
            <NavLink className="categories " to="/face">Обличчя</NavLink>
            <ul className="nav-podlist face">
              <li>
                <NavLink className="pod-categories" to="/face/cream">Крем</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/face/serum">Сироватка</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/face/mask">Маска</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/face/oil">Олія</NavLink>
              </li>
            </ul>
          </li>

          <li className='body-category'>
            <NavLink className="categories " to="/body">Тіло</NavLink>
            <ul className="nav-podlist body">
              <li>
                <NavLink className="pod-categories" to="/body/gel">Гель для душу</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/body/cream">Крем для тіла</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/body/hands">Крем для рук</NavLink>
              </li>
              <li>
                <NavLink className="pod-categories" to="/body/legs">Крем для ніг</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>Всі права захищені &copy; </footer>
    </div>
  );
};

export default Layout;
