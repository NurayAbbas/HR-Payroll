import React from "react";
import Frame427319617 from '../../assets/images/Frame-427319617.png';
import Rectangle13 from '../../assets/images/Rectangle13.png';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

  const navigate = useNavigate();

  const handleLogout = (event) => {

    event.preventDefault();
    localStorage.removeItem('auth');
    navigate('/auth/login');
    
  };

  return (
    <>
      <header>
      <div className="header">
        <div className="head">
          <img src={Frame427319617} alt="TalentCore" />
          <div className="vl"></div>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for jobs, candidates and more.."
          />
        </div>
        <div className="icons">
          <a href="!#" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-gear"></i></a>
          <a href="!#" className="dot" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faBell}/></a>
          <a href="!#" onClick={handleLogout}><img src={Rectangle13} alt="" /></a>
        </div>
      </div>
      <hr />
    </header>
    </>
  );
};

export default Header;
