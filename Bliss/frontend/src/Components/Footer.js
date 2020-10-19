import React from "react";
import "./footer.css";
import logo from "../assets/blisslogo.png";

const Footer = () => {
    return (
        <footer>
            <div fluid style={{ backgroundColor: "#161718" }}>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='roww'>
                            <div className='coll'>
                                <img src={logo} alt='' className='imgg' />
                            </div>
                            <div className='coll'>
                                <p>Coprigyht © Bliss</p>
                            </div>
                            <div className='coll'>
                                <a href='/team' className='taemmi'>
                                    Team
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
