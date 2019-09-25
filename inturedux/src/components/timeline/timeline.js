
import React, { Component } from "react";
import classNames from 'classnames';
import './timeline.css'

class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let self = this;
        const { className } = self.props;
        const classes = classNames(className, "dash");
        return (
            <div className={classes}>
                <div className="timelines">
                    <ul className="status">
                        <li className="timeline-list">
                            <div className="col-md-8 clearfix">
                              status deleverd
                            </div>
                            <div className="col-md-4 clearfix">
                              2.01.15
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        );
    }
}


export default Timeline;
