import React, { useState} from 'react';
import { HiOutlineMenu} from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../Assets/Logo.png';
import './Navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#aboutus'>About Us</a></p>
    <p><a href='#testimonials'>Testimonials</a></p>
    <p><a href='#faq'>FAQ</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='navbar-consult'>
        <button type='button'>Free Consultation</button>
      </div>
      <div className="navbar-menu">
      {toggleMenu
        ? <IoCloseOutline color="#764af1" size={27} onClick={() => setToggleMenu(false)} />
        : <HiOutlineMenu color="#764af1" size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className='navbar-menu_container scale-up-center'>
          <div className='navbar-menu_container-links'>
            <Menu />
            <div className='navbar-menu_container-links-consult'>
              <button type='button'>Free Consultation</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar;