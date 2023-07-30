import "./Page7.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Ellipse91 from "../../assets/images/Ellipse91.png";
import Ellipse92 from "../../assets/images/Ellipse92.png";
import Ellipse93 from "../../assets/images/Ellipse93.png";
import Ellipse94 from "../../assets/images/Ellipse94.png";
import Ellipse from "../../assets/images/Ellipse9.png";
import Chart from "../../assets/images/Doughnut - Chart.png";

function Page7() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div class="page-title">
          <div class="main-top">
            <h1>
            Employee performance<i class="fa-regular fa-user"></i>
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
        <div class="table">
          <table class="main-table">
            <thead>
              <tr>
                <th>NIK</th>
                <th>Employee name</th>
                <th>Ratings</th>
                <th>Project</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00123</td>
                <td>
                  <img src={Ellipse91} alt="profile" />
                  Davin Putra{" "}
                </td>
                <td>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <p>4.0</p>
                  </div>
                </td>
                <td>Design Challenge</td>
                <td>Sr. UX Designer</td>
              </tr>

              <tr>
                <td>00124</td>
                <td>
                  <img src={Ellipse92} alt="profile" />
                  Amalia Putri
                </td>
                <td>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <p>4.0</p>
                  </div>
                </td>
                <td>Screening</td>
                <td>Financial Analyst</td>
              </tr>

              <tr>
                <td>00125</td>
                <td>
                  <img src={Ellipse93} alt="profile" />
                  Sakanti Dwi
                </td>
                <td>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <p>4.0</p>
                  </div>
                </td>
                <td>HR Round</td>
                <td>Financial Analyst</td>
              </tr>

              <tr>
                <td>00126</td>
                <td>
                  <img src={Ellipse94} alt="profile" />
                  Ria Kusuma
                </td>
                <td>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <p>4.0</p>
                  </div>
                </td>
                <td>Design Challenge</td>
                <td>Sr. UX Designer</td>
              </tr>

              <tr>
                <td>00127</td>
                <td>
                  <img src={Ellipse} alt="profile" />
                  Shofil Fuadi
                </td>
                <td>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <p>4.0</p>
                  </div>
                </td>
                <td>Rejected</td>
                <td>Growth Manager</td>
              </tr>
            </tbody>
          </table>
          <div class="chart">
            {" "}
            <img src={Chart} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
export default Page7;
