import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './ListRoom.css'
import Nav from './Nav'
import SlideShow from './SlideShow/SlideShow';
import img1 from '/traveloka/src/Component/Image/banner_1.webp';
import img2 from '/traveloka/src/Component/Image/banner_2.webp';
import img3 from '/traveloka/src/Component/Image/banner_3.webp';
import img4 from '/traveloka/src/Component/Image/banner_4.webp';
import img5 from '/traveloka/src/Component/Image/banner_5.webp';
import img6 from '/traveloka/src/Component/Image/banner_6.webp';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



const collection = [
    { src: img1},
    { src: img2},
    { src: img3},
    { src: img4},
    { src: img5},
    { src: img6},
  ];


export default function ListRoom(){
    return(
        <div>
            <Nav/>
            <SlideShow
              input={collection}
              ratio={`3:2`}
              mode={`automatic`}
              timeout={`3000`}/>
                <div>
                    <p>Xem thêm khuyến mãi</p>
                </div>
        <div>
            <div>
                <br></br>
                <h3>Danh sách các phòng:</h3>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        
                        <div>
                            <img className="imgkhachsan"  src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-aa6142346de7035242014b8e43b1ca20.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                        <Link  to="/InfoRoom">
                            <div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan" >Da Lat Royal Palace</h3>
                            </div>
                            </Link>
                            <div>
                                <div className="phanbiet">Khách sạn</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 3/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>850.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>365.288 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>54 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10042556-4db2f0c5d7089b6f88bc52fd5bb3dc16.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">Khách sạn The Grace Dalat</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khách sạn</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 2.5/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>410.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>294.298 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>44 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67790890-c9b41617803d042b7627743b6b93f3d9.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">Pontus Hotel</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khách sạn</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 2.5/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>495.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>472.725 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>70 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10018894-34427bc5f06d251b45f547e4f815ee84.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">Terracotta Hotel & Resort Dalat</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khu nghỉ dưỡng</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 4.5/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>1.890.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>1.173.218 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>175 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20015279-61f0110b14fcdae55773b9c112533855.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">Dalat Wonder Resort</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khu nghỉ dưỡng</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 5/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>2.280.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>1.050.008 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>157 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67813244-c5477456f0f29b696303db3366923f4a.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">K Boutique Hotel in Dalat</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khách sạn</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 3/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>510.000 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>487.050 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>73 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>

            <div>
                <form className="formthongtinkhachsan">
                    <div style={{display:'flex'}}>
                        <div>
                            <img className="imgkhachsan" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20010764-27cd97e22a55beb0b4f75e0a106ec544.jpeg?tr=q-40,w-300,h-300&_src=imagekit"/>
                        </div>

                        <div style={{flexDirection:'column',marginLeft:'15px'}}></div>

                        <div style={{marginTop:'-5px', width:'250px'}}>
                            <Link to="/InfoRoom"><div style={{textAlign:'left', overflow:'hidden'}}>
                                <h3 className="tenkhachsan">Khách sạn The Luxe</h3>
                            </div></Link>
                            <div>
                                <div className="phanbiet">Khách sạn</div>
                            </div>
                            <div className="diachi">
                                <h4 >Phường 3, Đà Lạt</h4>
                            </div> 
                            <div className="danhgia">
                                <h4>Đánh giá: 3/5</h4>
                            </div>
                        </div>

                        <div className="line" style={{flexDirection:'column',marginLeft:'5px'}}></div>

                        <div style={{borderRadius:'15px', paddingLeft:'12px', maxHeight:'200px'}}>
                            <div className="thanhtoankhinhanphong">
                                <h4>Thanh toán khi nhận phòng</h4>
                            </div>
                            <div className="giagoc">
                                <h4><del>529.425 VND</del></h4>
                            </div>
                            <div className="giamgia">
                                <h4>505.601 VND</h4>
                            </div>
                            <div className="diemthuong">
                                <h4>75 Điểm</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style={{marginBottom:'15px'}}></div>
        </div>
        <Footer/>
    </div>

    )
}