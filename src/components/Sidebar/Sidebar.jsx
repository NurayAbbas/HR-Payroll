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
                        <li onClick={() => navigate('/page1')} className={location.pathname === '/page1' ? 'active' : ''}><i class="fa-solid fa-message"></i>Data Karyawan</li>
                        <li onClick={() => navigate('/page2')} className={location.pathname === '/page2' ? 'active' : ''}><i class="fa-solid fa-calendar-days"></i>Gaji dan Tunjangan</li>
                        <li onClick={() => navigate('/page3')} className={location.pathname === '/page3' ? 'active' : ''}><i class="fa-solid fa-paste"></i>Pelatihan</li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
