import React from "react";
import {Link} from "react-router-dom";
import './Check.css';
import Nav from './Nav';
import Footer from './Footer';

const Check = () => {
    return (
        <div >
             <Nav/>
            <div style={{marginTop:'30px'}}>
                <h2>Bạn vui lòng kiểm tra lại đặt chỗ</h2>
                <h3  style={{textAlign:'center', fontWeight:'400', color:'rgba(104,113,118,1.00)'}}>Vui lòng xem lại chi tiết đặt phòng của bạn trước khi tiếp tục đến bước thanh toán</h3>
            </div>
            <div className="formcheck">
            <div className="formxemlailon" style={{marginTop:"15px"}}>
                <br></br>
                <div>
                    <form className="formxemlai" >
                    <div>
                    <div style={{WebkitAlignItems:'flex-start'}}>
                    <img src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-cc423a6d6c38b2117600b55b0e1cd4ab.jpeg?_src=imagekit&tr=h-128,q-40,w-128" style={{objectFit:'fill',borderRadius:"5px", float:'left'}}/>
                    </div>                  
                    <div style={{boxSizing:'border-box', flexDirection:'column', float:'left', }}>
                        <div style={{maxHeight:'100px'}}>
                            <div style={{flexDirection:'column', marginLeft:'30px'}}>
                                <label style={{textAlign:'center',  }}>Da Lat Royal Palace</label>
                                <hr style={{width:'390px'}}></hr>
                            </div>
                            <div style={{WebkitFlexDirection:'row',alignItems:'stretch',minWidth:'120px',maxWidth:'450px', marginRight:'0px' , display:'flex', justifyItems:''} }>
                                <div style={{WebkitFlexDirection:'column',WebkitBoxAlign:'stretch',WebkitBoxDirection:'normal' , WebkitBoxOrient:'vertical', alignItems:'stretch', flexBasis:'auto'}}>
                                   <div style={{WebkitFlexDirection:'column', display:'flex', position:'relative'}}>
                                       <h4 className="fontxemlaih4">Ngày nhận phòng:</h4>
                                       <h3 className="fontxemlaih3upper">18 Apr 2022</h3>
                                   </div>               
                                </div>  
                                <div style={{WebkitFlexDirection:'column',WebkitBoxAlign:'stretch',WebkitBoxDirection:'normal' , WebkitBoxOrient:'vertical', alignItems:'stretch', flexBasis:'auto'}}>
                                   <div style={{WebkitFlexDirection:'column', display:'flex', position:'relative'}}>
                                       <h4 className="fontxemlaih4">Ngày tra phòng: </h4>
                                       <h3 className="fontxemlaih3upper">19 Apr 2022</h3>
                                   </div>           
                                </div> 
                                <div style={{WebkitFlexDirection:'column',WebkitBoxAlign:'stretch',WebkitBoxDirection:'normal' , WebkitBoxOrient:'vertical', alignItems:'stretch', flexBasis:'auto'}}>
                                   <div style={{WebkitFlexDirection:'column', display:'flex', position:'relative'}}>
                                       <h4 className="fontxemlaih4">Số đêm nghỉ: </h4>
                                       <h3 className="fontxemlaih3upper">1 đêm</h3>
                                   </div>           
                                </div>                                                        
                            </div>   
                        </div>
                        <br></br>
                        <br></br>
                        <br />
                    </div>
                    <div>
                                            
                    <hr style={{width:'550px'}}/>
                    </div>
                    <div style={{float:'left', marginLeft:'-30px'}}>
                        <h3 className="fontxemlaih3">Stardard Room</h3>
                        <div style={{display:'flex', marginLeft:'30px'}}>
                            <div style={{display:'flex', marginTop:'5px'}}>
                                <div>
                                    <label className="labelxlchumo" >khách/phòng: </label>
                                    <label className="labelxlchumo" >Kiểu giường: </label>
                                </div>
                                <div style={{marginLeft:'-10px'}}>
                                    <label className="labelxlchudam">2 khách</label>
                                    <label className="labelxlchudam">1 giường đôi</label>
                                </div>
                            </div>
                            <div style={{display:'flex', marginTop:'5px', marginLeft:'-10px'}}>
                                <div style={{maxWidth:'80px'}}>
                                    <label className="labelxlchumo" >Tiện ích chổ ở: </label>
                                </div>
                                <div style={{marginLeft:'30px', maxWidth:'400px'}}>
                                    <label className="label_xl_tienich_active">WiFi miễn phí </label>
                                    <label className="label_xl_tienich_active">Không hút thuốc </label>
                                    <label className="label_xl_tienich_inactive">Không gồm bữa sáng </label>     
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                </form>

                <div style={{paddingTop:'35px'}}></div>

                <form className="formxemlai2">
                    <div>
                        <h2 className="h2tieude">Chính sách khách sạn & phòng </h2>
                    </div>
                    <div style={{marginTop:'30px', marginLeft:'-30px'}}>
                        <hr style={{width:'610px'}}/>
                    </div>
                    <div style={{display:'block', marginTop:'-8px', marginLeft:'-15px'}}>
                        <div><h3 className="h3chinhsachtieude2">Chính sách hủy đặt phòng</h3></div>                    
                        <div style={{marginTop:'-1px'}}></div>
                        <div><h4 className="h4chinhsach">Hủy phòng có thu phí</h4></div>
                        <div><h4 className="h4chitietchinhsach">Đặt phòng này không được hoàn tiền. Thời gian hiển thị là giờ địa phương. Số đêm nghỉ và hạng phòng không được thay đổi.</h4></div>
                    </div>    
                </form>
                
                <div style={{paddingTop:'15px'}}></div>
                <div><h2 style={{textAlign:'left',marginBottom:'10px'}}>Chi tiết giá</h2></div>

                <form className="formxemlai2">
                    <div style={{display:'flex'}}>
                        <h2 className="h2tieude">Thành tiền</h2>
                        <h2 className="h2tieude" style={{marginLeft:'300px'}}>389.640 VND</h2>
                    </div>
                    
                    <div style={{marginTop:'30px', marginLeft:'-30px'}}>
                        <hr style={{width:'610px'}}/>
                    </div>

                    <div style={{display:'block', marginTop:'-8px', marginLeft:'-15px'}}>
                        <div style={{display:'flex'}}>
                            <h4 className="h4thanhtien">(1x) Da Lat Royal Palace, Standard Room</h4>
                            <h4 className="h4thanhtien" style={{marginLeft:'135px'}}>343.598 VND</h4>
                        </div> 

                        <div style={{marginTop:'-15px'}}></div>

                        <div style={{display:'flex'}}>
                            <h4 className="h4thanhtien">(1x) Thuế và phí</h4>
                            <h4 className="h4thanhtien" style={{marginLeft:'320px'}}>46.042 VND</h4>
                        </div>
                        <div style={{borderRadius:'5px',backgroundColor:'#EAA421', height:'100%', width:'100%', flexFlow:'column', marginTop:'-15px'}}>
                            <h4 className="h4thanhtien" >Tài khoản (102853907435663628437) sẽ nhận được 58 điểm</h4>
                        </div>
                    </div>    
                </form>
                <div style={{marginTop:'25px', display:'flex'}}>
                    <div>
                        <text style={{textAlign:'left', float:'left', marginLeft:"0px", paddingBottom:"30px"}}>
                            Khi nhấn vào nút này bạn<br/>
                            công nhận mình đã đọc và<br/>
                            đồng ý với các <u className="underlink">Điều khoản & Điều kiện</u> và<br/>
                            <u className="underlink">Chính sách quyền riêng tư</u>
                        </text>
                    </div>
                    <div>
                        <Link to="/Payment"><button className="btn" style={{justifyItems:'center', marginLeft:'80px', marginTop:'15px'}}>Tiếp tục đến thanh toán</button></Link>
                    </div>
                </div>
                <div style={{marginTop:'30px'}}></div>
                </div>

                <div style={{flexDirection:'column', paddingRight:'10px'}}></div>

                <div>
                <form className="formxemlainho">
                    <div>
                        <h2 className="h2tieude">Chi tiết người liên lạc</h2>
                    </div>
                    <div style={{marginTop:'30px', marginLeft:'-30px'}}>
                        <hr style={{width:'309px'}}/>
                    </div>
                    <div style={{display:'block'}}>
                        <div><h3 >Cao Quý Nhân</h3></div>                    
                        <div><h3 >+84 903826334</h3></div>
                        <div><h3 >caoquynhan@gmail.com</h3></div>
                    </div>
                </form>
                <form className="formxemlainho2" style={{marginTop: '12px'}}>
                    <div>
                        <h2 className="h2tieude">Chi tiết khách ở </h2>
                    </div>
                    <div style={{marginTop:'30px', marginLeft:'-30px'}}>
                        <hr style={{width:'309px'}}/>
                    </div>
                    <div>
                        <div style={{marginTop:'5px',display:'block',marginLeft:'-15px'}}>
                            <div style={{marginBottom:'5px', marginLeft:'0px'}}><label className="labelxlchumo" style={{width:'265px'}}>Tên khách </label></div>
                            <div><h3 className="h3thongtinkhacho">Cao Quý Nhân</h3></div>                    
                        </div>
                        <div style={{marginTop:'25px',display:'block',marginLeft:'-15px'}}>
                            <div style={{marginBottom:'5px'}}><label className="labelxlchumo" style={{width:'265px'}}>Yêu cầu đặc biệt</label></div>
                            <div><h3 className="h3thongtinkhacho">-</h3></div>  
                            <div><h3 className="h3luuy">Các yêu cầu đặc biệt sẽ tùy thuộc vào tính sẵn có và không được bảo đảm. Một số yêu cầu có thể phát sinh phụ phí.</h3></div>                  
                        </div>
                    </div>
                </form>
                </div>
            </div>           
        </div>
        <Footer/>
        </div>
    )
}

export default Check;