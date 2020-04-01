import React, { Component } from 'react';

export default class Categories extends Component {

  

  render() {
    const {onFilterApplied} = this.props; 
    return (
      <div className="category_card" onClick = {(e)=> onFilterApplied(this.props.data.name)}  > 
          <div className="category_item">
            <img src = {this.props.data.url}  alt="" />
          </div>
          <div className="category_text">
            <h1 style={{color: 'white', backgroundColor:'yellowgreen', display:'inline', padding:'4px'}} >{this.props.data.name}</h1>
          </div>
      </div>
    );
  }
}
