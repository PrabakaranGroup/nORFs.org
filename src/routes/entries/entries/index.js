import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import EntryElement from './entryElement.js';
import firebase from 'firebase';
import {firebaseConfig} from 'Constants/defaultValues'

firebase.initializeApp(firebaseConfig);
const queryString = require('query-string');

export default class extends Component {
    constructor(props) {
    super(props);
    this.state = {
      entries    : [],
      loading    : true,
    }
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
    let store = this.state.entries && this.state.entries;
    console.log(store);
    let entryStore = this.state.loading ? store.map((entry, i) =>
                        <EntryElement
                          key = {'entry' + i}
                          id = {entry.id}
                          chr = {entry.chr}
                          start = {entry.start}
                          stop = {entry.stop}
                        />
                        ) : <p> {this.state.loading} </p>;

    const parsed = queryString.parse(location.search);

    const loader = this.state.loading ? <p> loading </p> : entryStore;

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <p>id = {parsed.id}</p>
            <p>start = {parsed.start}</p>
            <p>stop = {parsed.stop}</p>
            <div>
            <EntryElement chr={"12"} start={"12"} stop={"12"} id={"asjdkas"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />
            <EntryElement id={"a34AS"} chr={"12"} start={"41232"} stop={"5123123"} />

            </div>
            <br/><br/><br/>
            <div>{entryStore}</div>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
