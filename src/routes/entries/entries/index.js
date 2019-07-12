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
import {Label, Input, FormGroup} from "reactstrap";
import TextField from '@material-ui/core/TextField';



firebase.initializeApp(firebaseConfig);
const queryString = require('query-string');

export default class extends Component {
    constructor(props) {
    super(props);
    this.state = {
      entries    : [],
      searchfield: '',
      start      : 1,
      end        : 1230122,
      chr        : "chr1",
      update     : 1,
      loading    : true,
    }
  }


  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.unsubscribe = firebase.firestore().collection("nORFs")
      .where("chr", "==", this.state.chr).where("start", ">", this.state.start).where("start", "<", this.state.end)
      .limit(20)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let entries = [];
          snapshot.forEach(doc =>
            entries.push({ ...doc.data() }),
          );

          this.setState({
            entries: entries.reverse(),
            loading: false,
          });
        } else {
          this.setState({ entries: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
  }






  searchHandle1(input) {
    let search = input;
    let searchExp = /(chr|CHR)*\s*([0-9]{1,2}|X|Y|MT)\s*(-|:)?\s*(\d+)\s*(MB|M|K|)?\s*(-|:|)?\s*(\d+|)\s*(MB|M|K|)?/.exec(search);

    let chr     = 'chr' + searchExp[2];
    let start   = parseInt(searchExp[4]);
    let end     = parseInt(searchExp[7]);
    console.log(chr, start, end);
    console.log(this.state.entries);
    console.log("searchHandle complete");
    this.setState({chr, start, end});
    this.onListenForMessages();
   
  }

  convertArrayOfObjectsToCSV(args) {
      var result, ctr, keys, columnDelimiter, lineDelimiter, data;
      data = args.data || null;
      if (data == null || !data.length) {return null;}
      columnDelimiter = args.columnDelimiter || ',';
      lineDelimiter = args.lineDelimiter || '\n';
      keys = Object.keys(data[0]);
      result = '';
      result += keys.join(columnDelimiter);
      result += lineDelimiter;
      data.forEach(function(item) {
          ctr = 0;
          keys.forEach(function(key) {
              if (ctr > 0) result += columnDelimiter;

              result += item[key];
              ctr++;
          });
          result += lineDelimiter;
      });
      return result;
  }

  updateSearchfield(input) {
    console.log(input);
    this.setState({searchfield : input});
  }

  exportEntries() {
          let data, filename, link;
          let csv = this.convertArrayOfObjectsToCSV({
              data: this.state.entries
          });
          if (csv == null) return;
          filename = 'export.csv';
          if (!csv.match(/^data:text\/csv/i)) {
              csv = 'data:text/csv;charset=utf-8,' + csv;
          }
          data = encodeURI(csv);
          link = document.createElement('a');
          link.setAttribute('href', data);
          link.setAttribute('download', filename);
          link.click();
  }

  render() {
    let entryStore =  this.state.entries.map((entry) =>
                        <EntryElement
                          key   = {'entry' + entry.id}
                          id    = {entry.id}
                          chr   = {entry.chr}
                          start = {entry.start}
                          end   = {entry.end}
                          aaseq = {entry.AAseq}
                          width = {entry.width}
                        />
                        );

    return (
      <Fragment>
        <Row>
        <Colxx xxs="8" className="middlesSearch">
        <div>
        <Row>
          <Colxx xxs="5" >
             <TextField
                style={{ margin: 8 }}
                placeholder="chr1:881023-8"
                fullWidth
                autoFocus
                id="searchInput"
                onChange={(event) => this.setState({searchfield: event.target.value})}
                onKeyPress={(e) => {(e.key === 'Enter' ? this.searchHandle1(event.target.value) : null)}}
              />
          </Colxx>

          <Colxx xxs="3">
              <Button style={{marginRight: "5px"}} color="info" className="default mb-2" onClick={() => {this.searchHandle1(this.state.searchfield);this.setState({update: this.state.update+1})}} >
                  search
              </Button>
              {this.state.entries.length != 0 ? 
              <Button color="warning" className="default mb-2" onClick={() => {this.exportEntries();}} >
                  export
              </Button>
              : null}
          </Colxx>
             
        
       </Row>
    
          </div>
          </Colxx>
                <Colxx xxs="12">
          <div id="peptideGraph"/>
        </Colxx>
          <Colxx xxs="12">
            {entryStore}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
