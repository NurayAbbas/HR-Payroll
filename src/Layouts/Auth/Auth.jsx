import React from "react";
import Group1 from '../../assets/images/Group-1.png';
import Ellipse3 from '../../assets/images/Ellipse-3.png';
import Frame427319617 from '../../assets/images/Frame-427319617.png';
import { Outlet } from "react-router-dom";


const Auth = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="imgs">
              <img className="ellipse-1" src={Group1} alt="" />
              <img className="ellipse-2" src={Ellipse3} alt="" />
            </div>
            <div className="header-logo">
              <img src={Frame427319617} alt="TalentCore" />
            </div>
          </div>
          <Outlet />
        </div>
      </header>
    </>
  );
};

export default Auth;
