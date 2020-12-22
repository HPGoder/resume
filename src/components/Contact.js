import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-heading"> 
                        <h1> Contact Me </h1>
                        <h6>Contact me please please please</h6>
                    </div>
                    <form action="">
                        <label htmlFor="name"> Name </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." required/>

                        <label htmlFor="email"> Email </label>
                        <input type="eamil" id="email" name="email" placeholder="Enter your email..." required/>

                        <label htmlFor="service"> Services: </label>
                        <select name="service" id="service"> 
                            <option value="" > Webdesign</option>
                            <option value="" > Webdev</option>
                            <option value="" > Webdesign / dev </option>
                        </select>
                        <label htmlFor="subject"> Subject: </label>
                        <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                        <input type="submit" value ="submit"/>
                    </form>
                </div>
            </section>
        )
    }
}
