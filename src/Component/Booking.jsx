import React from "react";
import {Link} from "react-router-dom";
import './Booking.css';
import Anhtaikhoan from '/traveloka/src/Component/Image/taikhoan.png';
import NoticeSign from '/traveloka/src/Component/Image/noticesign.png';
import AnuongTienichInct from '/traveloka/src/Component/Image/anuonginactive.png';
import WifiTienichCt from '/traveloka/src/Component/Image/wifitienichactive.png';
import ChinhsachhuyphongInct from '/traveloka/src/Component/Image/chinhsachhuyphonginactive.png';
import Nav from "./Nav";
import Footer from "./Footer";



function kiemtraloaikhach() {  
    var x = (document.getElementsByClassName('lk'));
    document.getElementById('ifYes').style.display='none'; 
    var radioloaikhach = (document.getElementsByName('loaikhachchinh'))
    radioloaikhach.checked = true;
    if (x[1].checked) {
        document.getElementById('ifYes').style.display = 'block';
    }
    else document.getElementById('ifYes').style.display='none';   
}



function kiemtraloaigiuong() {
    var checkloaigiuong = (document.getElementsByName('loaigiuong'));
    var hienthiloaigiuong = (document.getElementById('yesloaigiuong'));
    hienthiloaigiuong.style.display = 'block';
    if (checkloaigiuong[0].checked) {
        document.getElementById('yesloaigiuong').style.display = 'block';
    }
    else document.getElementById('yesloaigiuong').style.display ='none';
}

function gionhanphong() {
    var checkgionhanphong = (document.getElementsByName('gionhanphong'));
    if(checkgionhanphong[0].checked) {
        document.getElementById('yesnhanphong').style.display = 'block';
    }
    else document.getElementById('yesnhanphong').style.display = 'none';
}

function giotraphong() {
    var checkgiotraphong = (document.getElementsByName('giotraphong'));
    if(checkgiotraphong[0].checked) {
        document.getElementById('yestraphong').style.display = 'block';
    }
    else document.getElementById('yestraphong').style.display = 'none';
}

function khac() {
    var checkkhac = (document.getElementsByName('khac'));
    if(checkkhac[0].checked) {
        document.getElementById('yeskhac').style.display = 'block';
    }
    else document.getElementById('yeskhac').style.display = 'none';
}

const Booking = () => {
    return (
      <div>
          <Nav/>
          <div className="booking">
              
            <div className="divtongthu2">
                <div >
                    <div style={{textAlign:'left'}}>
                        <div><h2>Đặt phòng khách sạn</h2></div>
                        <div><h3 style={{color:'rgb(104, 113, 118)', fontWeight:'700', fontSize:'17px'}}>Điền thông tin người liên lạc và khách bên dưới</h3></div>
                    </div>  

                    <form  className="formtaikhoandangnhap">
                        <div style={{display:'flex'}}>
                            <div className="circle"><img src={Anhtaikhoan} className='anhtaikhoan'></img></div>
                            <div><h3 className="dangnhapvoi">Đăng nhập với tên Trương Lập Nhân </h3></div>
                        </div>
                    </form>

                    <div><h3 className="thongtincuaban">Thông tin của bạn</h3></div>

                    <form className="formthongtincuaban">
                        <div>
                            <div>
                                <div><h3 className="titletennguoilienhe">Tên người liên hệ:</h3></div>
                                <div style={{textAlign:'left'}}>
                                    <input type="text" name="" id="" className="inputtennguoilienhe"/>
                                </div>
                                <div><h3 className="yeucaunhaptennguoilienhe">*Nhập tên như trên CMND/hộ chiếu (không dấu)</h3></div>
                            </div>

                            <div style={{display:'flex'}}>
                                <div><h3 className="titlesodidong">Số di động:</h3></div>
                                <div style={{paddingLeft:'238px'}}><h3 className="titleemail">Email:</h3></div>
                            </div>

                            <div style={{display:'flex'}}>
                                <div>
                                    <div>
                                        <select name="countryCode" className="selectchonmaquocgiadidong">
                                            <option data-countryCode="GB" value="44" Selected>(+44)</option>
                                            <option data-countryCode="US" value="1">(+1)</option>
                                            <option data-countryCode="VN" value="84">(+84)</option>
                                        <optgroup label="Other countries">
                                            <option data-countryCode="DZ" value="213">(+213)</option>
                                            <option data-countryCode="AD" value="376">(+376)</option>
                                            <option data-countryCode="AO" value="244">(+244)</option>
                                            <option data-countryCode="AI" value="1264">(+1264)</option>
                                            <option data-countryCode="AG" value="1268">(+1268)</option>
                                            <option data-countryCode="AR" value="54">(+54)</option>
                                            <option data-countryCode="AM" value="374">(+374)</option>
                                            <option data-countryCode="AW" value="297">(+297)</option>
                                            <option data-countryCode="AU" value="61">(+61)</option>
                                            <option data-countryCode="AT" value="43">(+43)</option>
                                            <option data-countryCode="AZ" value="994">(+994)</option>
                                            <option data-countryCode="BS" value="1242">(+1242)</option>
                                            <option data-countryCode="BH" value="973">(+973)</option>
                                            <option data-countryCode="BD" value="880">(+880)</option>
                                            <option data-countryCode="BB" value="1246">(+1246)</option>
                                            <option data-countryCode="BY" value="375">(+375)</option>
                                            <option data-countryCode="BE" value="32">(+32)</option>
                                            <option data-countryCode="BZ" value="501">(+501)</option>
                                            <option data-countryCode="BJ" value="229">(+229)</option>
                                            <option data-countryCode="BM" value="1441">(+1441)</option>
                                            <option data-countryCode="BT" value="975">(+975)</option>
                                            <option data-countryCode="BO" value="591">(+591)</option>
                                            <option data-countryCode="BA" value="387">(+387)</option>
                                            <option data-countryCode="BW" value="267">(+267)</option>
                                            <option data-countryCode="BR" value="55">(+55)</option>
                                            <option data-countryCode="BN" value="673">(+673)</option>
                                            <option data-countryCode="BG" value="359">(+359)</option>
                                            <option data-countryCode="BF" value="226">(+226)</option>
                                            <option data-countryCode="BI" value="257">(+257)</option>
                                            <option data-countryCode="KH" value="855">(+855)</option>
                                            <option data-countryCode="CM" value="237">(+237)</option>
                                            <option data-countryCode="CA" value="1">(+1)</option>
                                            <option data-countryCode="CV" value="238">(+238)</option>
                                            <option data-countryCode="KY" value="1345">(+1345)</option>
                                            <option data-countryCode="CF" value="236">(+236)</option>
                                            <option data-countryCode="CL" value="56">(+56)</option>
                                            <option data-countryCode="CN" value="86">(+86)</option>
                                            <option data-countryCode="CO" value="57">(+57)</option>
                                            <option data-countryCode="KM" value="269">(+269)</option>
                                            <option data-countryCode="CG" value="242">(+242)</option>
                                            <option data-countryCode="CK" value="682">(+682)</option>
                                            <option data-countryCode="CR" value="506">(+506)</option>
                                            <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                            <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                            <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                            <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                            <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                            <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                            <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                            <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                            <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                            <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                            <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                            <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                            <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                            <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                            <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                            <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                            <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                            <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                            <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                            <option data-countryCode="FI" value="358">Finland (+358)</option>
                                            <option data-countryCode="FR" value="33">France (+33)</option>
                                            <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                            <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                            <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                            <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                            <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                            <option data-countryCode="DE" value="49">Germany (+49)</option>
                                            <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                            <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                            <option data-countryCode="GR" value="30">Greece (+30)</option>
                                            <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                            <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                            <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                            <option data-countryCode="GU" value="671">Guam (+671)</option>
                                            <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                            <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                            <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                            <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                            <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                            <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                            <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                            <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                            <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                            <option data-countryCode="IN" value="91">India (+91)</option>
                                            <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                            <option data-countryCode="IR" value="98">Iran (+98)</option>
                                            <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                            <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                            <option data-countryCode="IL" value="972">Israel (+972)</option>
                                            <option data-countryCode="IT" value="39">Italy (+39)</option>
                                            <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                            <option data-countryCode="JP" value="81">Japan (+81)</option>
                                            <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                            <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                            <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                            <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                            <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                            <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                            <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                            <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                            <option data-countryCode="LA" value="856">Laos (+856)</option>
                                            <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                            <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                            <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                            <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                            <option data-countryCode="LY" value="218">Libya (+218)</option>
                                            <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                            <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                            <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                            <option data-countryCode="MO" value="853">Macao (+853)</option>
                                            <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                            <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                            <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                            <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                            <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                            <option data-countryCode="ML" value="223">Mali (+223)</option>
                                            <option data-countryCode="MT" value="356">Malta (+356)</option>
                                            <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                            <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                            <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                            <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                            <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                            <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                            <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                            <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                            <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                            <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                            <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                            <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                            <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                            <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                            <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                            <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                            <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                            <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                            <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                            <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                            <option data-countryCode="NE" value="227">Niger (+227)</option>
                                            <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                            <option data-countryCode="NU" value="683">Niue (+683)</option>
                                            <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                            <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                            <option data-countryCode="NO" value="47">Norway (+47)</option>
                                            <option data-countryCode="OM" value="968">Oman (+968)</option>
                                            <option data-countryCode="PW" value="680">Palau (+680)</option>
                                            <option data-countryCode="PA" value="507">Panama (+507)</option>
                                            <option data-countryCode="PG" value="675">(+675)</option>
                                            <option data-countryCode="PY" value="595">(+595)</option>
                                            <option data-countryCode="PE" value="51">(+51)</option>
                                            <option data-countryCode="PH" value="63">(+63)</option>
                                            <option data-countryCode="PL" value="48">(+48)</option>
                                            <option data-countryCode="PT" value="351">(+351)</option>
                                            <option data-countryCode="PR" value="1787">(+1787)</option>
                                            <option data-countryCode="QA" value="974">(+974)</option>
                                            <option data-countryCode="RE" value="262">(+262)</option>
                                            <option data-countryCode="RO" value="40">(+40)</option>
                                            <option data-countryCode="RU" value="7">(+7)</option>
                                            <option data-countryCode="RW" value="250">(+250)</option>
                                            <option data-countryCode="SM" value="378">(+378)</option>
                                            <option data-countryCode="ST" value="239">(+239)</option>
                                            <option data-countryCode="SA" value="966">(+966)</option>
                                            <option data-countryCode="SN" value="221">(+221)</option>
                                            <option data-countryCode="CS" value="381">(+381)</option>
                                            <option data-countryCode="SC" value="248">(+248)</option>
                                            <option data-countryCode="SL" value="232">(+232)</option>
                                            <option data-countryCode="SG" value="65">(+65)</option>
                                            <option data-countryCode="SK" value="421">(+421)</option>
                                            <option data-countryCode="SI" value="386">(+386)</option>
                                            <option data-countryCode="SB" value="677">(+677)</option>
                                            <option data-countryCode="SO" value="252">(+252)</option>
                                            <option data-countryCode="ZA" value="27">(+27)</option>
                                            <option data-countryCode="ES" value="34">(+34)</option>
                                            <option data-countryCode="LK" value="94">(+94)</option>
                                            <option data-countryCode="SH" value="290">(+290)</option>
                                            <option data-countryCode="KN" value="1869">(+1869)</option>
                                            <option data-countryCode="SC" value="1758">(+1758)</option>
                                            <option data-countryCode="SD" value="249">(+249)</option>
                                            <option data-countryCode="SR" value="597">(+597)</option>
                                            <option data-countryCode="SZ" value="268">(+268)</option>
                                            <option data-countryCode="SE" value="46">(+46)</option>
                                            <option data-countryCode="CH" value="41">(+41)</option>
                                            <option data-countryCode="SI" value="963">(+963)</option>
                                            <option data-countryCode="TW" value="886">(+886)</option>
                                            <option data-countryCode="TJ" value="7">(+7)</option>
                                            <option data-countryCode="TH" value="66">(+66)</option>
                                            <option data-countryCode="TG" value="228">(+228)</option>
                                            <option data-countryCode="TO" value="676">(+676)</option>
                                            <option data-countryCode="TT" value="1868">(+1868)</option>
                                            <option data-countryCode="TN" value="216">(+216)</option>
                                            <option data-countryCode="TR" value="90">(+90)</option>
                                            <option data-countryCode="TM" value="7">(+7)</option>
                                            <option data-countryCode="TM" value="993">(+993)</option>
                                            <option data-countryCode="TC" value="1649">(+1649)</option>
                                            <option data-countryCode="TV" value="688">(+688)</option>
                                            <option data-countryCode="UG" value="256">(+256)</option>
                                            <option data-countryCode="UA" value="380">(+380)</option>
                                            <option data-countryCode="AE" value="971">(+971)</option>
                                            <option data-countryCode="UY" value="598">(+598)</option>
                                            <option data-countryCode="UZ" value="7">(+7)</option>
                                            <option data-countryCode="VU" value="678">(+678)</option>
                                            <option data-countryCode="VA" value="379">(+379)</option>
                                            <option data-countryCode="VE" value="58">(+58)</option>
                                            <option data-countryCode="VG" value="84">(+1284)</option>
                                            <option data-countryCode="VI" value="84">(+1340)</option>
                                            <option data-countryCode="WF" value="681">(+681)</option>
                                            <option data-countryCode="YE" value="969">(+969)</option>
                                            <option data-countryCode="YE" value="967">(+967)</option>
                                            <option data-countryCode="ZM" value="260"> (+260)</option>
                                            <option data-countryCode="ZW" value="263">(+263)</option>
                                        </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div style={{marginLeft:'12px'}}><input type="number" name="" id="" className="inputnhapsodidong"/></div>
                                <div style={{marginLeft:'12px'}}><input type="email" name="" id="" className="inputemail"/></div>
                            </div>

                            <div style={{display:'flex'}}>
                                <div style={{width:'292px'}}><h3 className="vidunhapsodienthoai">VD: +84 901234567 trong đó (+84) là mã quốc gia còn 901234567 là số di động</h3></div>
                                <div style={{width:'296px', paddingLeft:'21px'}}><h3 className="vidunhapemail">VD: email@example.com</h3></div>
                            </div>

                            <div><hr /></div>

                            <div style={{display:'flex'}}>
                                <div style={{display:'flex', paddingLeft:'10px'}}>
                                    <div><input type="radio" name="loaikhach" id="loaikhachchinh" className="lk" onClick={kiemtraloaikhach}/></div> 
                                    <div><label className="titleloaikhach">Tôi là khách lưu trú</label></div> 
                                </div>
                                <div style={{display:'flex'}}>
                                    <div><input type="radio" name="loaikhach" id="" className="lk" onClick={kiemtraloaikhach}/></div>
                                    <div><label className="titleloaikhach">Tôi đang đặt cho người khác</label></div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div id="ifYes">
                        <div>
                            <h3 className="titletenkhach">Tên khách:</h3>
                        </div>
                        <form className="formnhaptenkhach" style={{}}>
                            <div>
                                <div><h4 className="titletenkhachtrongform">Tên khách:</h4></div>
                                <div style={{textAlign:'left'}}><input type="text" name="" id="" className="inputnhaptenkhach"/></div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div><h3 className="titleyeucaudacbiet">Yêu cầu đặc biệt</h3></div>
                        <form className="formchonyeucaudacbiet">
                            <div>
                                <div className="luuydacbiettong"><h4 className="luuyyeucaudacbiet">Bạn có yêu cầu đặc biệt? Gửi yêu cầu và khách sạn sẽ cố gắng đáp ứng nguyện vọng của bạn. (Xin lưu ý yêu cầu đặc biệt không được bảo đảm trước và có thể thu phí)</h4></div>
                            </div>

                            <div>
                                <div>
                                    <div style={{display:'flex', paddingTop:'15px'}}>
                                        <div style={{paddingLeft:'30px',width:'300px'}}>
                                            <div style={{display:'flex'}}>
                                                <div className="checkboxyeucaudacbiet"><input type="checkbox" name="" id="" /></div>
                                                <div><label className="labelchoyeucaudacbiet">Phòng không hút thuốc</label></div>
                                            </div>
                                            <div style={{display:'flex'}}>
                                                <div className="checkboxyeucaudacbiet"><input type="checkbox" name="" id="" /></div>
                                                <div><label className="labelchoyeucaudacbiet">Tầng lầu</label></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{display:'flex'}}>
                                                <div className="checkboxyeucaudacbiet"><input type="checkbox" name="" id="" /></div>
                                                <div><label className="labelchoyeucaudacbiet">Phòng liên giường</label></div>
                                            </div>
                                            <div>
                                                <div style={{display:'flex'}}>
                                                    <div className="checkboxyeucaudacbiet"><input type="checkbox" name="loaigiuong" id="" onClick={kiemtraloaigiuong}/></div>
                                                    <div><label className="labelchoyeucaudacbiet">Loại giường</label></div>
                                                </div>
                                                <div id="yesloaigiuong"  className="optionalcholoaigiuong">
                                                    <div style={{display:'flex'}}>
                                                        <div><input type="radio" name="" id="" className="optionalloaigiuong"/></div>
                                                        <div><label className="cacloaigiuong">Giường đơn</label></div>
                                                    </div>
                                                    <div style={{display:'flex'}}>
                                                        <div><input type="radio" name="" id="" className="optionalloaigiuong"/></div>
                                                        <div><label className="cacloaigiuong">Giường lớn</label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{paddingLeft:'15px', paddingRight:'15px'}}><hr /></div>

                                    <div >
                                        <div style={{display:'flex'}}>
                                            <div>
                                                <div style={{display:'flex', paddingLeft:'30px', width:'300px'}}>
                                                    <div className="checkboxyeucaudacbiet"><input type="checkbox" name="gionhanphong" id="" onClick={gionhanphong}/></div>
                                                    <div><label className="labelchoyeucaudacbiet">Giờ nhận phòng</label></div>
                                                </div>
                                                <div style={{width:'200px', paddingLeft:'50px'}} id="yesnhanphong">
                                                    <div><input type="time" name="" id="" /></div>
                                                </div>
                                            </div>
                                        
                                            <div>
                                                <div style={{display:'flex'}}>
                                                    <div className="checkboxyeucaudacbiet"><input type="checkbox" name="giotraphong" id="" onClick={giotraphong}/></div>
                                                    <div><label className="labelchoyeucaudacbiet">Giờ trả phòng</label></div>
                                                </div>
                                                <div style={{width:'200px', paddingLeft:'20px'}} id="yestraphong">
                                                    <div><input type="time" name="" id="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{paddingLeft:'15px', paddingRight:'15px'}}><hr /></div>

                                    <div>
                                        <div style={{display:'flex', paddingLeft:'30px'}}>
                                            <div className="checkboxyeucaudacbiet"><input type="checkbox" name="khac" id="" onClick={khac}/></div>
                                            <div><label className="labelchoyeucaudacbiet">Khác</label></div>
                                        </div>
                                        <div id="yeskhac" style={{textAlign:'left', paddingLeft:'37px'}}>
                                            <textarea name="" id="" cols="30" rows="10" className="inputkhac"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div><h3 className="titlechinhsachhuydatphong">Chính sách hủy đặt phòng</h3></div>
                        <form className="formchinhsachhuydatphong">
                            <div className="divtitlehuydatphong">
                                <h3 className="titlehuydatphong">Chính sách hủy đặt phòng</h3>
                            </div>
                            <div>
                                <h4 className="noidunghuyphong">Đặt phòng này không được hoàn tiền.</h4>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div><h3 className="titleimportant">Important Notice</h3></div>
                        <form className="formimportant">
                            <div style={{display:'flex'}}>
                                <div><img src={NoticeSign} alt="" className="anhnotice"/></div>
                                <div><h3 className="titlenotice">Important Notice</h3></div>
                            </div>
                            
                            <div style={{textAlign:'left'}}>
                                <div><h4 style={{marginTop:'15px'}}>“CẦN ĐỌC TRƯỚC KHI NHẬN PHÒNG”: Vì tình hình COVID-19 đang diễn biến phức tạp, hãy chắc chắn rằng chính sách hủy phòng này phù hợp với nhu cầu của bạn.</h4></div>
                                <div><h4 className="titlechinhsachnhanphong">Chính Sách về Giấy Tờ</h4></div>
                                <div><h4 className="chinhsachnhanphong">Khi nhận phòng, bạn cần cung cấp CMND/CCCD. Các giấy tờ cần thiết có thể ở dạng bản mềm.</h4></div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div><h3 className="titlechitietgia">Chi tiết giá</h3></div>
                        <form className="formchitietgia">
                            <div style={{display:'flex'}}>
                                <div><h4 className="thanhtien">Thành tiền</h4></div>
                                <div><h4 className="sothanhtien">446.436 VND</h4></div>
                            </div>

                            <div><hr /></div>

                            <div style={{display:'flex'}}>
                                <div><h4 className="giaphong">(1x) Standard Room</h4></div>
                                <div><h4 className="sogiaphong">393.706 VND</h4></div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div><h4 className="giaphi">Thuế và phí</h4></div>
                                <div><h4 className="sogiaphi">52.757 VND</h4></div>
                            </div>

                            <div className="divdiemvatimhieuchung">
                                <div><h4 className="sodiemnhanduoc">Tài khoản (firstempire99@gmail.com) sẽ nhận 66 điểm</h4></div>
                                <div><h4 className="timhieuthem">TÌM HIỂU THÊM</h4></div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div style={{display:'flex'}}>
                            <div style={{textAlign:'left'}}>
                                <h3 className="policydatphong">Khi nhấn vào nút này bạn<br/>
                                    công nhận mình đã đọc và<br/>
                                    đồng ý với các <u className="underlinkpolicydatphong">Điều khoản & Điều kiện</u> và<br/>
                                    <u className="underlinkpolicydatphong">Chính sách quyền riêng tư</u></h3>
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <Link to="/Payment"><button className="btntieptuc">Tiếp tục</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{flexDirection:'column', padding:'10px'}}></div>

                <div>
                    <form className="formnhoxemthongtinphong">
                        <div style={{paddingLeft:'15px'}}>
                            <div><h3 className="formnhotenkhachsan">Da Lat Royal Palace</h3></div>
                            <div className="formnhophanbietinfo">Khách sạn</div>
                        </div>

                        <div><hr style={{marginBottom:'0px'}}/></div>

                        <div className="divthoigiannhantraphong">
                            <div style={{display:'flex'}}>
                                <div><h4 className="labelthoigiannhanphong">Ngày nhận phòng:</h4></div>
                                <div><h4 className="textthoigiannhanphong">Tue, 3 May 2022, Từ 14:00</h4></div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div><h4 className="labelthoigiantraphong">Ngày trả phòng:</h4></div>
                                <div><h4 className="textthoigiantraphong">Wed, 4 May 2022, Trước 12:00</h4></div>
                            </div>
                        </div>

                        <div><hr style={{marginTop:'0px'}}/></div>

                        <div>
                            <div><h3 className="formnhotenphong">(1x) Standard Room</h3></div>
                            <div className="divkhachvagiuong">
                                <div style={{display:'flex'}}>
                                    <div><label className="labelsokhachtrenphong">khách/phòng</label></div>
                                    <div><h4 className="textsokhachtrenphong">2 khách</h4></div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div><label className="labelkieugiuong">Kiểu giường</label></div>
                                    <div><h4 className="textkieugiuong">1 giường đôi</h4></div>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <div style={{display:'flex'}}>
                                        <div><img src={AnuongTienichInct} alt="" /></div>
                                        <div><h4 className="tienichinactiveformnho">Không gồm bữa sáng</h4></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div><img src={WifiTienichCt} alt="" /></div>
                                        <div><h4 className="tienichactiveformnho">WiFi miễn phí</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div><hr /></div>

                        <div>
                            <div className="divchinhsachapdung">
                                <div style={{display:'flex'}}>
                                    <div><img src={ChinhsachhuyphongInct} alt="" /></div>
                                    <div><h4 className="chinhsachhuyinactive">Không hoàn tiền</h4></div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div><img src={ChinhsachhuyphongInct} alt="" /></div>
                                    <div><h4 className="chinhsachhuyinactive">Không áp dụng đổi lịch</h4></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  };
  export default Booking;