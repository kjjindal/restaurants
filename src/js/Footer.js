import React from 'react';
import '../css/Footer.css';
import footerimage from '../image/footer.jpg';
import footerlogo2 from '../image/footerlogo2.svg';



const footerstyle={
    background:`url(${footerimage})`,
    backgroundPosition:'center',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    height:'482px',
}

function Footer(){
    return (
        <>
        <div className="footer" style={footerstyle}>
            <div className="footer__left">
                <img src="" alt=""  />
                <p>111 W Main St,Midland,MI 48640  </p>
                <p>989-633-6099</p>
                <div className="footer__left__imagebox">
                    <img src={footerlogo2}  alt=""  />
                    <p> Located at the H Hotel, a Dolce Hotel  </p>

                </div>
                <p>&copy; 2021 One Eighteen. All Rights Reserved</p>



            </div>
            <div className="footer__right">

            </div>

            
        </div>



        </>
    )
}
export default Footer