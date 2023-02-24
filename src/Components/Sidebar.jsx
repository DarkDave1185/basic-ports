import icon from '../images/icon.png'
import dashboard from '../images/dashboard.png'
import landing from '../images/landing.png'
import news from '../images/news.png'
import performance from '../images/performance.png'
import support from '../images/support.png'
import transaction from '../images/transaction.png'
import money from '../images/money.png'
import avatar from '../images/avatar.png'

import './Sidebar.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(false);
    const handleCloseMenu = ()=>{
        setCloseMenu(!closeMenu)
    };

    return (
        <div className={closeMenu === false ? "sidebar-base" : "sidebar-base active"}>
            <div className="icon-base">
                <img className="icon"  src={icon} alt="icon" />
                <h2 className="icon-title">BaseD.</h2>
            </div>
            <div className="menu-base" >
                <div className="menu-trigger"></div>
                <div className="menu" onClick={()=>{handleCloseMenu();}}></div>
            </div>
            <div className="profile-base">
                <img className="profile-image" src={avatar} alt="profile" />
                <div className="profile-contents">
                    <p className="profile-name">Hello, Dave!</p>
                    <p className="profile-email">david.gs.dawkins@gmail.com</p>
                </div>
            </div>
            <div className="menu-contents">
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <img className={location.pathname === "/" ? "active" : ""} src={dashboard} alt=""/>
                        <a href="/">Dashboard</a>
                    </li>
                    <li className={location.pathname === "/landing" ? "active" : ""}>
                        <img className={location.pathname === "/landing" ? "active" : ""} src={landing} alt="landing" />
                        <a href="/landing">Landing</a>
                    </li>
                    <li className={location.pathname === "/news" ? "active" : ""}>
                        <img className={location.pathname === "/news" ? "active" : ""} src={news} alt="news" />
                        <a href="/news">News</a>
                    </li>
                    <li className={location.pathname === "/performance" ? "active" : ""}>
                        <img className={location.pathname === "/performance" ? "active" : ""} src={performance} alt="performance" />
                        <a href="/performance">Performance</a>
                    </li>
                    <li className={location.pathname === "/support" ? "active" : ""}>
                        <img className={location.pathname === "/support" ? "active" : ""} src={support} alt="support" />
                        <a href="/support">Support</a>
                    </li>
                    <li className={location.pathname === "/transactions" ? "active" : ""}>
                        <img className={location.pathname === "/transactions" ? "active" : ""} src={money} alt="transactions" />
                        <a href="/transactions">Transaction</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar