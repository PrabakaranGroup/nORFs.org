import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";

import {
  Row,
  Card,
  CardBody,
  Button,
  Collapse,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default class extends Component {

    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };


    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [true, false, false, false]
    };
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));
    this.setState({
      accordion: state
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      <Fragment>
      
      <Row>
      <Colxx xxs="8" className="mb-4" >
            <Card >
             <CardBody>
            <h3 className="mb-4"> nORFs.org Database Access </h3>
            <p> To accomodate programmatic access to the nORFs.org database and functionality, we provide all our data via direct download, UCSC track (annotationhub) and API. 
              The nORFs.org database has a open source MIT license and grants every user the right to download, edit, modify or redistribute only requires to include the original license file.</p>
            <p>All coordinate are in GRCh38. </p>
            <p> See https://github.com/PrabakaranGroup/nORF-data-prep for the fully reproducible code to generate these files.</p>
<br></br>

            </CardBody>
            </Card>
      </Colxx>

        <Colxx xxs="4" className="mb-4" > 
      <Card><CardBody>  <h3> Database Download </h3> 
      <br></br>
      
      <p>    nORFs_DB 1.1 (.gtf): 
        <a href='https://firebasestorage.googleapis.com/v0/b/phoenix-6686b.appspot.com/o/nORFsDB.1.1.gtf?alt=media&token=a3e41fe4-b1e5-4002-9384-b9d48bd5e25d' download>
          <b> Download </b>
        </a>  </p>
        <p>    nORFs_DB 1.1 (.bed): 
        <a href='https://firebasestorage.googleapis.com/v0/b/phoenix-6686b.appspot.com/o/nORFsDB.1.1.bed?alt=media&token=044a4750-6704-425c-988c-fe1bbc38d3b6' download>
          <b> Download </b>
        </a>  </p>
        <p>    nORFs_DB Classification 1.1 (.gtf): 
        <a href='https://firebasestorage.googleapis.com/v0/b/phoenix-6686b.appspot.com/o/nORFsDB.1.1.classification.tsv?alt=media&token=2c60916b-92ab-41a0-abe1-7519ccd1552c' download>
          <b> Download </b>
        </a>  </p>
        <p>    nORFs_DB 1.1 UCSC track  (.bed): 
        <a href='https://firebasestorage.googleapis.com/v0/b/phoenix-6686b.appspot.com/o/nORFs_1.1_UCSC.bed?alt=media&token=deb7fa57-6036-4132-9414-35337c3a0309' download>
          <b> Download </b>
        </a>  </p>
        </CardBody></Card>
      </Colxx> 
      </Row>
      
      </Fragment>
    );
  }
}
