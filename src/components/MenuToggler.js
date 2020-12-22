import React, { Component, Fragment } from 'react'

export default class MenuToggler extends Component {

    state = {
        status : ''
    }
    toggleOpened = () => {
        if (this.state.status === ''){
            this.setState({status : ' open'})
        }
        else{
            this.setState({status : ''})
        }
        console.log(this.state)
        }

    render() {
        return (
            <Fragment>
                <div className={"menu-toggler " + this.state.status} onClick={this.toggleOpened}>
                    <div className={"bar half start " + this.state.status}></div>
                        <div className="bar "></div>
                    <div className={"bar half end " + this.state.status}></div>
                </div>
                <nav className={"top-nav" + this.state.status}>
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
            </Fragment>

        )
    }
}
