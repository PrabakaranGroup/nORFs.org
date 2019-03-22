import React from 'react';
let FeatureViewer = require('feature-viewer')

export default class BrowserPile extends React.Component {
    constructor(props) {
        super(props);
        this.range = {contig: 'chr17', start: 7512384, stop: 7512544};
        
    }
                            
    render() {
        return (<div ref="pileup"></div>);
    }
    
    componentDidMount() {
      let ft = new FeatureViewer('MALWMRLLPLLALLALWGPGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLE',
                           '.loading',
                            {
                                showAxis: true,
                                showSequence: true,
                                brushActive: true, //zoom
                                toolbar:true, //current zoom & mouse position
                                bubbleHelp:true, 
                                zoomMax:50 //define the maximum range of the zoom
                            });
        
    }
}