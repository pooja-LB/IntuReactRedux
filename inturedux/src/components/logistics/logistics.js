
import React, { Component } from "react";
import classNames from 'classnames';
import './logistics.css'

class Logistics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className, "table-dashboard");

        return (
            <table className={classes} cellPadding="5" cellSpacing="5">
                <thead>
                    <tr>
                        <td>AWB NUMBER</td>
                        <td>TRANSPORTER</td>
                        <td>SOURCE</td>
                        <td>DESTINATION</td>
                        <td>BRAND</td>
                        <td>START DATE</td>
                        <td>ETD</td>
                        <td>STATUS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>js</td>
                        <td>df</td>
                        <td>df</td>
                        <td>df</td>
                        <td>df</td>
                        <td>df</td>
                        <td>df</td>
                        <td>df</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Logistics;
