import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";

export default class SectionHeroSub extends React.Component {

    componentDidMount() {
        this.onResizeLandingPage()
        window.addEventListener("resize", this.onResizeLandingPage, true);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeLandingPage, true);
    }

    onResizeLandingPage() {
        var rowOffestHome = document.querySelector(".home-row").offsetLeft;
        document.querySelector(".landing-page .section.home").style.backgroundPositionX=rowOffestHome - 252 + "px";
    }

    render() {
        return (
            <Row className="home-row">
                <Colxx xxs="12" xl="5" lg="12">
                    <div className="home-text">
                        <div className="display-1">
                            Methods
                        </div>
                        <p className="white mb-5">
                            nORFs.org is a API aggregation platform that connects information aquired from 3rd party databases and annotation hubs.
                            The main novel open reading frame sources of nORFs.org are the sORFs.org and openCB databases. After a quality control 
                            and filtering process, we generated the 530k entry containing nORF.org database.
                        </p>
                    </div>
                </Colxx>
            </Row>
        );
    }
}
