import React from 'react';
import '../css/Header.css';
import headerimage from '../image/header-1.png';



function Header(){
    return(
        <>
        <div className="header" >
            <div className="header__container"  data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">
                <img src={headerimage} alt="Restaurants"   />
                <div className="header__container__center">
                    <a href="#"> FOOD & DRINK  </a>
                    <a href="#">HAPPENINGS  </a>
                    <a href="#"> PRIVATE EVENTS  </a>
                    <a href="#"> GALLERY  </a>


                </div>
                <a href="#"> BOOK A TABLE    </a>
 
            </div>

        </div>



        </>
    )
}


export default Header