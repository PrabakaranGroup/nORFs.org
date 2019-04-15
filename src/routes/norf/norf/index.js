import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
const queryString = require('query-string');
var FeatureViewer = require("feature-viewer")
const dalliance = window.dalliance;

import './norf.css';


export default class extends Component {
      constructor(props) {
    super(props);
    this.state = {
      loading     : true,
      apiData     : [],
      accessionID : [],
      chr         : '',
      start       : '',
      stop        : ''
    }
  }

 componentDidMount() {

    const parsed = queryString.parse(location.search);
    this.setState({chr: parsed.chr.substring(3), start: parsed.start, stop: parsed.end});

    fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/feature/transcript/search?assembly=grch38&limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json&region=' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end)
    .then(response =>  response.json())
    .then(apiData => {
       this.setState({ apiData: apiData }); //this is an asynchronous function
       fetch('https://api.nextprot.org/entry-accessions/gene/FLAD1.json?synonym=true')
       .then(accession => (accession.json()))
       .then(x => x[0])
       .then(y => console.log(y));
        
       var ft = new FeatureViewer('MALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEMALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLE',
                           '#peptideGraph',
                            {
                                showAxis: true,
                                showSequence: true,
                                brushActive: true, //zoom
                                toolbar:true, //current zoom & mouse position
                                bubbleHelp:true, 
                                zoomMax:10 //define the maximum range of the zoom
                            });



    ft.addFeature({
      data: [{x:20,y:32},{x:46,y:105},{x:123,y:167}],
      name: "protein",
      className: "protein", //can be used for styling
      color: "#0F8292",
      type: "rect" // ['rect', 'path', 'line']
    });
     ft.addFeature({
      data: [{x:18,y:34},{x:26,y:100},{x:23,y:67}],
      name: "conservation",
      className: "conservation", //can be used for styling
      color: "#FF829F",
      type: "path", // ['rect', 'path', 'line']
      pinned: true
    });
      ft.addFeature({
      data: [{x:15,y:32},{x:46,y:100},{x:123,y:167}],
      name: "variant",
      className: "variant", //can be used for styling
      color: "#F02F92",
      type: "rect" // ['rect', 'path', 'line']
    });
       ft.addFeature({
      data: [{x:10,y:30},{x:46,y:113},{x:123,y:167}],
      name: "orthology",
      className: "orthology", //can be used for styling
      color: "#328FFF",
      type: "rect" // ['rect', 'path', 'line']
    });


      new Browser({
    chr       : this.state.chr,
    viewStart : parseInt(this.state.start)-2000,
    viewEnd   : parseInt(this.state.stop)+2000,
    maxHeight : 900,
    noTitle   : true,
    noPersist : true,
    noPersistView : true,
    noLeapButtons : true,


    coordSystem: {
      speciesName : 'Human',
      taxon       : 9606,
      auth        : 'GRCh',
      version     : '38',
      ucscName    : 'hg38'
    },

    sources:     [{name:                 'Genome',
                   twoBitURI:            '//www.biodalliance.org/datasets/hg38.2bit',
                   tier_type:            'sequence'},
                  {name:                 'Genes',
                   desc:                 'Gene structures from GENCODE 38',
                   bwgURI:               '//www.biodalliance.org/datasets/gencode.bb',
                   stylesheet_uri:       '//www.biodalliance.org/stylesheets/gencode.xml',
                   collapseSuperGroups:  true,
                   trixURI:              '//www.biodalliance.org/datasets/geneIndex.ix'},
                  {name:                 'Repeats',
                   desc:                 'Repeat annotation from Ensembl',
                   bwgURI:               '//www.biodalliance.org/datasets/repeats.bb',
                   stylesheet_uri:       '//www.biodalliance.org/stylesheets/bb-repeats.xml'},
                  {name:                 'Conservation',
                   desc:                 'Conservation', 
                   bwgURI:               '//www.biodalliance.org/datasets/phastCons46way.bw',
                   noDownsample:         true},
                   {name: 'DNase I', desc: 'GM12878 DNaseI signals from UW', 
                    bwgURI: '//www.biodalliance.org/datasets/encode/wgEncodeUwDnaseGm12878Aln_2Reps.norm5.rawsignal.bw', 
                    style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(8,104,172)', HEIGHT: 30, id: 'style1'}}], 
                    noDownsample: true},
                  {name: 'H3K4me1', desc: 'GM12878 H3K4me1 signal from Broad',
                   bwgURI: '//www.biodalliance.org/datasets/encode/wgEncodeBroadHistoneGm12878H3k4me1StdAln_2Reps.norm5.rawsignal.bw',
                   style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(166,71,71)', HEIGHT: 30, id: 'style1'}}], 
                   noDownsample: true}, 
                  {name: 'H3K4me2', desc: 'GM12878 H3K4me2 signal from Broad', 
                   bwgURI: '//www.biodalliance.org/datasets/encode/wgEncodeBroadHistoneGm12878H3k4me2StdAln_2Reps.norm5.rawsignal.bw', 
                   style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(166,71,71)', HEIGHT: 30, id: 'style1'}}], 
                   noDownsample: true}, 
                  {name: 'H3K4me3', desc: 'GM12878 H3K4me3 signal from UW', 
                   bwgURI: '//www.biodalliance.org/datasets/encode/wgEncodeUwHistoneGm12878H3k4me3StdAln_2Reps.norm5.rawsignal.bw',
                   style: [{type: 'default', style: {glyph: 'HISTOGRAM', BGCOLOR: 'rgb(166,71,71)', HEIGHT: 30, id: 'style1'}}], 
                   noDownsample: true},
                  {name: 'GM12878 ChromHMM', desc: 'GM12878 ChromHMM Genome Segmentation', 
                     bwgURI: '//www.biodalliance.org/datasets/encode/gm12878.ChromHMM.bb',
                     style: [{type: 'bigbed', style: {glyph: 'BOX', FGCOLOR: 'black', BGCOLOR: 'blue', HEIGHT: 8, BUMP: false, LABEL: false, ZINDEX: 20, BGITEM: true, id: 'style1'}}, 
                            {type: 'bb-translation', style: {glyph: 'BOX', FGCOLOR: 'black', BGITEM: true, BGCOLOR: 'red', HEIGHT: 10, BUMP: true, ZINDEX: 20, id: 'style2'}}, 
                            {type: 'bb-transcript', style: {glyph: 'BOX', FGCOLOR: 'black', BGCOLOR: 'white', HEIGHT: 10, ZINDEX: 10, BUMP: true, LABEL: true, id: 'style3'}}]}

                 ],

    });

    })
}

  render() {
   
    console.log(this.state.apiData);
    let apiTemp = JSON.stringify(this.state.apiData);
    console.log(apiTemp);
    let apiStore = <p>{apiTemp}</p>;




    return (
      <Fragment>
        <Row>
        <Colxx className="headCard" xxs="4">
          <Card> 
            <div className="headTitle">
              Details 
            </div>
            <div className="headContent">
              id: <br/> 
              chr: {this.state.chr}<br/>
              position: {this.state.start}-{this.state.stop}
            </div>
          </Card>
        </Colxx>

        <Colxx className="headCard " xxs="4">
          <Card> 
            <div className="headTitle">
              Evidence 
            </div>
            <div className="headContent">
              Origin: <br/>
              Score: <br/>
              Method: 
            </div>
          </Card>
        </Colxx>
        <Colxx className="headCard" xxs="4">
          <Card> 
            <div className="headTitle">
              Help 
            </div>
            <div className="headContent">
             jump between close up and large scale with space button
            </div>
          </Card>
        </Colxx>

        <Colxx xxs="12">
            <div id="svgHolder"/>
        </Colxx>
        <Colxx xxs="12">
          <div id="peptideGraph"/>
        </Colxx>
        <p style={{color: "red"}}> openCB API return - will soon be integrated into graphics </p>
        {apiStore}
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
