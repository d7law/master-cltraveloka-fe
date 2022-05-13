import { render } from '@testing-library/react'
import React from 'react'
import './Login.css'
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <>
            <Nav />
            <div className='formlogin'>
                <form>
                    <h1>Đăng nhập tài khoản</h1><br></br><br></br>
                    <p>Email hoặc số di động:</p>
                    <input type='text'></input><br></br><br></br>
                    <p>Mật khẩu:</p>
                    <input type='password'></input><br></br><br></br>
                    <p>Bạn chưa có tài khoản?<br></br><Link to='/Register'><a href='/register'>Đăng ký</a></Link></p><br></br>
                    <Link to='/Home'><input type="submit" value="Đăng nhập" className="btnLogin"/></Link><br></br>
                    <div>
                        <br></br>
                        <label>Hoặc đăng nhập bằng</label><br></br>
                        <br></br>
                        <input type="submit" value="Facebook" className="btnFacebook"/><br></br>
                        <br></br>
                        <input type="submit" value="Google" className="btnGoogle"/>
                    </div>

                </form>
            <Footer/>
            </div>
        </>
    )
}
