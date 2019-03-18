import React from 'react';
import 'pileup';

export default class BrowserPile extends React.Component {
    constructor(props) {
        super(props);
        this.range = {contig: 'chr17', start: 7512384, stop: 7512544};
        this.tracks = [
    {
      viz: pileup.viz.genome(),
      isReference: true,
      data: pileup.formats.twoBit({
        url: 'http://www.biodalliance.org/datasets/hg19.2bit'
      }),
      name: 'Reference'
    },
    
    // ...
  ];
    }
    
    render() {
        return (<div ref="pileup"></div>);
    }
    
    componentDidMount() {
        this.pileup = pileup.create(this.refs.pileup, {
            range: this.range,
            tracks: this.tracks
        });
    }
}