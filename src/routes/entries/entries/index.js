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
      start      : "",
      stop       : "",
      chr        : "14"
    }
  }

  componentWillMount(){
    let entries = [];
    firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).get().then(function(data) {
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
  }

    componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.chr !== prevState.chr){
    let entries = [];
    firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).get().then(function(data) {
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
    }
  }

  searchHandle() {
    console.log(document.getElementById('exampleTextGrid').value);
    let search = document.getElementById('exampleTextGrid').value;
    let searchExp = /(chr|CHR)*\s*([0-9]{1,2}|X|Y|MT)\s*(-|:)?\s*(\d+)\s*(MB|M|K|)?\s*(-|:|)?\s*(\d+|)\s*(MB|M|K|)?/.exec(search);

    let chr     = searchExp[2];
    let start   = searchExp[4];
    let stop    = searchExp[7];
    console.log(chr, start, stop);
    console.log(this.state.entries);
    this.setState({chr, start, stop});
  }


  render() {
    let entryStore = this.state.entries.map((entry, i) =>
                        <EntryElement
                          key = {'entry' + i}
                          id = {entry.id}
                          chr = {entry.chr}
                          start = {entry.start}
                          stop = {entry.stop}
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
                name="exampleTextGrid"
                id="exampleTextGrid"
                placeholder="chr12:540422-129391239"
                onKeyPress={(e) => {(e.key === 'Enter' ? this.searchHandle():null)}}
                //onChange={(evt) => {this.handleTagChange(evt.target.value);}}             
              />
            </FormGroup>

          </Colxx>
          <Colxx xxs="3">
               <Button color="info" className="default mb-2" onClick={() => {this.searchHandle(); }} >
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
