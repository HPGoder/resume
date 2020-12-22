import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-heading">
                        <h1> Portfolio</h1>
                        <h6>Most of the applications I made used confidential data but here is a quick descirption of what I did.</h6>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-img has-margin-right">
                            <img src={process.env.PUBLIC_URL + 'images/portitem1.jpeg'} alt=""/>
                        </div>
                        <div className="portfolio-description">
                            <h6> Dashboard development</h6>
                            <h1>Data Analysis</h1>
                            <p> Building an dashboard application for Pipeline laying activities.This dashboard help to follow-up the prodcution, 
                                make analysis of the laying rate. This dashboard also help to understand what kind of defects are produced on the 
                                pipeline welds depending on the welding procedure used and the Engineering Critical Assessment Acceptance Criteria.
                            </p>
                            {/* <a href="/#" className="cta"> Views Details</a> */}
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-description has-margin-right">
                            <h6> Predictive Analysis and Machine Learning</h6>
                            <h1>Defectology on Pipeline Welds</h1>
                            <p> 
                                This application is a predictive tools that help to understand what we can expect for the on-goind and in-coming projects.
                                Based on data gathered during past projects I can create model that take into account the welding processes, Automatic Ultrasonic Testing data, 
                                Lying Vessel, Material and grade of the pipe and have an estimation for the future project.
                                This tool also help to understad what we have to focus on before going for production on specific pipelines.
                            </p>
                            {/* <a href="/#" className="cta"> Views Details</a> */}
                        </div>
                        <div className="portfolio-img">
                            <img src={process.env.PUBLIC_URL + 'images/portitem2.jpeg'} alt=""/>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-img has-margin-right">
                            <img src={process.env.PUBLIC_URL + 'images/portitem3.jpeg'} alt=""/>
                        </div>
                        <div className="portfolio-description">
                            <h6> API</h6>
                            <h1>Gathering data coming from offshore</h1>
                            <p> Based on an R&D tools made in colaboration with another Company we are now able to gather data coming direct from AUT system. these data are 
                                gathered into a database and then needs to be put into a REST API for use of other application such as the ones described above.
                                Some application use Artificial intelligence to determine if we can have predictive analysis of defects based on welding parameters.
                            </p>
                            {/* <a href="/#" className="cta"> Views Details</a> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
