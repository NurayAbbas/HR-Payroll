import './Page3.css';
import Ellipse9 from '../../assets/images/Ellipse9.png';
import Ellipse91 from '../../assets/images/Ellipse91.png';
import Ellipse92 from '../../assets/images/Ellipse92.png';
import Ellipse93 from '../../assets/images/Ellipse93.png';
import Ellipse94 from '../../assets/images/Ellipse94.png';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';


function Page3() {



  return (
    <>
    <Header/>
    <Sidebar/>
    <main>
      <div className="page-title">
        <div className="main-top">
          <h1>Training</h1>
          <div className="latest">
            <input type="search" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <table className="main-table">
        <thead className="t-head">
          <tr>
            <th className="head-arrows">
              <p>Training code</p>
              <div className="arrow-icons">
                <i className="fa-solid fa-sort-up"></i>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </th>
            <th className="head-arrows">
              <p>Employee name</p>
              <div className="arrow-icons second">
                <i className="fa-solid fa-sort-up"></i>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </th>
            <th className="head-arrows">
              <p>NIK</p>
              <div className="arrow-icons third">
                <i className="fa-solid fa-sort-up"></i>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </th>
            <th>Topic</th>
            <th>Teacher</th>
            <th>Training date</th>
            <th>Taken</th>
          </tr>
        </thead>
        <tbody className="t-body">
          <tr>
            <td>DSG001</td>
            <td>
              <img src={Ellipse91} alt="profile" />Davin Putra F
            </td>
            <td>00123</td>
            <td>Basic Human Resources Management</td>
            <td>Sr. UX Designer</td>
            <td>12/02/23</td>

            <td>
              <div className="specific">
                <span>Yes</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>FA001</td>
            <td>
              <img src={Ellipse92} alt="profile" />Amalia putri
            </td>
            <td>00124</td>
            <td>HR for non HR Management</td>
            <td>Financial Analyst</td>
            <td>04/01/23</td>

            <td>
              <div className="specific">
                <span>Yes</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>FA002</td>
            <td>
              <img src={Ellipse93} alt="profile" />Sakanti Dwi
            </td>
            <td>00125</td>
            <td>Human Resources Business Partner</td>
            <td>Financial Analyst</td>
            <td>05/03/23</td>

            <td>
              <div className="specific">
                <span>Yes</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>DSG002</td>
            <td>
              <img src={Ellipse94} alt="profile" />Ria Kusuma
            </td>
            <td>00126</td>
            <td>Negotiation Skill for HR</td>
            <td>Sr. UX Designer</td>
            <td>24/12/23</td>

            <td>
              <div className="specific">
                <span>Yes</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>HR001</td>
            <td>
              <img src={Ellipse9} alt="profile" />Shofil Fuadi
            </td>
            <td>00127</td>
            <td>Recruitment & Selection Staff</td>
            <td>Growth Manager</td>
            <td>18/02/23</td>

            <td>
              <div className="specific negative">
                <span>No</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    </>
  );
}

export default Page3;