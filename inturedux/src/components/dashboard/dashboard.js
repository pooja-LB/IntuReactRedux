
import React, { Component } from "react";
import './dashboard.css'
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    renderlength = (type) => {
      return <div></div>
    }

    render() {
        let self = this;
        const status = ["DEL", "INT", "OOD", "DEX", "NFI"];
        const { data } = self.props;
        console.log(data, "dataindashboad")
        return (
            status.map((statusvalue) => {
                return (
                    <div className={"dash-card " + ((statusvalue) ? "active-status" : "")} >
                        <p>{statusvalue}</p>
                        <h4>{this.renderlength(statusvalue)}</h4>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.list.data
    }
}
export default connect(mapStateToProps)(Dashboard);
