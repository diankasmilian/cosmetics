import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import './Layout.css';

const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="header">
          <div className="search">
            <FaSearch  />
          </div>
          <div className="header-logo">
            <NavLink className='logo' to="/">
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
