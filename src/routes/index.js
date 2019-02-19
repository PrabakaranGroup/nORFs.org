import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import TopNav from "Containers/TopNav";
import Sidebar from "Containers/Sidebar";

import home from "./home";
import data from "./data";
import entries from "./entries";
import norf from "./norf";
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
              <Route path='/home' component={home} />
              <Route path='/data' component={data} />
              <Route path='/entries' component={entries} />
              <Route path='/norf' component={norf} />
              <Route path='/api' component={api} />
              <Route path='/methods' component={methods} />
              <Route path='/about' component={about} />
              <Redirect to='/home' />
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
