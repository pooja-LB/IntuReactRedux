import React, { Component } from "react";
import { configureStore } from './store/configureStore';
import { connect } from "react-redux";
import './App.css';
import { getData } from './api';
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Timeline from './components/timeline/timeline'
import Logistics from './components/logistics/logistics'


class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.logsdata();
    console.log(this.props.logsdata(), "logsfun")
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="text-center bg-light">
            <Header />
          </div>
        </div>
        <div className="body-content">
          <div className="dashboard">
            <Dashboard />
          </div>

          <div className="logs">
            <div className="timeline">
              <Timeline />
            </div>
            <div className="tabular-data">
              <div className="inner-tabular">
                <Logistics />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    logsdata: () => dispatch(getData())
  }
}


export default connect(null, mapDispatchToProps)(App);
