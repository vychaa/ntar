import React from "react";
import "../screens/Website.css";
import Ntargif from "../assets/ntar.gif.gif";
import mobileimage from "../assets/mobile.gif.png";
import card1image from "../assets/Background.webp";
import card2image from "../assets/background2.webp";
import iconImage from "../assets/icon.png";
import sideImage from "../assets/side.png";
import smallicon from "../assets/small-icon.png";
import scrollcoingif from "../assets/scrollcoin.gif";
import Reversegif from "../assets/reversescroll.gif";
import sectioncard1 from "../assets/5sectioncard1.png";
import treeicon from "../assets/Tree.png";
import orgphone from "../assets/orgphone.png";
import whitearrow from "../assets/whitebackarrows.png";
import orgntar from "../assets/orgntar.gif";
import yellowside from "../assets/yellowside.png";
import coinsfloating from "../assets/coinsfloating.gif";
import scanner from "../assets/scanner.png";
import playstore from "../assets/playstorebutton.png";
import googlepay from "../assets/googlepay.png";
import anotherImage from "../assets/anothermage.png";

const Website = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="blue-container">
        <div>
          <p className="bluebox-text">
            Your NTAR<br></br>story begins here!
          </p>
          <div className="ntar-begins2">
            <div className="magicmoney-text ">
              <p className="magic-lets">Let's </p>
              <img className="gif2-yellow" src={Ntargif} alt="Girl" />
              <p className="Ntar">
                Ntar
                <br />
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="blue-mobile-imge">
          <img className="card-image-con" src={mobileimage} alt="Girl" />
        </div>
      </div>

      <div className="contentboxwhite-section2">
        <div className="oneapp-text">
          <p style={{ margin: "0px" }}>
            One App,<br></br>Takes You Further
          </p>
        </div>
        <p className="longtext">
          NTAR you can spend, save, shop and manage your finances from a single
          platform.<br></br> Experience top-notch security and flexibility.
        </p>

        <div className="cards-div">
          <div className="card-container">
            <img className="card-image" src={card1image} alt="Girl" />
            <p className="card-text">SPEND</p>
            <p className="card-sub-text">
              Pay all your<br></br>Bills in one<br></br>easy app
            </p>
            <div className="downset">
              <img className="iconpng" src={iconImage} alt="Girl" />
              <p className="ntarpay">NTAR Pay</p>
              <div className="button-set">
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </div>
            </div>
          </div>

          <div className="card-container">
            <img className="card-image" src={card2image} alt="Girl" />
            <p className="card-text">SAVE</p>
            <p className="card-sub-text">
              Making your<br></br> financial planning <br></br>simple and
              <br></br>
              effective.
            </p>
            <div className="downset">
              <img className="iconpng" src={iconImage} alt="Girl" />
              <p className="ntarpay">
                NTAR Pots
                <div className="comingsoon-nav">
                  <p className="comingsoon-text-nav">Coming soon</p>
                </div>
              </p>

              <div className="button-set">
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </div>
            </div>
          </div>

          <div className="card-container">
            <img className="card-image" src={card1image} alt="Girl" />

            <p className="card-text">SHOP</p>

            <p className="card-sub-text">
              Pay all your<br></br>Bills in one<br></br>easy app
            </p>
            <div className="downset">
              <img className="iconpng" src={iconImage} alt="Girl" />
              <p className="ntarpay">
                NTAR Pay
                <div className="comingsoon-nav">
                  <p className="comingsoon-text-nav">Coming soon</p>
                </div>
              </p>
              <div className="button-set">
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-coin-white">
        <p className="finance-heading">
          Your Finance at<br></br>
          Your Fingertips
        </p>
        <div className="total-scroll-container">
          <div className="total-column-div">
            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay Bills</p>
                  <p className="sub-head">
                    Stay on top of your payments with just a few taps.
                  </p>
                </div>
              </div>

              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay Credit Card Bills</p>
                  <p className="sub-head">
                    Pay your credit card bills on time, every time, with ease.
                  </p>
                </div>
              </div>
            </div>
            <br className="web-br" />
            <br className="web-br" />

            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay Rent</p>
                  <p className="sub-head">
                    Seamlessly pay your rent with NTAR—quick,<br></br> secure,
                    and hassle-free.
                  </p>
                </div>
              </div>

              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay at Store</p>
                  <p className="sub-head">
                    Make in-store payments effortlessly with NTAR<br></br>{" "}
                    convenient transactions.
                  </p>
                </div>
              </div>
            </div>
            <br className="web-br" />
            <br className="web-br" />

            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay Tuition Fee</p>
                  <p className="sub-head">
                    NTAR makes tuition fee payments a breeze.
                  </p>
                </div>
              </div>
              <br className="web-br" />
              <br className="web-br" />
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Pay QR</p>
                  <p className="sub-head">
                    Scan and pay effortlessly with NTAR's QR feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img className="scrolling-gif" src={scrollcoingif} alt="Girl" />
            <p className="inside-img-text">NTAR Pay</p>
          </div>
          <div className="scroll-section-ex-button">
            <button className="exButton">
              Explore
              <img className="arrowicon-2" src={sideImage} alt="Girl" />
            </button>
          </div>
        </div>
      </div>
      <br className="web-br" />
      <br className="web-br" />

      <div className="scroll-coin-white">
        <div className="total-scroll-container">
          <div className="image-div">
            <img className="scrolling-gif-2" src={Reversegif} alt="Girl" />
          </div>
          <div className="total-column-div-2">
            <p className="perfect-heading">Perfect Features for You!</p>
            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Split the Damn Bill</p>
                  <p className="sub-head">
                    Easily divide expenses with friends and settle up without
                    the hassle
                  </p>
                </div>
              </div>

              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Shared Bill Reminder</p>
                  <p className="sub-head">
                    Never miss a payment and stay organized with ease.
                  </p>
                </div>
              </div>
            </div>
            <br className="web-br" />
            <br className="web-br" />

            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Personalised Notifications</p>
                  <p className="sub-head">
                    Stay informed with NTAR's personalized
                    <br /> notifications—get timely updates tailored to your
                    <br /> preferences
                  </p>
                </div>
              </div>

              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Charts</p>
                  <p className="sub-head">
                    Track spending, savings, and budgets with clear,
                    <br /> interactive graphics.
                  </p>
                </div>
              </div>
            </div>
            <br className="web-br" />
            <br className="web-br" />

            <div className="row-1">
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Multiple Frequencies</p>
                  <p className="sub-head">
                    Set up recurring payments daily, weekly, or monthly
                    <br /> to fit your needs.
                  </p>
                </div>
              </div>
              <br className="web-br" />
              <br className="web-br" />
              <div className="first-leftside-row">
                <div>
                  <img
                    src={smallicon}
                    alt="Scanner"
                    style={{ width: 40, height: 40, color: "black" }}
                  />
                </div>
                <div className="head-sub-column">
                  <p className="main-head">Calendar View </p>
                  <p className="sub-head">
                    NTAR's calendar view—track payments, due dates,
                    <br /> and budgeting all in one easy-to-navigate calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-section-ex-button-2">
            <button className="exButton">
              Explore
              <img className="arrowicon-2" src={sideImage} alt="Girl" />
            </button>
          </div>
        </div>
      </div>

      <div className="contentboxwhite-5">
        <div className="section-5">
          <p className="moneygrow">
            Money Doesn’t<br></br> grow on
            <img className="treeicon" src={treeicon} alt="Girl" />
            trees.<br></br> it Grows on{" "}
            <img className="ntarsmallgif" src={Ntargif} alt="Girl" /> NTAR
          </p>
          <div className="middle-align">
            <div className="section-cards">
              <img className="sectioncard" src={sectioncard1} alt="Girl" />
              <div className="comingsoon-section">
                <p className="comingsoon-text-section">Coming soon</p>
              </div>
              <p className="pots">Pots</p>
              <p className="create-custom">
                Create custom funds for specific goals and track your progress
                effortlessly.
              </p>
            </div>

            <div className="section-cards">
              <img className="sectioncard" src={sectioncard1} alt="Girl" />
              <div className="comingsoon-section">
                <p className="comingsoon-text-section">Coming soon</p>
              </div>
              <p className="pots">Club</p>
              <p className="create-custom">
                Enjoy special rewards, offers, and community perks tailored just
                for you.
              </p>
            </div>

            <div className="section-cards">
              <img className="sectioncard" src={sectioncard1} alt="Girl" />
              <div className="comingsoon-section">
                <p className="comingsoon-text-section">Coming soon</p>
              </div>
              <p className="pots">Shop</p>
              <p className="create-custom">
                Enjoy special rewards, offers, and community perks tailored just
                for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contentboxorange-6">
        <div className="org-div">
          <img className="orgphone" src={orgphone} alt="Girl" />
          <div className="button-div">
            <p className="org-text">
              Build your Business <br></br>on NTAR BIZZ
            </p>
          </div>
        </div>
        <div className="new-one">
          <button className="letsbutton">
            LET’S NTAR
            <img className="whitearrow" src={whitearrow} alt="Girl" />
          </button>
        </div>
      </div>

      <div className="contentboxblack-7">
        <div className="ntar-begins2">
          <div className="money-div">
            <p className="money">Money </p>
            <img className="gif-yellow" src={Ntargif} alt="Girl" />
            <p className="magic">
              Magic.
              <br />
            </p>
            <br></br>
          </div>
        </div>
        <p className="ntarway">NTAR this way.</p>
        <div className="letsntarsweet-div">
          <button className="letsbutton-2">
            LET’S NTAR
            <img className="whitearrow" src={whitearrow} alt="Girl" />
          </button>
        </div>
        <div className="black-w-gif">
          <img className="float-gif" src={coinsfloating} alt="Girl" />
        </div>
      </div>

      <div className="blue-container">
        <div className="footer-middle-text">
          <p className="yellow-blue-text">Have a Question?</p>
          <p className="white-blue-text">We Answer You!</p>
        </div>

        <div className="row-container">
          <div className="store-buttons">
            <img className="qrcode" src={scanner} alt="Girl" />
            <div className="two-buttons">
              <img className="playstore-button" src={playstore} alt="Girl" />
              <img className="playstore-button" src={googlepay} alt="Girl" />
            </div>
          </div>
          <div className="gray-box"></div>
          <div className="after-horizontal">
            <hr className="horizontalLine-1" />
            <div className="container">
              <div className="header">
                <div className="category">
                  <p className="header-text">INSIDE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">NTAR Pay</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Pots</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Club</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">COMPANY</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Why NTAR</p>
                      <p className="subcategory">About US</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Careers</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">We are Hiring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">EXPLORE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Deals</p>
                      <p className="subcategory">Stories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-container">
          <div className="addressmail-bar">
            <div className="icon-svg">
              <div className="address-div">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9998 13.2998C12.5602 13.2998 13.108 13.1336 13.574 12.8223C14.0399 12.511 14.403 12.0685 14.6175 11.5507C14.8319 11.033 14.8881 10.4633 14.7787 9.91371C14.6694 9.3641 14.3996 8.85925 14.0033 8.463C13.6071 8.06675 13.1022 7.7969 12.5526 7.68757C12.003 7.57825 11.4333 7.63436 10.9156 7.84881C10.3978 8.06325 9.95534 8.42641 9.64401 8.89235C9.33268 9.35829 9.1665 9.90609 9.1665 10.4665C9.1665 11.2179 9.46502 11.9386 9.99637 12.4699C10.5277 13.0013 11.2484 13.2998 11.9998 13.2998ZM10.994 23.089C11.1257 23.2217 11.2824 23.3271 11.455 23.3991C11.6277 23.471 11.8128 23.508 11.9998 23.508C12.1869 23.508 12.372 23.471 12.5447 23.3991C12.7173 23.3271 12.874 23.2217 13.0057 23.089L18.7998 17.2806C20.1456 15.9356 21.0622 14.2216 21.4338 12.3555C21.8054 10.4895 21.6152 8.55511 20.8873 6.79714C20.1594 5.03918 18.9265 3.53657 17.3445 2.47938C15.7625 1.42219 13.9025 0.85791 11.9998 0.85791C10.0971 0.85791 8.23716 1.42219 6.65519 2.47938C5.07322 3.53657 3.84031 5.03918 3.11241 6.79714C2.3845 8.55511 2.1943 10.4895 2.56587 12.3555C2.93743 14.2216 3.85407 15.9356 5.19984 17.2806L10.994 23.089ZM5.24234 9.8148C5.33913 8.80474 5.66028 7.82905 6.18233 6.95896C6.70438 6.08887 7.41416 5.34636 8.25984 4.78563C9.37079 4.05619 10.6708 3.66754 11.9998 3.66754C13.3289 3.66754 14.6289 4.05619 15.7398 4.78563C16.5799 5.34444 17.2856 6.08245 17.8064 6.94659C18.3271 7.81074 18.6499 8.77954 18.7515 9.78333C18.8531 10.7871 18.731 11.8009 18.394 12.7519C18.0569 13.7029 17.5134 14.5673 16.8023 15.2831L11.9998 20.0856L7.19734 15.2831C6.48549 14.5743 5.94065 13.7156 5.60246 12.7697C5.26427 11.8237 5.14125 10.8143 5.24234 9.8148ZM21.9165 26.3331H2.08317C1.70745 26.3331 1.34711 26.4824 1.08144 26.7481C0.81576 27.0137 0.666504 27.3741 0.666504 27.7498C0.666504 28.1255 0.81576 28.4859 1.08144 28.7515C1.34711 29.0172 1.70745 29.1665 2.08317 29.1665H21.9165C22.2922 29.1665 22.6526 29.0172 22.9182 28.7515C23.1839 28.4859 23.3332 28.1255 23.3332 27.7498C23.3332 27.3741 23.1839 27.0137 22.9182 26.7481C22.6526 26.4824 22.2922 26.3331 21.9165 26.3331Z"
                    fill="white"
                  />
                </svg>
                <p className="address">
                  H.No. 5-5-165/2/TF, Plot no. 4, 3rd Floor, Vanasthali<br></br>
                  Hills Vanastalipuram Hayathnagar K.V.Rangareddy TG 500070 IN
                </p>
              </div>
              <div className="mail-div">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.3335 0.666504H3.66683C2.1085 0.666504 0.847663 1.9415 0.847663 3.49984L0.833496 20.4998C0.833496 22.0582 2.1085 23.3332 3.66683 23.3332H26.3335C27.8918 23.3332 29.1668 22.0582 29.1668 20.4998V3.49984C29.1668 1.9415 27.8918 0.666504 26.3335 0.666504ZM24.9168 20.4998H5.0835C4.30433 20.4998 3.66683 19.8623 3.66683 19.0832V6.33317L13.4985 12.4815C14.4193 13.0623 15.581 13.0623 16.5018 12.4815L26.3335 6.33317V19.0832C26.3335 19.8623 25.696 20.4998 24.9168 20.4998ZM15.0002 10.5832L3.66683 3.49984H26.3335L15.0002 10.5832Z"
                    fill="white"
                  />
                </svg>
                <p className="mail">hello@ntar.com</p>
              </div>
            </div>
          </div>

          <div className="after-horizontal-2">
            <hr className="horizontalLine-1" />
            <div className="container">
              <div className="header2">
                <div className="category-2">
                  <p style={{ textWrap: "nowrap" }} className="header-text">
                    GET IN TOUCH
                  </p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Contact Us</p>
                      <p className="subcategory">Complaint</p>
                    </div>
                  </div>
                </div>
                <div className="category-3">
                  <p className="header-text">IN SIGHTS</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Guide</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                      <p className="subcategory">FAQ</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Community</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-4">
                  <p className="header-text">LEGAL</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Privacy Policy</p>
                      <p className="subcategory">Terms & Conditions</p>
                      <p className="subcategory">Cookie Policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-last">
          <p className="mail-down">
            Copyright ©️ 2020 NTAR Private Limited. All Rights Reserved.
          </p>
          <div className="social-media">
            <div className="insta">
              <p style={{ margin: "0px" }}>
                INSTAGRAM
                <img className="explorearrow" src={sideImage} alt="Girl" />
              </p>
            </div>

            <div className="insta">
              <p style={{ margin: "0px" }}>
                FACEBOOK
                <img className="explorearrow" src={sideImage} alt="Girl" />
              </p>
            </div>

            <div className="insta">
              <p style={{ margin: "0px" }}>
                TWITTER
                <img className="explorearrow" src={sideImage} alt="Girl" />
              </p>
            </div>

            <div className="insta">
              <p style={{ margin: "0px" }}>
                LINKEDIN
                <img className="explorearrow" src={sideImage} alt="Girl" />
              </p>
            </div>

            <div className="insta">
              <p style={{ margin: "0px" }}>
                YOUTUBE
                <img className="explorearrow" src={sideImage} alt="Girl" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="sub-footer">
          <img className="qrcode" src={scanner} alt="Girl" />
          <div className="two-buttons">
            <img className="playstore-button" src={playstore} alt="Girl" />
            <img className="playstore-button" src={googlepay} alt="Girl" />
          </div>
        </div>
        <div className="sub-footer" style={{ background: "blue" }}>
          <div className="after-horizontal">
            <hr className="horizontalLine-1" />
            <div className="container">
              <div className="header">
                <div className="category">
                  <p className="header-text">INSIDE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">NTAR Pay</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Pots</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Club</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">COMPANY</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Why NTAR</p>
                      <p className="subcategory">About US</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Careers</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">We are Hiring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">EXPLORE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Deals</p>
                      <p className="subcategory">Stories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="sub-footer">
          <img className="qrcode" src={scanner} alt="Girl" />
          <div className="two-buttons">
            <img className="playstore-button" src={playstore} alt="Girl" />
            <img className="playstore-button" src={googlepay} alt="Girl" />
          </div>
        </div>
        <div className="sub-footer" style={{ background: "blue" }}>
          <div className="after-horizontal-2">
            <hr className="horizontalLine-1" />

            <div className="header2">
              <div className="category-2">
                <p style={{ textWrap: "nowrap" }} className="header-text">
                  GET IN TOUCH
                </p>
                <div className="subcategories">
                  <div className="subcategory-container">
                    <p className="subcategory">Contact Us</p>
                    <p className="subcategory">Complaint</p>
                  </div>
                </div>
              </div>
              <div className="category-3">
                <p className="header-text">IN SIGHTS</p>
                <div className="subcategories">
                  <div className="subcategory-container">
                    <div className="pots-comingsoon-button">
                      <p className="subcategory">Guide</p>
                      <div className="comingsoon-section-footer">
                        <p className="comingsoon-text-small">Coming soon</p>
                      </div>
                    </div>
                    <p className="subcategory">FAQ</p>
                    <div className="pots-comingsoon-button">
                      <p className="subcategory">Community</p>
                      <div className="comingsoon-section-footer">
                        <p className="comingsoon-text-small">Coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-4">
                <p className="header-text">LEGAL</p>
                <div className="subcategories">
                  <div className="subcategory-container">
                    <p className="subcategory">Privacy Policy</p>
                    <p className="subcategory">Terms & Conditions</p>
                    <p className="subcategory">Cookie Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
