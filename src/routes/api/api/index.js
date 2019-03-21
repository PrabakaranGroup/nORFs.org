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
      <Colxx xxs="12" className="mb-4" >
            <Card style={{margin: "-15px"}}>

             <CardBody>
            <h3 className="mb-4"> The nORFs.org API </h3>
            <p> To accomodate programmatic access to the nORFs.org database and functionality, the following API
            commands can be used to fetch data. </p>
            </CardBody>
            </Card>
      </Colxx>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Card>
              <CardBody>

                <Fragment>
                  <div className="border">
                    <Button
                      block
                      color="link"
                      className="text-left"
                      onClick={() => this.toggleAccordion(0)}
                      aria-expanded={this.state.accordion[0]}
                    >
                      Fetch Regions
                    </Button>
                    <Collapse isOpen={this.state.accordion[0]}>
                      <div className="p-4">
                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                    </Collapse>
                  </div>
                  <div className="border">
                    <Button
                      block
                      color="link"
                      className="text-left"
                      onClick={() => this.toggleAccordion(1)}
                      aria-expanded={this.state.accordion[1]}
                    >
                      Acquire Genetic Details
                    </Button>
                    <Collapse isOpen={this.state.accordion[1]}>
                      <div className="p-4">
                        2. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                    </Collapse>
                  </div>
                  <div className="border">
                    <Button
                      block
                      color="link"
                      className="text-left"
                      onClick={() => this.toggleAccordion(2)}
                      aria-expanded={this.state.accordion[2]}
                    >
                      Get Genetic Environment
                    </Button>
                    <Collapse isOpen={this.state.accordion[2]}>
                      <div className="p-4">
                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                    </Collapse>
                  </div>
                   <div className="border">
                    <Button
                      block
                      color="link"
                      className="text-left"
                      onClick={() => this.toggleAccordion(3)}
                      aria-expanded={this.state.accordion[3]}
                    >
                      Fetch Annotations
                    </Button>
                    <Collapse isOpen={this.state.accordion[3]}>
                      <div className="p-4">
                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                        lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </div>
                    </Collapse>
                  </div>
                </Fragment>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
