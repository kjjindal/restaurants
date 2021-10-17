import React from 'react';
import '../css/Banner.css';
import banner1 from '../image/main1.jpg';
import bottomright from '../image/bottomright.jpg';

const imagestyle={
    background:`linear-gradient(to right,rgba(1,1,1,0.8),transparent,rgba(216,64,39,0.6)),url(${banner1})`,
    backgroundPosition:'center',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    height:'700px',
    marginRight:"10px",
    position:"relative"

}

function Banner(){
    return (
        <>
        <div className="banner">
            <div className="banner__image" style={imagestyle} >

                <div className="banner__image__text" data-aos="fade-left" data-aos-duration="1000">
                    <h1>  AN AMERICAN TAVERN   </h1>
                    <div className="banner__image__text__bottom">
                    <div className="bitb__line">

</div>
<p>  MIDLAND,MI</p>
                    </div>
         
                </div>
              

            </div>
            <div className="banner__bottom">
                <div className="banner__bottom__left">
                    <h2 className="bbl__first" > Restaurant  </h2>
                    <h1 className="bbl__second"> AMERICAN CUISINE,
  </h1>
<h1 className="bbl__second">MID-CENTURY DESIGN    </h1>
<div className="bbl__third">

</div>
<p className="bbl__fourth"> 
At ONe eighteen, we are proud to celebrate the history of Midland Michigan, showcase our place downtown and reinforce our commitment to the well being and growth of our community.

With a focus on genuine service, we look to connect family, friends and visitors through an authentic food and beverage experience.
    
    
     </p>
     <h2 className="bbl__fivth">   THE KITCHEN’S OPEN   </h2>
     <p className="bbl__six"> Tues-Sat: 5pm - 10pm  </p>
     <p className="bbl__six">    Sun-Mon: Closed  </p>
  


                </div>
                <div className="banner__bottom__right">
                    <img src={bottomright} data-aos="fade-up" data-aos-duration="800"  alt="restautant" />

                </div>

            </div>
            




        </div>



        </>
    )
}


export default Banner