import React from 'react';
import '../../assets/css/header.css'
import Navbar from './navbar';
import LogoType from '../../assets/image/logo.png'
import LogoTree from '../../assets/image/tree.png'
import LogoBird from '../../assets/image/bird.png'
import LogoBirdTitle from '../../assets/image/IranTravelBlog.png'
const Header = () => {
  return (
    <header>
      <div className='header'>
      <div className='header-outer'>
      <div className='header-inner'>
          <div><img src={LogoType}/></div>
          <div className='text-center'><img src={LogoTree} /></div>
          <div><img src={LogoBird}/><img className='beside-img' src={LogoBirdTitle} /></div>
        </div>
      </div>
     
      </div>
      <Navbar />
    </header>
  )
}

export default Header;