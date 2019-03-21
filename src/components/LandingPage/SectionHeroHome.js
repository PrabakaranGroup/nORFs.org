import React from "react";
import { NavLink } from "react-router-dom";
import { Row } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

export default class SectionHeroHome extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <Colxx xxs="12" className="d-block d-md-none">
          <img
            alt="mobile hero"
            className="mobile-hero"
            src="/assets/img/landing-page/home-hero-mobile.png"
          />
        </Colxx>

        <Colxx xxs="12" xl="4" lg="5" md="6">
          <div className="home-text">
            <div className="display-1">
              Welcome
        
            </div>
            <p className="white mb-5">
              nORFs.org is an open access novel open reading frame platform that provides aggregated information of databases such as openProt, sORFs and openCB. 
            </p>
          
          </div>
        </Colxx>

        <Colxx
          xxs="12"
          xl={{ size: 7, offset: 1 }}
          md="6"
          lg="7"
          className="d-none d-md-block"
        >
          <img alt="hero" src="/assets/img/landing-page/home-hero.png" />
        </Colxx>
      </Row>
    );
  }
}
