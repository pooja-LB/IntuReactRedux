
import React, { Component } from "react";
import classNames from 'classnames';
import './timeline.css'
import { renderTimelineData } from "../../store/logs/action";
import { connect } from 'react-redux';


class Timeline extends Component {
    constructor(props) {
        super(props);
    }
    renderTimelineData = () => {
        let self = this;
        const { timelinedata } = self.props;
        console.log(timelinedata, "timelinedatain")
        if (!timelinedata) return [];
        return (
            timelinedata.map((item, index) => {
                console.log(item, "itemmap")
                return (
                    <li key={index} className="timeline-list" >
                        <div className="col-md-8 clearfix">
                            {item.status_detail}
                        </div>
                        <div className="col-md-4 clearfix">
                            {item.time}
                        </div>
                    </li >
                )
            })
        )
    }

    render() {
        let self = this;
        const { className, timelinedata } = self.props;
        const classes = classNames(className, "dash");
        return (
            <div className={classes}>
                <div className="timelines">
                    { !timelinedata ? (<div></div>) :
                        (<ul className="status">
                            {this.renderTimelineData()}
                        </ul>)
                    }

                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timelinedata: state.list.timelinedata
    }
}

export default connect(mapStateToProps)(Timeline);

