import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=" "
        />
        <div className="home_row">
          <Product
            title="soundcore by Anker Space Q45 Adaptive Active Noise Cancelling Headphones, Reduce Noise by Up to 98%, 50H Playtime, App Control, LDAC Hi-Res Wireless Audio, Comfortable Fit, Clear Calls, Bluetooth 5.3"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51zqZRMrWgL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Phlips 5400 Fully Automatic Espresso Machine with LatteGo, EP5447/94"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Mfg5HFgbS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
            price={34.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Silver (4th Generation)"
            price={1099.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/8124D1qS2UL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
