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
        id="123456"
        title="Diary of a Wimpy Kid"
        price={11,96}
        rating={5}
        image="https://m.media-amazon.com/images/G/01/prime/primeinsider/cozypageturners/wimpy_kid._CB492541440_.jpg"
        />
        </div>
        </div>
    );
}

export default Home
