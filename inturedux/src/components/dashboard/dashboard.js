
import React, { Component } from "react";
import './dashboard.css'
import { connect } from 'react-redux';
import { renderTableData } from '../../store/logs/action'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'DEL'
        }
    }
    renderlength = (type) => {
        let self = this;
        const { data } = self.props;
        console.log(data, "dataindashboadlen")
        if (!data) return [];
        console.log(data, "nulldata")
        let result = data.filter((item) => {
            return item.current_status_code == type
        }).length
        return result
    }

    render() {
        let self = this;
        const status = ["DEL", "INT", "OOD", "DEX", "NFI"];
        const { renderTableData } = self.props;
    //   if  renderTableData('DEL')

        return (
            status.map((statusvalue) => {
                return (
                    <div                       
                        onClick={e => {
                            console.log("asaS", statusvalue)
                            renderTableData(statusvalue)
                            this.setState({
                                activeItem: statusvalue
                            })
                            
                        }} 
                        className={(this.state.activeItem === statusvalue) ? "dash-card active-status" : "dash-card"} >
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

const mapDispatchToProps = dispatch => {
    return {
        renderTableData: (payload) => dispatch(renderTableData(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
