import React         from 'react';
import * as firebase from 'firebase';
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import './entries.css';

class EntryElement extends React.Component {
  
  render() {
  	console.log(this.props);
  	const chr = <div key={'chr' + this.props.id}> {this.props.chr} </div>;
    const start = <div key={'start' + this.props.id}> {this.props.start} </div>;
    const stop = <div key={'stop' + this.props.id}> {this.props.stop} </div>;
    const id = <div key={'id' + this.props.id}> {this.props.id} </div>;

    const element =
         <div className="dataChild divFadeIn" key={'dataChild' + id}>
           <div className="col-sm-9 description">
             			<div className="upperTileText">id:{id}</div> 
             			<div className="upperTileText">chr:{chr}</div>
             			<div className="upperTileText">start:{start}</div>
                        <div className="upperTileText">stop:{stop}</div>
            </div>
        </div>
  return (
	  <div>
	  	{element} 
	  </div>
  ); 
};
};
export default EntryElement;