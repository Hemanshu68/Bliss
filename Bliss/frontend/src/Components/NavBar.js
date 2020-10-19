import React, { Component } from "react";
import { MenuItems } from "../assets/MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/blisslogo.png";
import Drpdown from "./Drpdown";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    toggle = () => this.setState({ opened: !this.state.opened });
    render() {
        const { authenticated } = this.props;
        return (
            <nav className='NavbarItems'>
                <div className='colll'>
                    <a href='/'>
                        <img src={logo} alt='' className='imgg' />
                    </a>
                </div>
                <div className='menu-icon' onClick={this.toggle}>
                    {this.state.opened ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </div>
                <ul
                    className={
                        this.state.opened ? "nav-menu active" : "nav-menu"
                    }
                >
                    {MenuItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link to={item.href} className={item.class}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {authenticated ? (
                    <Drpdown />
                ) : (
                    <Link className='btn btn--outline' to='/login'>
                        Login
                    </Link>
                )}
            </nav>
        );
    }
}
export default NavBar;
