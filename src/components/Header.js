import React from 'react'
import discord from '../images/discord.png'
import telegram from '../images/telegram.png'
import instagram from '../images/instagram.png'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitlocation = pathname.split('/')
    return (
        <header>
            <div className="content-container">
                <div className="header">
                    <div className="logo">
                        Saif-OS
                    </div>
                    <div className="links">
                        <Link to="/" className={splitlocation[1] === "" ? "active" : "link"}> <p> Home </p></Link>
                        <Link to="/projects" className={splitlocation[1] === "projects" ? "active" : "link"}> <p> Projects </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> Contact </p></Link>
                    </div>
                    <div className="social-media">
                        <img className="social-1" src={discord} />
                        <img className="social-2" src={telegram} />
                        <img className="social-3" src={instagram} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header