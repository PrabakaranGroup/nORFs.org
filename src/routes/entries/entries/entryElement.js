import React         from 'react';
import * as firebase from 'firebase';
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import './entries.css';

class EntryElement extends React.Component {
  
  render() {
  	const chr   = <div key={'chr'   + this.props.id}> {this.props.chr}   </div>;
    const start = <div key={'start' + this.props.id}> {this.props.start} </div>;
    const end  =  <div key={'end'  + this.props.id}> {this.props.end}  </div>;
    const id   = <div key={'id'    + this.props.id}> {this.props.id}    </div>;
    const aaseq   = <div key={'AAseq'    + this.props.aaseq}> {this.props.aaseq}    </div>;
    const width   = <div key={'width'    + this.props.width}> {this.props.width}    </div>;

    const complete = chr && start && end && id && aaseq && width;

    const element =
         <NavLink to={'/norf?start=' + this.props.start + 
         				   '&end='  + this.props.end  + 
         				   '&chr='   + this.props.chr } key= {'key' + start + stop}>
    		
    		  <div className="dataChild divFadeIn entryTile" key={'dataChild' + start + stop}>
	           <div className="col-sm-9 description">
             <div className="upperTileText">id: {id} </div> 
	     			 <div className="upperTileText">chr:  {chr}   </div>
	     			 <div className="upperTileText">start:{start} </div>
	           <div className="upperTileText">end: {end}  </div>
             <div className="upperTileText">width: {width}  </div>
             <div className="upperTileText">AAseq: {aaseq}   </div>
	            </div>
	       	 </div>

         </NavLink>

  return (
	  <div>
	  	{complete && element} 
	  </div>
  ); 
};
};
export default EntryElement;