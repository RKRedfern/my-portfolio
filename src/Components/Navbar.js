import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import RKRlogo from '../assets/RKRlogo.png'

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
            
            <img
                src={RKRlogo}
                className="nav-logo"
                alt="Logo"
                onClick={this.scrollToTop}
            />
            <span className="font-link">
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
                    TOP
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
                    BIO
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    TECHNICAL
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
                    PROJECTS
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
                    BLOG
                </Link>
                </li>
            </ul>
            </span>
            </div>
        </nav>
        );
    }
}
