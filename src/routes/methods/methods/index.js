import React, { Component, Fragment } from "react";
import { Container,Row } from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub2";
import Footer from "Components/LandingPage/SectionFooter";
import SectionPricingTable from "Components/LandingPage/SectionPricingTable";
import SectionPricingComparison from "Components/LandingPage/SectionPricingComparison";
import Offer from "Components/LandingPage/SectionOffer";
import { injectIntl} from 'react-intl';

import { connect } from "react-redux";
import {landingPageMobileMenuToggle,landingPageMobileMenuClose} from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen} = landingPage;
  return { isMobileMenuOpen };
}

export default class extends Component {

  render() {
    return (
       <Fragment>
        <div className="content-container landing-page main-container" 
        style={{marginTop: "-44px", marginLeft: "-58px", marginRight: "-60px", paddingBottom: "100px"}}>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={"Methods" } detail={"reproducible research"}/>
                  <Row>
                    
                  </Row>
                </Container>
              </div>

              <div className="section mb-0" ref={(x) => { this.content = x; }}>
                <Container>
                  <SectionPricingTable/>
                </Container>
              </div>

              <div className="section">
                <Container>
                  <SectionPricingComparison/>
                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <Offer/>
                </Container>
              </div>

            </div>
          </div>
      </Fragment>
    );
  }
}
