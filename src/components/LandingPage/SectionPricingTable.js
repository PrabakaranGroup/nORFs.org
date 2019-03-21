import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

export default class SectionPricingTable extends React.Component {

    render() {
        return (
            <Fragment>

                <Row>
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                        <h1>Sources in Detail</h1>
                        <p>
                            How we Acquired our Data
                        </p>
                    </Colxx>
                </Row>

                <Row className="row-eq-height price-container mt-5">
                    <Colxx md="12" lg="4" className="mb-4 price-item">
                        <Card>
                            <CardBody className="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
                                <div className="price-top-part">
                                    <i className="iconsmind-RGB large-icon"></i>
                                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">sORFs</h5>
                                </div>
                                <div className="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
                                    <ul className="list-unstyled">
                                        <p> sORFs.org is a small open reading frame (300 bp or smaller) database with both riboseq as well as mass spec evidence.
                                        currently the sORFs.org db contains over 2.3 million sORF entries. </p>
                                    </ul>
                                    <div>
                                        <NavLink to="www.sorfs.org" className="btn btn-link btn-empty btn-lg">
                                           www.sORFs.org <i className="simple-icon-arrow-right"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>

                    <Colxx md="12" lg="4" className="mb-4 price-item">
                        <Card>
                            <CardBody className="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
                                <div className="price-top-part">
                                    <i className="iconsmind-Empty-Box large-icon"></i>
                                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">openProt</h5>
                                </div>
                                <div className="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
                                    <ul className="list-unstyled">
                                        <p> OpenProt is a database containing a wide range of non-cannonical translated entities 
                                        acquired with mass spec evidence. </p>
                                    </ul>
                                    <div>
                                        <NavLink to="/auth-login" className="btn btn-link btn-empty btn-lg">
                                            www.openProt.org <i className="simple-icon-arrow-right"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>

                    <Colxx md="12" lg="4" className="mb-4 price-item">
                        <Card>
                            <CardBody className="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
                                <div className="price-top-part">
                                    <i className="iconsmind-Magnifi-Glass large-icon"></i>
                                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">OpenCB</h5>
                                </div>
                                <div className="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
                                    <ul className="list-unstyled">
                                        <p> OpenCB itself is a aggregated database that allows to access a variety of datapoints and annotations
                                        from given genomic positions or transcription ids </p>
                                    </ul>
                                    <div>
                                        <NavLink to="/auth-login" className="btn btn-link btn-empty btn-lg">
                                            www.OpenCB.org <i className="simple-icon-arrow-right"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>

                </Row>

            </Fragment>
        );
    }
}

