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
                            About
                        </div>
                        <p className="white mb-5">
                            nORFs.org was created in the frame of a BBSRC rotation project at the Cambridge Department 
                            of Genetics with the Prabakaran Group. Feel free to contact us either via email or GitHub for issues
                            or suggestions of any kind. The platform code and all steps to create the database are available on Github.
                        </p>
                    </div>
                </Colxx>
            </Row>
        );
    }
}
