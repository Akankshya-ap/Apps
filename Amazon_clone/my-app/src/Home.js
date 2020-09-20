import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {
    return (
        <div className="home">
            <img className="home_img"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        {/* Productt */}
        <div className="home_row">
        <Product
        id="123456"
        title="Diary of a Wimpy Kid"
        price={11,96}
        rating={5}
        image="https://m.media-amazon.com/images/G/01/prime/primeinsider/cozypageturners/wimpy_kid._CB492541440_.jpg"
        />

        <Product
        id="123458"
        title="Nike Air force one Green tee"
        price={12,43}
        rating={5}
        image="https://sneakerfits.com/wp-content/uploads/2018/01/nike-air-force-one-green-tee.jpg"       
         />
        </div>
        
        
        <div className="home_row">
        <Product
        id="1234596"
        title="Mixie"
        price={67,13}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/713rCVYULuL._AC_SX522_.jpg"
        />

        <Product
        id="433456"
        title="Set of Water bottles"
        price={11,24}
        rating={4}
        image="data:image/jpeg;base64,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"
        />
        <Product
        id="323456"
        title="Monalisa painting"
        price={11,230}
        rating={5}
        image="https://cdn.hswstatic.com/gif/eye-in-painting-follow-1a.jpg"
        />
        </div>
        <div className="home_row">
        <Product
        id="223456"
        title="Backpack for journey"
        price={11,39}
        rating={5}
        image="https://images.journeys.com/images/products/1_452376_ZM.JPG"
        />
        </div>
        </div>


    );
}
export default Home
