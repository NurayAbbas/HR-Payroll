import './Page1.css';
import Ellipse9 from '../../assets/images/Ellipse9.png';
import Ellipse91 from '../../assets/images/Ellipse91.png';
import Ellipse92 from '../../assets/images/Ellipse92.png';
import Ellipse93 from '../../assets/images/Ellipse93.png';
import Ellipse94 from '../../assets/images/Ellipse94.png';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function Page1() {



  return (
    <>
    <Header/>
    <Sidebar/>
    <main>
      <div className="page-title">
        <div className="main-top">
          <h1>Data Karyawan</h1>
          <div className="latest">
            <select name="">
              <option value="0" selected>Sort By: Latest</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>
      <table className="main-table">
        <thead className="t-head">
          <tr>
            <th>Nama Karyawan</th>
            <th>NIK</th>
            <th>Status Karyawan</th>
            <th>Jabatan</th>
            <th>Tanggal Masuk</th>
            <th>
              APPLICATION DATE
              <div className="arrow-icons">
                <i className="fa-solid fa-sort-up"></i>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="t-body">
          <tr>
            <td>
              <img src={Ellipse91} alt="profile" />Davin Putra F
            </td>
            <td>00123</td>
            <td>Karyawan Tetap</td>
            <td>Sr. UX Designer</td>
            <td>12/02/20</td>

            <td>
              <div className="specific">
              <FontAwesomeIcon icon={faPaperclip} />
                <p>3 files</p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Ellipse92} alt="profile" />Amalia putri
            </td>
            <td>00124</td>
            <td>Karyawan Tetap</td>
            <td>Financial Analyst</td>
            <td>04/01/20</td>

            <td>
              <div className="specific">
              <FontAwesomeIcon icon={faPaperclip} />
                <p>3 files</p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Ellipse93} alt="profile" />Sakanti Dwi
            </td>
            <td>00125</td>
            <td>Karyawan Tetap</td>
            <td>Financial Analyst</td>
            <td>05/03/20</td>

            <td>
              <div className="specific">
              <FontAwesomeIcon icon={faPaperclip} />
                <p>3 files</p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Ellipse94} alt="profile" />Ria Kusuma
            </td>
            <td>00126</td>
            <td>Karyawan Tetap</td>
            <td>Sr. UX Designer</td>
            <td>24/12/21</td>

            <td>
              <div className="specific">
              <FontAwesomeIcon icon={faPaperclip} />
                <p>3 files</p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Ellipse9} alt="profile" />Shofil Fuadi
            </td>
            <td>00127</td>
            <td>Karyawan Tetap</td>
            <td>Growth Manager</td>
            <td>18/02/22</td>

            <td>
              <div className="specific">
                <FontAwesomeIcon icon={faPaperclip} />
                <p> 3 files</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    </>
  );
}

export default Page1;