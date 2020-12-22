import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="top-nav">
                <ul className="nav-list">
                <li>
                    <a href="index.html" className="nav-link"> Home</a>
                </li>
                <li>
                    <a href="#about" className="nav-link"> About</a>
                </li>
                <li>
                    <a href="#services" className="nav-link"> Services</a>
                </li>
                <li>
                    <a href="#portfolio" className="nav-link"> Portfolio</a>
                </li>
                <li>
                    <a href="#experience" className="nav-link"> Experience</a>
                </li>
                <li>
                    <a href="#contact" className="nav-link"> Contact</a>
                </li>
                </ul>
          </nav>
        )
    }
}
