import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
                <section className="about" id="about">
                    <div className="container">
                        <div className="profile-img">
                            <img src={process.env.PUBLIC_URL + 'images/patrol.jpg'} alt=""/>
                        </div>
                        <div className="about-details">
                            <div className="about-heading">
                                <h1> About</h1>
                                <h6> Myself</h6>
                            </div>
                            <p> 
                            Hi ! I'm a 25 years old engineer passionate by web development, coding and algorithm. I've been working
                            for an offshore and subsea construction Company since October 2018 and made a couple of dashboard applications.
                            This dashboard aims to made analysis of the indications found by Automatic Ultrasonic Systems on welds performed
                            on pipelines. 
                            I've always been very attracted by coding, developing and I'm currently looking for a job in this area.
                            Oh and also, I made this picture with Blender 3D, this is a shot of the environment I made for a small company
                            back in the UK. This boat is the Patrol 1 !
                            </p>

                            <div className="social-media">
                                <ul className="nav-list">
                                <li>
                                    <a href="/#" className="icon-link">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a href="/#" className="icon-link">
                                        <i className="fab fa-twitter-square"></i>
                                    </a>
                                    <a href="/#" className="icon-link">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}
