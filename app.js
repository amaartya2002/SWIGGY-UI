import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
  return (
    <div className="header">
      <div className="img-element">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="app-logo"></img>
      </div>
      <div className="header-links">
        <ul>
          <li>About</li>
          <li>Help</li>
          <li>SignIn</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const ResturantCard = () => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/5d512d98-40e6-436d-b028-b5ccc875f059_77114.ss.jpg" alt="res-img"></img>
      </div>
      <div className="res-card-info">
        <h2>Chinese Wok</h2>
        <p>Chinese, Asian, Tibetan</p>
        <p className="rating">⭐ 4.2 • 30–35 mins • ₹300 for two</p>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="res-body">
      <div className="res-search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  )
}

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent />)