import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="copyright">
                <div className="up" id="up">
                    <i className="fas fa-chevron-up"></i>
                </div>
                <p> &copy; 2020 Henri-Pierre Goder</p>
            </footer>
        )
    }
}
