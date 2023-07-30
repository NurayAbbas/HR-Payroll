import "./Page4.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Page4() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
  <div class="page-title">
    <div class="main-top">
      <h1>Evaluation</h1>
      <div class="latest">
        <select name="">
            <option value="1" selected>Sort By: Latest</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
      </div>
    </div>
  </div>
</main>
    </>
  );
}

export default Page4;
