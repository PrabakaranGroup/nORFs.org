import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import EntryElement from './entryElement.js';
import firebase from 'firebase';
import './entries.css';
import {firebaseConfig} from 'Constants/defaultValues'
import {
  Label,
  Input,
  FormGroup,
} from "reactstrap";




firebase.initializeApp(firebaseConfig);
const queryString = require('query-string');

export default class extends Component {
    constructor(props) {
    super(props);
    this.state = {
      entries    : [],
      loading    : true,
      start      : 3425241,
      end       : 3625248,
      chr        : "chr1"
    }
  }

  componentWillMount(){
    let entries = [];
    firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).limit(20)
                                            .get().then(function(data) {
      data.forEach(function(doc) {
          entries.push(doc.data());
      })
      }).catch(function(error) {
        console.log("Error retrieving document:", error);
    });
    this.setState({
      entries     : entries,
      loading     : false
    });
    console.log("componentWillMount complete");
  }

    componentDidUpdate(prevProps, prevState, snapshot){
      if(this.state.chr !== prevState.chr || this.state.start !== prevState.start || this.state.end !== prevState.end){
        let entries = [];
        firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).limit(25)
                                                .get().then(function(data) {
          data.forEach(function(doc) {
              entries.push(doc.data());
          })
          }).catch(function(error) {
            console.log("Error retrieving document:", error);
        });
        this.setState({
          entries     : entries,
          loading     : false
        });
        console.log("componentDidUpdate complete");
      }
  }

  searchHandle() {
    console.log(document.getElementById('searchInput').value);
    let search = document.getElementById('searchInput').value;
    let searchExp = /(chr|CHR)*\s*([0-9]{1,2}|X|Y|MT)\s*(-|:)?\s*(\d+)\s*(MB|M|K|)?\s*(-|:|)?\s*(\d+|)\s*(MB|M|K|)?/.exec(search);

    let chr     = 'chr' + searchExp[2];
    let start   = searchExp[4];
    let end    = searchExp[7];
    console.log(chr, start, end);
    console.log(this.state.entries);
    console.log("searchHandle complete");
    this.setState({chr, start, end});
  }


  render() {
    let entryStore = this.state.entries && this.state.entries.map((entry, i) =>
                        <EntryElement
                          key = {'entry' + i}
                          id = {entry.id}
                          chr = {entry.chr}
                          start = {entry.start}
                          end = {entry.end}
                          aaseq = {entry.AAseq}
                          width = {entry.width}
                        />
                        );


    const parsed = queryString.parse(location.search);

    const loader = this.state.loading ? <p> loading </p> : entryStore;

    return (
      <Fragment>
        <Row>
        <Colxx xxs="8" className="middlesSearch">
        <div>
        <Row>
          <Colxx xxs="5" >
            <FormGroup row>
              <Input
                type="text"
                name="searchInput"
                id="searchInput"
                placeholder="chr1:54042-129391"
                onKeyPress={(e) => {(e.key === 'Enter' ? this.searchHandle() : null)}}
                //onChange={(evt) => {this.handleTagChange(evt.target.value);}}             
              />
            </FormGroup>

          </Colxx>
          <Colxx xxs="3">
               <Button color="info" className="default mb-2" onClick={() => {this.searchHandle();}} >
                  search
              </Button>
          </Colxx>
        
          </Row>
          </div>
          </Colxx>
          <Colxx xxs="12">
            {entryStore}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
