import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            data works
            <br/><br/><br/>
            this will be the search section!
            <br/><br/><br/>
                <NavLink
                  to="/entries?id=23"
                >
                - button -
                </NavLink>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
