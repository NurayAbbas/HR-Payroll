import "./Card.css";
import Rectangle from "../../assets/images/Rectangle13.png";

import React, { useState } from "react";


const Card = () => {
  return (
    <>
      <div class="container">
        <header>
          <div class="top">
            <h1>Account Detail</h1>
            <button type="submit" >
              <a href="">
                <i class="fa-solid fa-xmark"></i>
              </a>
            </button>
          </div>
          <div class="profile">
            <div class="pic">
              <img src={Rectangle} alt="" />
              <p>Shofil Fuadi</p>
              <span>Sr. Screening</span>
            </div>
            <div class="contact">
              <div class="first-section">
                <i class="fa-solid fa-envelope"></i>
                <div class="text-sec">
                  <p>EMAIL</p>
                  <span>Shofilfuadi@gmail.com</span>
                </div>
              </div>
              <div class="second-section">
                <i class="fa-solid fa-phone"></i>
                <div class="text-sec">
                  <p>PHONE NUMBER</p>
                  <span>+11 5423-6548</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div class="application">
            <h1>Application Details</h1>
            <div class="specifics">
              <div class="part">
                <i class="fa-solid fa-check"></i>
                <div class="line">
                  <p>Screening</p>
                  <span>March 20, 2023</span>
                </div>
              </div>
              <div class="part second">
                <div class="left-part">
                  <i class="fa-regular fa-hourglass"></i>
                  <div class="line">
                    <p>Design Challenge</p>
                    <span>March 22, 2023</span>
                  </div>
                </div>
                <div class="right-part">
                  <span>Under Review</span>
                </div>
              </div>
              <div class="part">
                <p class="num">3</p>
                <div class="line third ">
                  <p>Interview</p>
                </div>
              </div>
              <div class="part">
                <p class="num">4</p>
                <div class="line fourth">
                  <p>HR Round</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <button type="button">Logout</button>
        </footer>
      </div>
    </>
  );
};

export default Card;
