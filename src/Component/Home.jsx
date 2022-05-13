import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Home.css';
import Nav from './Nav';
import img1 from '/traveloka/src/Component/Image/banner_1.webp';
import img2 from '/traveloka/src/Component/Image/banner_2.webp';
import img3 from '/traveloka/src/Component/Image/banner_3.webp';
import img4 from '/traveloka/src/Component/Image/banner_4.webp';
import img5 from '/traveloka/src/Component/Image/banner_5.webp';
import img6 from '/traveloka/src/Component/Image/banner_6.webp';
import SlideShow from './SlideShow/SlideShow';



const collection = [
    { src: img1},
    { src: img2},
    { src: img3},
    { src: img4},
    { src: img5},
    { src: img6},
  ];

export default function Home() {

  {
 
    return(
        <>
        <div>
          <Nav/>
          <SlideShow
              input={collection}
              ratio={`3:2`}
              mode={`automatic`}
              timeout={`3000`}/>
              
          <form className="formtimkiem">
            <div>
              <div className="khungtitletimkiem"><h3 className="titletimkiem">Tìm kiếm khách sạn</h3></div>
              <div className="phannhapdulieutimkiem">
                <div>
                  <div><h4 className="titlechondiadiem">Thành phố, địa điểm hoặc tên khách sạn:</h4></div>
                  <div>
                  <input type="text" name="city" list="diadiemgoiy" className="inputchondiadiem" placeholder="Thành phố, khách sạn, điểm đến"/>
                    <datalist id="diadiemgoiy" className="diadiemgoiy">
                      <option value="Da Lat, Lam Dong, Viet Nam"></option>
                      <option value="Da Nang, Viet Nam"></option>
                      <option value="TP Ho Chi Minh, Viet Nam"></option>
                    </datalist>
                  </div>
                </div>

                <div style={{paddingTop:'15px'}}></div>

                <div className="phannhanphongvasodem">
                  <div>
                    <div><h4 className="titlengaynhanphong">Ngày nhận phòng:</h4></div>
                    <div><input type="date" name="" id="" placeholder="" className="inputchonngaynhanphong"/></div>
                  </div>

                  <div style={{paddingLeft:'20px'}}>
                    <div><h4 className="titlesodem">Số đêm:</h4></div>
                    <div>
                      <input type="text" name="sodemo" list="sodemo" className="inputchonchonsodem" onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }/>
                        <datalist id="sodemo" >
                          <option value="1 đêm"></option>
                          <option value="2 đêm"></option>
                          <option value="3 đêm"></option>
                          <option value="4 đêm"></option>
                          <option value="5 đêm"></option>
                          <option value="6 đêm"></option>
                          <option value="7 đêm"></option>
                          <option value="8 đêm"></option>
                          <option value="9 đêm"></option>
                          <option value="10 đêm"></option>
                          <option value="11 đêm"></option>
                          <option value="12 đêm"></option>
                          <option value="13 đêm"></option>
                          <option value="14 đêm"></option>
                          <option value="15 đêm"></option>
                          <option value="16 đêm"></option>
                          <option value="17 đêm"></option>
                          <option value="18 đêm"></option>
                          <option value="19 đêm"></option>
                          <option value="20 đêm"></option>
                          <option value="21 đêm"></option>
                          <option value="22 đêm"></option>
                          <option value="23 đêm"></option>
                          <option value="24 đêm"></option>
                          <option value="25 đêm"></option>
                          <option value="26 đêm"></option>
                          <option value="27 đêm"></option>
                          <option value="28 đêm"></option>
                          <option value="29 đêm"></option>
                          <option value="30 đêm"></option>
                        </datalist>
                    </div>
                  </div>

                  <div style={{paddingLeft:'20px'}}>
                    <div><h4 className="titlengaytraphong">Ngày trả phòng:</h4></div>
                    <div><h4 className="textngaytraphong">Thứ 5, 12 thg 5 2022</h4></div>
                  </div>
                </div>

                <div style={{paddingTop:'15px'}}></div>

                <div className="khachphongvabutontim">
                  <div>
                    <div><h4 className="titlekhachvaphong">Số Khách và Số Phòng</h4></div>
                    <div style={{display:"flex" }}>
                      <div style={{display:'flex'}}>
                        <div><h4 className="cacloaikhachdatphong">Người lớn: </h4></div>
                        <div>

                          <input type="number" name="" id="" min="1" step="1" pattern="[0-9]" className="inputsonguoilon" onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }/>

                        </div>
                      </div>

                      <div style={{paddingLeft:'18.5px'}}></div>

                      <div style={{display:'flex'}}>
                        <div style={{display:'flex'}}>
                          <div><h4 className="cacloaikhachdatphong">Trẻ em: </h4></div>
                          <div>

                            <input type="number" name="" id="" min="1" step="1" pattern="[0-9]" className="inputsonguoilon" onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }/>

                          </div>
                        </div>
                      </div>

                      <div style={{paddingLeft:'18.5px'}}></div>

                      <div style={{display:'flex'}}>
                        <div style={{display:'flex'}}>
                            <div><h4 className="cacloaikhachdatphong">Số phòng: </h4></div>
                            <div>
                              
                              <input type="number" name="" id="" min="1" step="1" pattern="[0-9]" className="inputsonguoilon" onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }/>

                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to='/ListRoom'><input type="submit" value="Tìm kiếm khách sạn" className="buttonbatdautimkiem"/></Link>
                  </div>
                </div>

                <div style={{display:'flex'}}>
                  <div style={{transform:'scale(0.7)'}}><input type="checkbox" name="checkbox" id="checkbox" className="checkboxcongtac"/></div>
                  <div><h4 className="titlecongtac">Tôi đi công tác</h4></div>
                </div>
                
              </div>
            </div>       
          </form>
          <Footer/>  
          </div>
        </>
    )
  }}
