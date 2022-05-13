import React from 'react';
import logo from '/traveloka/src/Component/Image/logo.webp';
import './Nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div className="Nav">
            
            <div class='header'>
                <Link to='/Home'><a href='#default' class='logo'><img src={logo} alt='logo'></img></a></Link>
                <div class='header-right'>
                    <Link to='/Check'><a href='#seat' className='seat'>Đặt chỗ của tôi</a></Link>
                    <Link to='/Login'><a href='Login'>Đăng nhập</a></Link>
                    <Link to='/Register'><a class='active' href='#register'>Đăng ký</a></Link>
                </div>
            </div>

           
               
        </div>
        
      );
  }