import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import HomeHero from "Components/LandingPage/SectionHeroHome";
import HomeFeatureCarousel from "Components/LandingPage/SectionFeatureCarousel";
import Screens from "Components/LandingPage/SectionFeaturesScreens";
import { injectIntl} from 'react-intl';

import { connect } from "react-redux";

export default class extends Component {
  
  constructor(props) {
    super(props);
  }

  onMobileMenuToggle(){
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu(){
    this.props.landingPageMobileMenuClose()
    return true;
  }
  
  componentDidMount() {
    scrollToComponent(this["landing-page"], { align: 'top', duration: 10});
  }

  render() {
    return (
      <Fragment>
        <div className={"landing-page"} style={{marginTop: "-44px", marginLeft: "-58px", marginRight: "-60px"}}>
          <div className="main-container">
            <div className="content-container">
              <div className="section home" style={{padding: "110px", paddingTop: "0px"}}>
                <HomeHero />
                <HomeFeatureCarousel />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
