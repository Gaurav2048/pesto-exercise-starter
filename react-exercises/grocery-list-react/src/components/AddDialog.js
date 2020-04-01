import React, { Component } from 'react';

export default class AddDialog extends Component {
  constructor(){
    super()
    this.state = {name: "", category: "Fruits", selected: false , count : 0 }
  }
  render() {
    const {data, onDismissed, onItemAdded} = this.props; 
    return (
      <div className="add_dialog">
        <h1>Add a New Item</h1>
        <input className="search_input" placeholder="Enter Item"   onChange = {(e)=> {
          this.setState({name: e.target.value})
          console.log(this.state.name);
          
        }} />
        <select className="item_select" value= {this.state.category} onChange={(e)=>this.setState({category: e.target.value})} >
          {
            data.map(( item,index) => (
              <option value={item.name} key={index}  >{item.name}</option>
            ))
          }
        </select>
        <div className="action_area">
          <button className="btn_cancel" onClick = {(e)=> onDismissed() } >CANCEL</button>
          <button className="btn_add" onClick = {(e)=> onItemAdded({...this.state})} >ADD</button>
        </div>
      </div>
    );
  }
}
