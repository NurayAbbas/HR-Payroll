import "./Page6.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Page from "../../assets/images/page.png";

import Rectangle from "../../assets/images/Rectangle.png";
import Rectangle1 from "../../assets/images/Rectangle-1.png";
import Rectangle2 from "../../assets/images/Rectangle-2.png";

function Page6() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div class="page-title">
          <div class="main-top">
            <h1>
              Employee complaints<i class="fa-regular fa-user"></i>
            </h1>
            <div class="latest">
              <select name="">
                <option value="1" selected>
                  Sort By: Latest
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <div class="links">
          <a href="">All</a>
          <a href="">Accepted</a>
          <a href="">Rejected</a>
        </div>

        <div class="cards">
          <div class="first card">
            <div className="topic">
            <img src={Rectangle} alt="ux" />
            <h3>Submit Complaint</h3>
            </div>
          </div>
          <div class="second card">
           <div className="topic">
           <img src={Rectangle1} alt="rocket" />
            <h3>Complaint History</h3>
           </div>
          </div>
          <div class="third card">
            <div className="topic">
            <img src={Rectangle2} alt="finance" />
            <h3>Information</h3>
            </div>
          </div>
        </div>

        <div class="information">
          <h1>Information</h1>
          <div class="box">
            <div class="image">
              <img src={Page} alt="" />
              <div class="text">
                <h2>Printers</h2>
                <p>How to refill printer ink if...</p>
              </div>
              <div class="icon">
                <a href="https://en.wikipedia.org/wiki/Printer_(computing)" target="_blank">
                  <i class="fa-solid fa-arrow-right" ></i>
                </a>
              </div>
            </div>

            <div class="image">
              <img src={Page} alt="" />
              <div class="text">
                <h2>Internet</h2>
                <p>How to deal with internet that...</p>
              </div>
              <div class="icon">
                <a href="https://en.wikipedia.org/wiki/Internet" target="_blank">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="image">
              <img src={Page} alt="" />
              <div class="text">
                <h2>Projector</h2>
                <p>How do I connect the project...</p>
              </div>

              <div class="icon">
                <a href="https://en.wikipedia.org/wiki/Project" target="_blank">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Page6;
