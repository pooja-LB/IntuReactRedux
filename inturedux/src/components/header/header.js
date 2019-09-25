
import React, { Component } from "react";
import classNames from 'classnames';
import './header.css'
import profile from '../../assets/profile.svg';
import logo from '../../assets/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className);

        return (
            <div className={classes}>
                <nav className="navbar navbar-expand-lg navbar-light navbar_main heading">
                    <a className="navbar-brand" href="#">
                        <img src={logo} style={{ width: '2em' }} />
                        <span>Intugine</span>
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Brands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Transporters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link profile-logo">
                                    <img src={profile} alt="Profile" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <span >
                                    <i className="glyphicon glyphicon-chevron-down"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
