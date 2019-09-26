
import React, { Component } from "react";
import classNames from 'classnames';
import './logistics.css'
import { connect } from 'react-redux';
import { renderTimelineData } from '../../store/logs/action'



class Logistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: ''

        }
    }
    renderTableValues = () => {
        let self = this;
        const { tabledata, data, renderTimelineData, timelinedata } = self.props;
        const { activeIndex } = self.state;
        // if (!data) return [];
        let statusval = data.filter((item) => {
            return item.current_status_code == tabledata
        })
        console.log(tabledata, "statusvalintable")
        console.log(activeIndex, "activeIndex")

        return (

            // data.filter((item) => {
            //     return item.current_status_code == tabledata
            // })
            statusval.map((item, index) => {
                return <tr key={index}
                    onClick={e => {
                        console.log(activeIndex, "setSta")
                        this.setState({
                            activeIndex: index
                        })
                        console.log(activeIndex, "activeIndex")
                        renderTimelineData(item.scan)
                    }}
                    className={(activeIndex == index) ? "rowbackground" : ""}
                >
                    <td>#{item.awbno}</td>
                    <td>{item.carrier}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>USPA</td>
                    <td>{item.pickup_date}</td>
                    <td>{item.time}</td>
                    <td className={(item.current_status == "Delivered") ? " greened " : ""}>{item.current_status}</td>
                </tr>
            })


        )
    }

    render() {
        let self = this;
        const { className, tabledata } = self.props;
        const classes = classNames(className, "table-dashboard");
        console.log(tabledata, "tabledatainlogis")

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
                    {this.renderTableValues()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.list.data,
        tabledata: state.list.tabledata,
        timelinedata: state.list.timelinedata

    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderTimelineData: (payload) => dispatch(renderTimelineData(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logistics);
