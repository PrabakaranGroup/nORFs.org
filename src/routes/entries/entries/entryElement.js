import React         from 'react';
import * as firebase from 'firebase';
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import './entries.css';

class EntryElement extends React.Component {
  
  render() {
  	const chr   = <div key={'chr'   + this.props.id}> {this.props.chr}   </div>;
    const start = <div key={'start' + this.props.id}> {this.props.start} </div>;
    const end  = <div key={'end'  + this.props.id}> {this.props.end}  </div>;
    const ids    = <div key={'ids'    + this.props.ids}> {this.props.ids}    </div>;

    const element =
         <NavLink to={'/norf?start=' + this.props.start + 
         				   '&end='  + this.props.end  + 
         				   '&chr='   + this.props.chr }>
    		
    		<div className="dataChild divFadeIn" key={'dataChild' + start + stop}>
	           <div className="col-sm-9 description">
	     			<div className="upperTileText">chr:  {chr}   </div>
	     			<div className="upperTileText">start:{start} </div>
	                <div className="upperTileText">end: {end}  </div>
	     			<div className="upperTileText">ids:   "placeholder"    </div> 

	            </div>
	       	 </div>

         </NavLink>

  return (
	  <div>
	  	{element} 
	  </div>
  ); 
};
};
export default EntryElement;