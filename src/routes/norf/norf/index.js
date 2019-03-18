import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
const queryString = require('query-string');
import BrowserPile from "./browser";

export default class extends Component {
      constructor(props) {
    super(props);
    this.state = {
      loading : true,
      apiData : [] 
    }
  }

 componentDidMount() {
    const parsed = queryString.parse(location.search);
    fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/feature/transcript/search?assembly=grch38&limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json&region=' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end)
    .then(response =>  response.json())
    .then(apiData => {
       //console.log(JSON.stringify(apiData))
       //do your logic here       
       //let person = apiData.results
       this.setState({ apiData: apiData }); //this is an asynchronous function
    })
}

  render() {
    console.log(this.state.apiData);
    let apiTemp = JSON.stringify(this.state.apiData);
    console.log(apiTemp);
    let apiStore = <p>{apiTemp}</p>;




    return (
      <Fragment>
      <BrowserPile />
        <Row>
          <Colxx xxs="12">
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
