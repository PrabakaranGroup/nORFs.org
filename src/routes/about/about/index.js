import React, { Component, Fragment } from "react";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionConnect from "Components/LandingPage/SectionConnect";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";
import {
  Container, Row, Card } from "reactstrap";
import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";


export default class extends Component {
  render() {
    return (
      <Fragment>
         <div className="content-container landing-page main-container" 
         style={{marginTop: "-44px", marginLeft: "-58px", marginRight: "-60px", paddingBottom: "100px"}}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={"title"} detail={"subtitle"} />
                </Container>

                

              </div>

        
          </div>

          
                <Colxx xxs="12" lg={{ size: 6, offset: 0 }} className="side-bar">
                <h2>Contact Us</h2>

                <p>Version 1.0, year 2020. <br/> Please cite norfs.org in your publication and please contact us for any questions regarding the database and for permissions to use.</p> 


                <Card style={{padding: "20px"}}>
                      <Row>
                      <Colxx xxs="10" lg="4">
                        <Card style={{padding: "20px", height: "100%"}}>
                          <p className="text-primary mb-2">Address</p>
                          <p className="mb-0">Department of Genetics</p>
                          <p className="mb-0">20 Downing Pl</p>
                          <p className="mb-5">CB2 3EJ, Cambridge</p>
                        </Card>
                      </Colxx>


                      <Colxx xxs="10" lg="4">
                        <Card style={{padding: "20px", height: "100%"}}>
                          <p className="text-primary mb-2">Research Lab</p>
                          <p className="mb-0">Prabakaran Group</p>
                          <p className="mb-0">https://prabakaran-group.org</p>
                        </Card>
                      </Colxx>

                      <Colxx xxs="10" lg="4">
                      <Card style={{padding: "20px", height: "100%"}}>
                      <p className="text-primary mb-2">Maintainer</p>
                      <p className="mb-0">Sudhakaran Prabakaran</p>
                      <p className="mb-5">sp339@cam.ac.uk</p>

                      </Card>
                      </Colxx>

                      </Row>
         </Card>

                    </Colxx>
      </Fragment>
    );
  }
}
