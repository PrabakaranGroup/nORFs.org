import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

const queryString = require('query-string');

export default class extends Component {
  render() {
    const parsed = queryString.parse(location.search);
    console.log(parsed.id);
    console.log(parsed.start);
    console.log(parsed.stop);

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <p>id = {parsed.id}</p>
            <p>start = {parsed.start}</p>
            <p>stop = {parsed.stop}</p>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
