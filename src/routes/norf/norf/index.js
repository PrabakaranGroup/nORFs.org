import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
const queryString = require('query-string');
var FeatureViewer = require("feature-viewer")

export default class extends Component {
      constructor(props) {
    super(props);
    this.state = {
      loading : true,
      apiData : [] 
    }
  }

 componentDidMount() {
    const parsed = queryString.parse(location.search);
    fetch('https://bioinfo.hpc.cam.ac.uk/cellbase/webservices/rest/v4/hsapiens/feature/transcript/search?assembly=grch38&limit=-1&skip=-1&skipCount=false&count=false&Output%20format=json&region=' + parsed.chr.substring(3) + '%3A' + parsed.start + '-' + parsed.end)
    .then(response =>  response.json())
    .then(apiData => {
       //console.log(JSON.stringify(apiData))
       //do your logic here       
       //let person = apiData.results
       this.setState({ apiData: apiData }); //this is an asynchronous function

        var ft = new FeatureViewer('MALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEMALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLEALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLE',
                           '#fv1',
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
      type: "path" // ['rect', 'path', 'line']
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
          <Colxx xxs="12">
            <div id="fv1"/>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
