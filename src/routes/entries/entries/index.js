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
      chr        : "",
    }
  }

  searchHandle() {
    console.log(document.getElementById('exampleTextGrid').value);
    let search = document.getElementById('exampleTextGrid').value;
    let searchExp = /(chr|CHR)*\s*([0-9]{1,2}|X|Y|MT)\s*(-|:)?\s*(\d+)\s*(MB|M|K|)?\s*(-|:|)?\s*(\d+|)\s*(MB|M|K|)?/.exec(search);

    let chr     = "chr" + searchExp[2];
    let start   = searchExp[4];
    let stop    = searchExp[7]
    console.log(chr, start, stop);
    this.setState({chr, start, stop});
  }

  componentDidMount(){
    let entries = [];
    firebase.firestore().collection("nORFs").get().then(function(data) {
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
  render() {
    const dataStore = [{id: "a34AS", chr: "12", start: "41232", stop: "512312s"}, {id: "a34AS", chr: "12", start: "41232", stop: "512312d"}];
    let entryStore = this.state.entries.map((entry, i) =>
                        <EntryElement
                          key = {'entry' + i}
                          id = {entry.id}
                          chr = {entry.chr}
                          start = {entry.start}
                          stop = {entry.stop}
                        />
                        );

    let placeholder = <div>
            <EntryElement chr={"12"} start={"12"} stop={"12"} id={"asjdkas"} />
            <EntryElement id={"a34AS"} chr={"9"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"X"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"11"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"15"} start={"41232"} stop={"5123123"} />
            </div> ;

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
                onKeyPress={(e) => {(e.key === 'Enter' ? this.searchHandle() : null)}}
                //onChange={(evt) => { this.handleTagChange(evt.target.value); }}             
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
