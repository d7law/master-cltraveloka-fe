import React from "react";
import {Link} from "react-router-dom";
import './Payment.css';
import Footer from './Footer';
import Nav from './Nav';

const Payment = () => {
    return(
        <>
        <Nav/>
        <div className="payment" style={{}}>
            
            <div style={{marginTop:'30px'}}></div>
            <h2>Thanh toán</h2>           
            <div style={{display:'-webkit-inline-flex'}}>
                <form className="form1">
                    <div style={{display:'flex', marginBottom:'20px', marginTop:'-15px'}}>
                        <div >
                            <label className="labelthethanhtoan">Thẻ thanh toán</label>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div style={{display:'grid'}}>
                        <div style={{display:'block', marginBottom:'5px'}}>
                            <label className="labelsothe">Số thẻ</label>        
                        </div>
                        <div style={{textAlign:'left'}}>
                            <input className="inputsothe" placeholder="Nhập 16 số"></input>
                        </div>
                    </div>

                    <div style={{marginBottom:'25px'}}></div>

                    <div style={{display:'flex'}}>
                        <div style={{display:'block', marginBottom:'5px'}}>
                            <label className="labelsothe" style={{marginBottom:'5px'}}>Có hiệu lực đến</label> 
                            <div style={{textAlign:'left'}}>
                                <input className="inputhieuluc" placeholder="MM/YY"></input>
                            </div>       
                        </div>

                        <div style={{flexDirection:'column', margin:'5px'}}></div>

                        <div style={{display:'block', marginBottom:'5px'}}>
                            <label className="labelsothe" style={{marginBottom:'5px'}}>CVV</label> 
                            <div style={{textAlign:'left'}}>
                                <input className="inputCVV" placeholder="Nhập 3 số CVV"></input>
                            </div>       
                        </div>                       
                    </div>

                    <div style={{marginBottom:'25px'}}></div>

                    <div style={{display:'grid'}}>
                        <div style={{display:'block', marginBottom:'5px'}}>
                            <label className="labelsothe">Tên trên thẻ</label>        
                        </div>
                        <div style={{textAlign:'left'}}>
                            <input className="inputsothe" placeholder="Tên trên thẻ"></input>
                        </div>
                    </div>

                    <div style={{marginBottom:'25px'}}></div>

                    <div style={{display:'flex', marginRight:'100px'}}>
                        <input type="checkbox" style={{marginRight:'20px', marginTop:'10px'}}></input>
                        <label style={{whiteSpace:'nowrap',paddingRight:'100px' ,textAlign:'left',fontSize:'18px', fontWeight:'500'}}>Lưu thông tin thẻ để đặt chỗ nhanh hơn<br></br> vào lần sau</label>
                    </div>

                    <div style={{marginBottom:'25px'}}></div>

                    <div style={{display:'grid'}}>
                        <div style={{display:'block', marginBottom:'5px'}}>
                            <label className="labelsothe">Mã giảm giá</label>        
                        </div>
                        <div style={{textAlign:'left'}}>
                            <input className="inputsothe" placeholder="Nhập mã giảm giá (nếu có)"></input>
                        </div>
                    </div>

                    <div style={{marginBottom:'25px', marginTop:'25px'}}><hr></hr></div>

                    <div style={{display:'grid',}}>
                        <div>
                            <label className="labelchitietgia">Chi tiết giá</label>
                        </div>
                        <div style={{display:'flex'}}>
                            <h3 className="tenkhachsanvaphong">Terracotta Hotel & Resort Dalat, Basement Standard Twin Room x 1</h3>
                            <div style={{}}>
                                <h3 className="giatienphong">1.034.583 VND</h3>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <h3 className="tenkhachsanvaphong">Thuế và chi phí khác</h3>
                            <div style={{}}>
                                <h3 className="giatienphong">138.635 VND</h3>
                            </div>
                        </div>

                        <div style={{marginBottom:'-5px', marginTop:'0px', maxWidth:'400px'}}><hr></hr></div>

                        <div style={{display:'flex'}}>
                            <h3 className="labeltongchiphi">Tổng chi phí</h3>
                            <div style={{}}>
                                <h3 className="tonggiatien">1.173.218 VND</h3>
                            </div>
                        </div>                                              
                    </div>

                    <div>
                        <h3 className="thongbaodiem">Tài khoàn này (firstempire99) sẽ nhận thêm 175 Điểm</h3>
                    </div>

                    <div>
                        <h3 className="policy">Khi nhấn vào nút này bạn<br/>
                            công nhận mình đã đọc và<br/>
                            đồng ý với các <u className="underlinkpolicy">Điều khoản & Điều kiện</u> và<br/>
                            <u className="underlinkpolicy">Chính sách quyền riêng tư</u></h3>
                    </div>

                    <div style={{marginLeft:'50px'}}>
                        <Link to="/Success"><button className="btnthanhtoan" style={{justifyItems:'center', marginLeft:'80px', marginTop:'15px'}}>Tiếp tục đến thanh toán</button></Link>
                    </div>
                </form>

                <div style={{flexDirection:'column', marginLeft:'10px'}}></div>

                <div>
                    <form className="formnho">
                        <div style={{textAlign:'left', marginTop:'-25px'}}>
                            <div style={{marginTop:'0px'}}>
                                <label className="labelmadatcho">Mã đặt chỗ</label>
                            </div>
                            <div style={{marginTop:'-10px'}}>
                                <h3 className="madatcho" style={{}}>800679525</h3>
                            </div>
                        </div>

                        <div style={{marginBottom:'0px', marginTop:'0px'}}><hr></hr></div>

                        <div>
                            <div><h4 className="thongtinkiemtralai">Terracotta Hotel & Resort Dalat</h4></div>
                            <div><h4 className="thongtinkiemtralai">Thứ 2, ngày 18 tháng 4 năm 2022</h4></div>
                            <div><h4 className="thongtinkiemtralai">1 ngày</h4></div>
                            <div><h4 className="thongtinkiemtralai">Basement Standard Twin Room</h4></div>
                        </div>

                        <div style={{marginBottom:'0px', marginTop:'0px'}}><hr></hr></div>
                        
                        <div style={{display:'grid'}}>
                            <div><label className="labelkhach">Khách</label></div>
                            <div style={{marginTop:'-5px', height:'30px'}}><h3 className="tenkhach" style={{fontWeight:'400'}}>Cao Quý Nhân</h3></div>
                        </div>
                    </form>
                </div>
            </div>

            <div style={{marginBottom:'40px'}}></div>
                             
        </div>
        <Footer/>  
        </>
    )
}

export default Payment;