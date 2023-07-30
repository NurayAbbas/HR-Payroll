import "./Dashboard.css";
import image4 from "../../assets/images/image-4.png";
import Rectangle from "../../assets/images/Rectangle.png";
import Rectangle1 from "../../assets/images/Rectangle-1.png";
import Rectangle2 from "../../assets/images/Rectangle-2.png";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div className="page-title">
          <div className="main-top">
            <h1>Dashboard</h1>
            <h2>Welcome to TalentCore!</h2>
            <img src={image4} alt="Dashboard" />
            <div className="latest">
              <select name="">
                <option value="0" selected>
                  Sort By: Latest
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="main-footer">
          <div className="cards">
            <div className="card first">
              <img src={Rectangle} alt="" />
              <div className="text">
                <span>Sr. UX Designer</span>
                <span>Posted 2 days ago</span>
              </div>
              <div className="card-icon">
                <i className="fa-solid fa-arrow-up-long"></i>
              </div>
            </div>
            <div className="card second">
              <img src={Rectangle1} alt="" />
              <div className="text">
                <span>Growth Manager</span>
                <span>Posted 5 days ago</span>
              </div>
              <div className="card-icon">
                <i className="fa-solid fa-arrow-up-long"></i>
              </div>
            </div>
            <div className="card third">
              <img src={Rectangle2} alt="" />
              <div className="text">
                <span>Financial Analyst</span>
                <span>Posted 10 days ago</span>
              </div>
              <div className="card-icon">
                <i className="fa-solid fa-arrow-up-long"></i>
              </div>
            </div>
          </div>
          <h1 className="title">Project</h1>
          <div className="project-boxes">
            <div className="box card-1">
              <div className="card first">
                <img src={Rectangle} alt="" />
                <div className="text">
                  <span>Sr. UX Designer</span>
                  <span>Posted 2 days ago</span>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-up-long"></i>
                </div>
              </div>
              <div className="detailes">
                <p>
                  <i className="fa-solid fa-location-dot"></i>Bengaluru
                </p>
                <p>
                  <i className="fa-solid fa-graduation-cap"></i>3 years exp.
                </p>
              </div>
              <div className="paragraph">
                <div className="contents">
                  <h1>45</h1>
                  <span>applications</span>
                </div>
                <span className="context">25 in last week</span>
              </div>
            </div>
            <div className="box card-2">
              <div className="card second">
                <img src={Rectangle1} alt="" />
                <div className="text">
                  <span>Growth Manager</span>
                  <span>Posted 5 days ago</span>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-up-long"></i>
                </div>
              </div>
              <div className="detailes">
                <p>
                  <i className="fa-solid fa-location-dot"></i>Remote
                </p>
                <p>
                  <i className="fa-solid fa-graduation-cap"></i>2+ years exp.
                </p>
              </div>
              <div className="paragraph">
                <div className="contents">
                  <h1>38</h1>
                  <span>applications</span>
                </div>
                <span className="context">10 in last week</span>
              </div>
            </div>
            <div className="box card-3">
              <div className="card third">
                <img src={Rectangle2} alt="" />
                <div className="text">
                  <span>Financial Analyst</span>
                  <span>Posted 10 days ago</span>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-arrow-up-long"></i>
                </div>
              </div>
              <div className="detailes">
                <p>
                  <i className="fa-solid fa-location-dot"></i>Remote
                </p>
                <p>
                  <i className="fa-solid fa-graduation-cap"></i>2+ years exp.
                </p>
              </div>
              <div className="paragraph">
                <div className="contents">
                  <h1>38</h1>
                  <span>applications</span>
                </div>
                <span className="context">10 in last week</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
