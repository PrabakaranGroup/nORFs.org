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
var FeatureViewer = require("feature-viewer")
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
      start      : 1923192,
      end        : 2043192,
      chr        : "chr1"
    }
  }

  componentWillMount(){
    let entries = [];
    firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).where("start", ">", 1923192).where("start", "<", 2043192).limit(200)
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

  featureOverview(){

      var ft = new FeatureViewer("0".repeat(this.state.end - this.state.start),
                           '#peptideGraph',
                            {
                                showAxis: true,
                                showSequence: false,
                                brushActive: true, //zoom
                                toolbar:false, //current zoom & mouse position
                                bubbleHelp:false, 
                                zoomMax:10 //define the maximum range of the zoom
                            });

    let objData = JSON.parse(JSON.stringify(this.state.entries).replace(/start/g, "x").replace(/end/g, "y"));
    for(var i = 0; i < objData.length; i++){
       objData[i]['y'] = objData[i]['y']-this.state.start > 10 ? objData[i]['y']-this.state.start : 10 ;
       objData[i]['x'] = objData[i]['x']-this.state.start > 0 ? objData[i]['x']-this.state.start : 0 ;
    }
    console.log(objData);
    ft.addFeature({
      //data: [{"y":1255258,"x":1255223},{"y":7773506,"x":7773456},{"y":11087559,"x":11087515}],
      data: objData,
      name: "nORF",
      className: "nORF", //can be used for styling
      color: "#0F8292",
      type: "rect" // ['rect', 'path', 'line']
    });
  

  }

    componentDidUpdate(prevProps, prevState, snapshot){
      if(this.state.chr !== prevState.chr || this.state.start !== prevState.start || this.state.end !== prevState.end){
        let entries = [];
        firebase.firestore().collection("nORFs").where("chr", "==", this.state.chr).where("start", ">", this.state.start).where("start", "<", this.state.end).limit(200)
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
    let start   = parseInt(searchExp[4]);
    let end     = parseInt(searchExp[7]);
    console.log(chr, start, end);
    console.log(this.state.entries);
    console.log("searchHandle complete");
    this.setState({chr, start, end});
    this.featureOverview();
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
               <Button style={{marginRight: "5px"}} color="info" className="default mb-2" onClick={() => {this.searchHandle();}} >
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
