import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class SectionFeatureCarousel extends React.Component {

    render() {
        return (
            <Row>
                <Colxx xxs="12" className="pl-0 pr-0 mb-5 home-carousel">
                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            768: 2,
                            1200: 3,
                            1440: 4
                        }}
                        controls={false}
                        loop={false}>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        <i className="iconsmind-DNA-2 large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">nORF Database</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">We combined existing ORF databases to create the nORFs.org 
                                        database with 530k unique entries </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        <i className="iconsmind-Line-Chart2 large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">nORF Analysis</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">Each novel open reading frame can further be analysed our 
                                        genome browser and openCB annotations</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        <i className="iconsmind-Communication-Tower2 large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">API integration</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">To allow data pipeline integrations we integrated an open 
                                        API reflecting all information found on nORFs.org</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        <i className="iconsmind-Gears-2 large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">Reproducible Methods</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">In an efford towards open research, all methods to create this 
                                        platform are available on GitHub.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                       
                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}












