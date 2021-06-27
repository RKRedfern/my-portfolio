import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
            <img
                //src={logo}
                className="nav-logo"
                alt="Logo"
                onClick={this.scrollToTop}
            />
            <ul className="nav-items">
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Top
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="bio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Bio
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="technical"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Technical 
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                    Blog
                </Link>
                </li>
            </ul>
            </div>
        </nav>
        );
    }
}
