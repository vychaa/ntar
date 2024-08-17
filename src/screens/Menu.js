import React from "react";
import "./Menu.css";
import addimage from "../assets/add.png";
import giftIcon from "../assets/gifticon.png";
import tuitionfeeIcon from "../assets/tuitionfee.png";
import atstoreIcon from "../assets/atstore.png";
const Menu = () => {
  return (
    <div>
      <div className="full-div">
        <p className="pay">Pay</p>
        <div className="potsclub-div">
          <div className="full-div2">
            <p className="graynames">Pots</p>
            <div className="comingsoon">
              <p className="comingsoon-text">Coming soon</p>
            </div>
          </div>

          <div className="full-div2">
            <p className="graynames">Club</p>
            <div className="comingsoon">
              <p className="comingsoon-text">Coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="horizontalLine" />
      <div className="main-div">
        <div className="nextimg">
          <img className="addimg" src={addimage} alt="Girl" />
          <p className="earnmin">
            Earn a minimum of 3% for every <br></br>swipe or tap of your card.
          </p>
        </div>

        <div>
          <div className="icon-container">
            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Bills</p>
            </div>

            <div className="icontext-div3">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Rent</p>
            </div>

            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Credit Card</p>
            </div>
          </div>

          <div className="icon-container">
            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">At store</p>
            </div>

            <div className="icontext-div1">
              <img className="gificon" src={tuitionfeeIcon} alt="Girl" />
              <p className="icon-text">Tuition Fee</p>
            </div>

            <div className="icontext-div2">
           <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">QR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
