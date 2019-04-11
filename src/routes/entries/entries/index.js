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
      start      : 1255123,
      end        : 1255358,
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

    let objData = this.state.entries.length > 1 ? JSON.parse(JSON.stringify(this.state.entries).replace(/start/g, "x").replace(/end/g, "y")) : [{"AAseq":"MQPLLTRSSTC","chr":"chr1","y":1255258,"gene_id":"GENEENST00000347370","id":"0nqjH1","source":"sORFs.org","x":1255223,"strand":"-","transcript_sequence":"TTGCAGCCTTTGCTTACACGGTCAAGTACGTGCTGA","type":"sORFs","width":36,"level":0},{"AAseq":"MLPLAVIEDFSRHKIK","chr":"chr1","y":7773506,"gene_id":"GENEENST00000470357","id":"01cnH8","source":"sORFs.org","x":7773456,"strand":"+","transcript_sequence":"CTGCTGCCACTGGCAGTAATCGAAGACTTCAGCAGACACAAAATCAAGTAG","type":"sORFs","width":51,"level":0},{"AAseq":"MPDANFYSDGRLHH","chr":"chr1","y":11087559,"gene_id":"GENEENST00000376936","id":"0p2jH1","source":"sORFs.org","x":11087515,"strand":"-","transcript_sequence":"CTGCCTGATGCAAATTTCTACTCGGACGGAAGACTTCATCATTGA","type":"sORFs","width":45,"level":0},{"AAseq":"MTLSSLAAT","chr":"chr1","y":23077261,"gene_id":"GENEENST00000400181","id":"04cmH1","source":"sORFs.org","x":23077232,"strand":"+","transcript_sequence":"ATGACTTTGAGTTCACTGGCAGCCACCTGA","type":"sORFs","width":30,"level":0},{"AAseq":"MRACGGSRS","chr":"chr1","y":23798715,"gene_id":"GENEENST00000617979","id":"0r24H1","source":"sORFs.org","x":23798686,"strand":"-","transcript_sequence":"CTGAGAGCCTGCGGCGGGTCCAGGAGCTGA","type":"sORFs","width":30,"level":0},{"AAseq":"MEEKKGWQRR","chr":"chr1","y":26924170,"gene_id":"GENEENST00000452707","id":"05jkH1","source":"sORFs.org","x":26924138,"strand":"+","transcript_sequence":"TTGGAGGAGAAGAAGGGATGGCAGAGAAGGTAA","type":"sORFs","width":33,"level":0},{"AAseq":"MAAEILSYKSQHPSE","chr":"chr1","y":37483611,"gene_id":"GENEENST00000640233","id":"07nxH1","source":"sORFs.org","x":37483564,"strand":"+","transcript_sequence":"CTGGCTGCCGAGATCCTCTCCTACAAGTCCCAGCACCCCAGTGAGTAA","type":"sORFs","width":48,"level":0},{"AAseq":"MFGRTRLEVCWPRC","chr":"chr1","y":41008858,"gene_id":"GENEENST00000498694","id":"094wH20","source":"sORFs.org","x":41008814,"strand":"+","transcript_sequence":"GTGTTTGGAAGAACAAGGCTTGAAGTTTGTTGGCCAAGATGTTGA","type":"sORFs","width":45,"level":0},{"AAseq":"MGLSVHPNRRVGRWMPKPQ","chr":"chr1","y":93534864,"gene_id":"GENEENST00000260506","id":"0cs5H3","source":"sORFs.org","x":93534805,"strand":"+","transcript_sequence":"ATGGGACTATCAGTGCATCCAAACAGGAGAGTGGGAAGATGGATGCCAAAACCACAGTAG","type":"sORFs","width":60,"level":0},{"AAseq":"MCGTSGPQTRKKSKL","chr":"chr1","y":117623667,"gene_id":"GENEENST00000369448","id":"0exwH1","source":"sORFs.org","x":117623620,"strand":"+","transcript_sequence":"TTGTGCGGGACTTCAGGCCCACAGACCAGGAAGAAATCAAAACTCTAG","type":"sORFs","width":48,"level":0},{"AAseq":"MSWTSILKL","chr":"chr1","y":154191262,"gene_id":"GENEENST00000515609","id":"12vtH1","source":"sORFs.org","x":154191233,"strand":"-","transcript_sequence":"ATGAGCTGGACAAGTATTCTGAAGCTTTGA","type":"sORFs","width":30,"level":0},{"AAseq":"MSSQQGASAPLMMM","chr":"chr1","y":154988291,"gene_id":"GENEENST00000295530","id":"0gdnH1","source":"sORFs.org","x":154988247,"strand":"+","transcript_sequence":"ATGTCCTCACAGCAGGGGGCATCGGCCCCACTCATGATGATGTGA","type":"sORFs","width":45,"level":0},{"AAseq":"MIPEETESRDGEAVASES","chr":"chr1","y":155947998,"gene_id":"GENEENST00000368315","id":"13zmH1","source":"sORFs.org","x":155947942,"strand":"-","transcript_sequence":"GACATCCCGGAGGAGACGGAGAGCCGCGACGGGGAGGCTGTAGCCTCCGAGAGCTAA","type":"sORFs","width":57,"level":0},{"AAseq":"MCFPGPSVCLILT","chr":"chr1","y":163074571,"gene_id":"GENEENST00000367906","id":"0hlaH1","source":"sORFs.org","x":163074530,"strand":"+","transcript_sequence":"CTGTGCTTCCCTGGTCCCTCAGTGTGCCTAATTCTCACCTGA","type":"sORFs","width":42,"level":0},{"AAseq":"MPSFSCIFSVLCRFDR","chr":"chr1","y":165743213,"gene_id":"GENEENST00000612311","id":"16nxH2","source":"sORFs.org","x":165743163,"strand":"-","transcript_sequence":"GTTCCTTCATTTTCCTGTATATTCTCTGTACTATGTCGATTCGACAGGTGA","type":"sORFs","width":51,"level":0},{"AAseq":"MDFHVDHQSRPFFK","chr":"chr1","y":169303185,"gene_id":"GENEENST00000483228","id":"16zpH1","source":"sORFs.org","x":169303141,"strand":"-","transcript_sequence":"TTGGATTTTCATGTAGATCACCAGTCAAGACCCTTTTTCAAGTAG","type":"sORFs","width":45,"level":0},{"AAseq":"MLPSPGIAVLLESEIGVL","chr":"chr1","y":175014832,"gene_id":"GENEENST00000367677","id":"17ozH8","source":"sORFs.org","x":175014776,"strand":"-","transcript_sequence":"TTGCTGCCCTCCCCCGGGATAGCTGTCCTGTTAGAATCAGAAATCGGTGTGTTATGA","type":"sORFs","width":57,"level":0},{"AAseq":"MQEALPRTER","chr":"chr1","y":175192668,"gene_id":"GENEENST00000563563","id":"17r9H1","source":"sORFs.org","x":175192636,"strand":"-","transcript_sequence":"CTGCAGGAAGCCCTTCCGCGGACCGAAAGGTGA","type":"sORFs","width":33,"level":0},{"AAseq":"MLIRAGVWRDP","chr":"chr1","y":184795727,"gene_id":"GENEENST00000487074","id":"18yzH1","source":"sORFs.org","x":184795692,"strand":"-","transcript_sequence":"ATGCTCATCAGAGCTGGAGTTTGGAGGGACCCTTGA","type":"sORFs","width":36,"level":0},{"AAseq":"MKLWLDSVNCAFSRMEK","chr":"chr1","y":186676894,"gene_id":"GENEENST00000559627","id":"19ovH2","source":"sORFs.org","x":186676841,"strand":"-","transcript_sequence":"GTGAAACTCTGGCTAGACAGCGTAAACTGCGCCTTTTCAAGGATGGAAAAATGA","type":"sORFs","width":54,"level":0},{"AAseq":"MAVQRLAMAFA","chr":"chr1","y":193236327,"gene_id":"GENEENST00000477868","id":"0jphH1","source":"sORFs.org","x":193236292,"strand":"+","transcript_sequence":"ATGGCAGTTCAAAGGTTGGCCATGGCTTTTGCCTGA","type":"sORFs","width":36,"level":0},{"AAseq":"MLPRLACRI","chr":"chr1","y":214640620,"gene_id":"GENEENST00000366955","id":"0lkkH1","source":"sORFs.org","x":214640591,"strand":"+","transcript_sequence":"GTGTTACCAAGACTTGCATGCCGAATATGA","type":"sORFs","width":30,"level":0},{"AAseq":"MANSPAGPASAFV","chr":"chr1","y":228464655,"gene_id":"GENE","id":"1curH1","source":"sORFs.org","x":228464614,"strand":"-","transcript_sequence":"ATGGCAAATAGCCCTGCCGGCCCCGCATCCGCGTTCGTCTAG","type":"sORFs","width":42,"level":0},{"AAseq":"MVFPWLGESLNP","chr":"chr1","y":235342189,"gene_id":"GENEENST00000645578","id":"0mv0H10","source":"sORFs.org","x":235342151,"strand":"+","transcript_sequence":"CGTGTATTTCCTTGGCTTGGAGAAAGTCTTAACCCTTGA","type":"sORFs","width":39,"level":0},{"AAseq":"MHSCYKMIRLVRLSKAC","chr":"chr1","y":240776189,"gene_id":"GENE","id":"0n79H2","source":"sORFs.org","x":240776136,"strand":"+","transcript_sequence":"CTGCATTCATGCTACAAGATGATCCGTTTAGTAAGACTGAGCAAGGCTTGTTAA","type":"sORFs","width":54,"level":0}];
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
    let end     = searchExp[7];
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
