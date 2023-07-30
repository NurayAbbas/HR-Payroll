import React from "react";
import { useLocation, useNavigate } from "react-router-dom";



const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();


    return (
        <>
            <aside>
                <div class="sidebar">
                    <ul class="list">
                        <li onClick={() => navigate('/')} className={location.pathname === '/' ? 'active' : ''}><i class="fa-solid fa-table-columns"></i>Dashboard</li>
                        <li onClick={() => navigate('/page1')} className={location.pathname === '/page1' ? 'active' : ''}><i class="fa-solid fa-message"></i>Employee data</li>
                        <li onClick={() => navigate('/page2')} className={location.pathname === '/page2' ? 'active' : ''}><i class="fa-solid fa-calendar-days"></i>Salaries and allowances</li>
                        <li onClick={() => navigate('/page3')} className={location.pathname === '/page3' ? 'active' : ''}><i class="fa-solid fa-paste"></i>Training</li>
                        <li onClick={() => navigate('/page4')} className={location.pathname === '/page4' ? 'active' : ''}><i class="fa-solid fa-user-group"></i>Evaluation</li>
                        <li onClick={() => navigate('/page5')} className={location.pathname === '/page5' ? 'active' : ''}><i class="fa-solid fa-database"></i>Recruitment and Selection</li>
                        <li onClick={() => navigate('/page6')} className={location.pathname === '/page6' ? 'active' : ''}><i class="fa-solid fa-user"></i>Employee complaints</li>
                        <li onClick={() => navigate('/page7')} className={location.pathname === '/page7' ? 'active' : ''}><i class="fa-regular fa-file-lines"></i>Employee performance</li>
                        <li onClick={() => navigate('/page8')} className={location.pathname === '/page8' ? 'active' : ''}><i class="fa-regular fa-chart-bar"></i>Occupational Health and Safety</li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
