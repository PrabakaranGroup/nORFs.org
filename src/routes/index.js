import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import TopNav from "Containers/TopNav";
import Sidebar from "Containers/Sidebar";

import home from "./home";
import data from "./data";
import api from "./api";
import methods from "./methods";
import about from "./about";

import { connect } from "react-redux";

class MainApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match, containerClassnames } = this.props;
    return (
      <div id="app-container" className={containerClassnames}>
        <TopNav history={this.props.history} />
        <Sidebar />
        <main>
          <div className="container-fluid">
            <Switch>
              <Route path={`${match.url}/home`} component={home} />
              <Route path={`${match.url}/data`} component={data} />
              <Route path={`${match.url}/api`} component={api} />
              <Route path={`${match.url}/methods`} component={methods} />
              <Route path={`${match.url}/about`} component={about} />
              <Redirect to="/error" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(MainApp)
);
