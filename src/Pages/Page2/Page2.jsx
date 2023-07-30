import "./Page2.css";
import Ellipse9 from "../../assets/images/Ellipse9.png";
import Ellipse91 from "../../assets/images/Ellipse91.png";
import Ellipse92 from "../../assets/images/Ellipse92.png";
import Ellipse93 from "../../assets/images/Ellipse93.png";
import Ellipse94 from "../../assets/images/Ellipse94.png";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Page2() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div class="page-title">
          <div class="main-top">
            <h1>Salaries and allowances</h1>
            <div class="latest">
              <span>
              Add Data
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
          </div>
        </div>

        <table class="main-table">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Employee name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Transport allowance</th>
              <th>Meal allowance</th>
              <th>Piece</th>
              <th>Total salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00123</td>
              <td>
                <img src={Ellipse91} alt="profile" />
                Davin Putra F
              </td>
              <td>Sr. UX Designer</td>
              <td>Rp.5.000.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 300.000</td>
              <td>-</td>
              <td>Rp.5.600.000</td>
            </tr>

            <tr>
              <td>00124</td>
              <td>
                <img src={Ellipse92} alt="profile" />
                Amalia Putri
              </td>
              <td>Financial Analyst</td>
              <td>Rp.6.000.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 300.000</td>
              <td>-</td>
              <td>Rp.6.600.000</td>
            </tr>

            <tr>
              <td>00125</td>
              <td>
                <img src={Ellipse93} alt="profile" />
                Sakanti Dwi
              </td>
              <td>Financial Analyst</td>
              <td>Rp.6.000.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 100.000</td>
              <td>Rp.6.500.000</td>
            </tr>

            <tr>
              <td>00126</td>
              <td>
                <img src={Ellipse94} alt="profile" />
                Ria Kusuma
              </td>
              <td>Sr.UX Designer</td>
              <td>Rp.5.000.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 300.000</td>
              <td>-</td>
              <td>Rp.5.600.000</td>
            </tr>

            <tr>
              <td>00127</td>
              <td>
                <img src={Ellipse9} alt="profile" />
                Shofil Fuadi
              </td>
              <td>Growth Manager</td>
              <td>Rp.4.500.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 300.000</td>
              <td>Rp. 200.000</td>
              <td>Rp.4.900.000</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Page2;
