import "./Page5.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Page5() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div class="main-part">
          <div class="main-top">
            <h1>Recruitment</h1>
            <div class="latest">
              <span>
              Add Locker<i class="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
        </div>

        <table class="main-table">
          <thead>
            <tr>
              <th>Vacancy Details</th>
              <th>Information</th>
              <th>Skill</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Vacancies : Web Design</p>
                <p>Education : D3</p>
                <p>Valid until : 30 July 2023</p>
                <p>Need : 3 arang</p>
              </td>
              <td>Male min 20 years old</td>
              <td>
                <ol>
                  <li>Web Developer (Must)</li>
                  <li>Analyst Data (Must)</li>
                  <li>Android Programmer</li>
                </ol>
              </td>
              <td>
                <input type="button" value="Edit" />
                <br />
                <input type="button" value="Wipe" />
              </td>
            </tr>

            <tr>
              <td>
                <p>Vacancies : Graphic Design</p>
                <p>Education : D3</p>
                <p>Valid until : 24 July 2023</p>
                <p>Need : 2 arang</p>
              </td>
              <td class="row-text">Fresh Graduate</td>
              <td>
                <ol>
                  <li>Critical Thinking (Must)</li>
                  <li>Think Creatively (Must)</li>
                </ol>
              </td>
              <td>
                <input type="button" value="Edit" />
                <br />
                <input type="button" value="Wipe" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
export default Page5;
