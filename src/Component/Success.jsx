import React from "react";
import {Link} from "react-router-dom";
import './Success.css';
import Footer from './Footer';
import Nav from "./Nav";

const Success = () => {
    return(
        <div style={{margin:'0', height:'100%'}}>
            <Nav/>
            <div className="xacnhanform">
                <form className="formxacnhanthanhcong">
                    <h2>Thanh toán thành công</h2>
                    <Link to="/"><button className="btnxacnhan">Xác nhận</button></Link>
                </form>
            </div>
            <Footer/>
        </div>
        
    )
}


export default  Success;
