import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron, FormGroup, CustomInput, Label} from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
const queryString = require('query-string');
var FeatureViewer = require("feature-viewer");
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";




const dalliance = window.dalliance;

import './norf.css';


export default class extends Component {
      constructor(props) {
    super(props);
    this.state = {
      loading     : true,
      apiData     : [],
      apiTest     : [],
      accessionID : [],
      chr         : '',
      start       : '',
      stop        : '',
      showSettings: false,

      avgPhyloP   : [],
      phyloP      : [],
      avgPhastcons: [],
      phastCons   : [],
      nTranscripts: [],

      options: {
        chart: {
          type: 'line',
          height: 200
      }
    }

    }
  }

 componentDidMount() {

    const parsed = queryString.parse(location.search);
    this.setState({chr: parsed.chr.substring(3), start: parsed.start, stop: parsed.end})



       var ft = new FeatureViewer('MALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEMALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLE',
                           '#peptideGraph',
                            {
                                showAxis:     true,
                                showSequence: true,
                                brushActive:  true, //zoom
                                toolbar:      true, //current zoom & mouse position
                                bubbleHelp:   true, 
                                zoomMax:      10 //define the maximum range of the zoom
                            });




    ft.addFeature({
      data: [{x:20,y:20, description:"bbbbb"},{x:46,y:46, description:"aaaa"},{x:123,y:123, description:"cccc"}],
      name: "SNVs",
      className: "SNVs", //can be used for styling
      color: "#0F8292",
      type: "rect" // ['rect', 'path', 'line']
    });


      new Browser({
    chr       : parsed.chr.substring(3),
    viewStart : parseInt(parsed.start)-2000,
    viewEnd   : parseInt(parsed.end)+2000,
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
      fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/genomic/region/' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end + '/conservation?assembly=grch38&limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json')
      .then(response =>  response.json())
      .then(apiTest => {
       const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
       let avgPhastcons = average(apiTest.response[0].result[0].values);
       let avgPhyloP = average(apiTest.response[0].result[1].values);
       let phyloP = apiTest.response[0].result[1].values;
       let phastCons = apiTest.response[0].result[0].values;

       this.setState({ apiTest, avgPhastcons, avgPhyloP, phyloP, phastCons }); 

       console.log(apiTest);
       console.log("phastcons: " + avgPhastcons);
       console.log("avgPhylop: " + avgPhyloP);
     });


     fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/feature/gene/search?limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json&region=' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end)
      .then(response =>  response.json())
      .then(apiData => {
        console.log(apiData);
       this.setState({nTranscripts : apiData.response[0].numResults})
     });

     fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/feature/variation/search?limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json&region=' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end)
      .then(response =>  response.json())
      .then(variation => {
        console.log(variation);
     });

}


  render() {

    const graphicStyle = this.state.showSettings ? {
      margin: '0px',
      visibility: 'hidden',
      display: 'none'
    } : {
      margin: '0px'
    };
   
    let apiTemp     = JSON.stringify(this.state.apiData);
    let apiStore    = <p>{apiTemp}</p>;

    let phastCons = <Card> {this.state.avgPhastcons} </Card>;
    let settingsTab = <Colxx className="headCard2" xxs="12" style={{marginTop: 0}}>
                         <Card style={{padding: 10}}>
                         <Row>

                         <Colxx className="headCard2" xxs="2">
                               <div className="headTitle">
                            Conservation Based
                           </div>
                         <Row>
                         <Colxx xxs="12">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="PhastCons scores"
                              onChange={() => {console.log("input1")}}
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="PhyloP vertebrates"
                              onChange={() => {console.log("input2")}}
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="GERP scores"
                              onChange={() => {console.log("input3")}}
                            />
                               <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="TF binding sites"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Siphy log odds"
                            />
                         </Colxx>
                         
                         </Row>
                         </Colxx>
                         <Colxx className="headCard2" xxs="4">
                               <div className="headTitle">
                            Functional
                           </div>
                         <Row>
                         <Colxx xxs="6">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="GAWA scores"
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Amino acid change"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Fitness Consequence score"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Segway"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="MutationTaster score"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="MutationAssessor score"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="MetaLR score"
                            />

                         </Colxx>
                         <Colxx xxs="6">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Sift score"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Polyphen score"
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Grantham score"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="LRT Score"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="PROVEAN Score"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="MetaSVM Score"
                            />
                         </Colxx>
                         </Row>
                         </Colxx>
                               <Colxx className="headCard2" xxs="6">
                               <div className="headTitle">
                            Region Based
                           </div>
                         <Row>
                         <Colxx xxs="4">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Max H3K27 Acetylation level"
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Max H3K27 Metyhlation level"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Max H3K27 trimetylation level"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Max expression value"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="DNAse peak signal (chromatin)"
                            />
                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Faire peak signal (chromatin)"
                            />
                         </Colxx>
                         <Colxx xxs="4">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Pol II evidence (chromatin)"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="CTCF peak signal (chromatin)"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Myc peak signal (chromatin)"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Max nucleosome track score"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Number TF binding sites"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Distance to TSS"
                            />

                       
                         </Colxx>
                         <Colxx xxs="4">
                           <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Distance to splice site"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Nature of splice site"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Relative position in transcript"
                            />

                             <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="Distance to nearest exon"
                            />

                            <CustomInput
                              type="checkbox"
                              id="exampleCustomCheckbox"
                              label="GC percentage in 150bp"
                            />

                         </Colxx>
                         </Row>
                         </Colxx>
                          </Row>
                         </Card>
                        </Colxx>;

    let graphic1 = <Colxx style={graphicStyle}>
                   <Colxx xxs="12">
                     <div id="svgHolder"/>
                   </Colxx>
                   </Colxx>;
     

    let graphic2 = <Colxx xxs="12" style={graphicStyle}>
                    <div id="peptideGraph"/>
                   </Colxx>;



    return (
      <Fragment>
        <Row >

        <Colxx className="headCard" xxs="4">
          <Card style={{padding: 5}}> 
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
          <Card style={{padding: 5}}> 
            <div className="headTitle">
              Evidence 
            </div>
            <div className="headContent" >
              PhastCons: {parseFloat(this.state.avgPhastcons).toFixed(3)}<br/>
              PhyloP:  {parseFloat(this.state.avgPhyloP).toFixed(3)}<br/>
              Transcripts: {this.state.nTranscripts} 
            </div>
          </Card>
        </Colxx>
        <Colxx className="headCard" xxs="4">
          <Card style={{padding: 5}}> 
            <div className="headTitle">
              Settings 
            </div>
            </Card>
            <Colxx style={{height: 76, padding: 15, paddingLeft: 0}}>
            {this.state.showSettings ?
             <Button style={{padding: 20 }} color="info" className="default mb-2" onClick={() => {this.setState({showSettings : !this.state.showSettings});}}>Gene Explorer</Button>
             :
             <Button style={{padding: 20 }} color="info" className="default mb-2" onClick={() => {this.setState({showSettings : !this.state.showSettings});}}>Additional Annotations </Button>
            }
            </Colxx>
        </Colxx>


        {graphic1}
        {graphic2}

        {this.state.showSettings && settingsTab}
        {this.state.showSettings && phastCons}



        </Row>

        <Row>
        <Colxx xxs="12" style={{height: 50}}>
             <Chart
                  options={{
                  chart: {
                    zoom: {
                        enabled: false
                    }
                  },
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                      curve: 'stepline'
                  },
                  title: {
                    text: 'PhyloP Score',
                    align: 'left'
                  },
                  markers: {
                    hover: {
                      sizeOffset: 4
                    }
                  },
                }}
                series={[
                  {
                    name: "phyloP score",
                    data: this.state.phyloP
                  }
                ]}
                type="line"
                width="100%"
                height="250"
             />

             <Chart
                  options={{
                  chart: {
                    zoom: {
                        enabled: false
                    }
                  },
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                      curve: 'stepline'
                  },
                  title: {
                    text: 'PhastCons score',
                    align: 'left'
                  },
                  markers: {
                    hover: {
                      sizeOffset: 4
                    }
                  },
                }}
                series={[
                  {
                    name: "PhastCons score",
                    data: this.state.phastCons
                  }
                ]}
                type="line"
                width="100%"
                height="250"
             />

              <ReactApexChart options={this.state.options} series={[
    {
      name: "Series 1",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },]
    },
    {
      name: "Series 3",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },{
        x: 'W4',
        y: 32
      },]
    },
    {
      name: "Series 2",
      data: [{
        x: 'W1',
        y: 43
      }, {
        x: 'W2',
        y: 43
      }, {
        x: 'W3',
        y: 43
      }, {
        x: 'W4',
        y: 43
      }]
    }
  ]} type="heatmap" height="150" />


        </Colxx>
        </Row>
        <br/>
        <div>
        <Row>
        </Row>
        </div>
      </Fragment>
    );
  }
}
