import React, { Component } from 'react';
import Categories from "./components/Categories";
import AddDialog from "./components/AddDialog";
import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcM9rK3wUAL6hrDCvJ1isYIqvsywcubPWEPe3xvcaBaGeOEtxF&usqp=CAU",
          name: "All",
          key: 0
        },
        {
          url: "https://images.pexels.com/photos/197907/pexels-photo-197907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Fruits",
          key: 1
        },
        {
          url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Vegatables",
          key: 2
        },
        {
          url: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Meat and Eggs",
          key: 3
        },
        {
          url: "https://images.pexels.com/photos/3167310/pexels-photo-3167310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Pulses",
          key: 4
        },
        {
          url: "https://images.pexels.com/photos/289368/pexels-photo-289368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Milk products",
          key: 5
        }
      ],
      filteredItem: [], 
      isFilterApplied: false, 
      items: [],
      showAddDialog: false
    }
  }


  render() {
    const filterData = item => {
      let isFilterable = false
      if(item.length === 0) {
        isFilterable = false 
      }else {
        isFilterable = true
      }
      this.setState({isFilterApplied: isFilterable})
      const arr = this.state.items
      const filteredArr = []
      for(const obj of arr) {
        if((obj.name).includes(item)) filteredArr.push(obj)
      }
      this.setState({ filteredItem: filteredArr })
      console.log(item);
    }

    const alterActivateItem = (name) =>{
      
      
      const arr = this.state.filteredItem
      for(const obj of arr){
        if(name === obj.name) {
          obj.selected = !obj.selected
          break
        }
      }
    
      
      this.setState({ filteredItem: arr})
    }

    const addItemAlert = () => {
      this.setState({
        showAddDialog: !this.state.showAddDialog
      })
    }

    const addItemToList = (obj) => {
      const arr = this.state.items
      let occuranceCount = 0
      if (arr.length !== 0) {
        for (const item of arr) {
          if (item.name === obj.name) {
            occuranceCount = item.count + 1
            item.count = occuranceCount
            break
          }
        }
      }
      if (occuranceCount === 0) {
        arr.push(obj)
      }
      this.setState({ items: arr })
      // eslint-disable-next-line no-unused-expressions
      !this.state.isFilterApplied ? this.setState({ filteredItem: arr }) : null
      addItemAlert()
      console.log(obj, this.state.items);

    }

    const filterByCategory = category => {
      console.log(category);
      if(category === 'All'){
        this.setState({filteredItem: this.state.items})
        return
      }

      const arr = this.state.items
      const filteredItem = []
      for(const obj of arr){
        if(obj.category === category){
          filteredItem.push(obj)
        }
      }
      this.setState({filteredItem, isFilterApplied: true })

    }

    return (
      <div className="App" >
        <div className="container">
          {
            this.state.showAddDialog ? <AddDialog data={this.state.categories} onDismissed={() => addItemAlert()} onItemAdded={(obj) => addItemToList(obj)} /> : null
          }
          <div className="large" >
            {this.state.categories.map((item) => (
              <Categories data={item} key={item.key} onFilterApplied = {(category) => filterByCategory(category)} />
            ))}
          </div>
          <div className="small" >
            <div className="inner">
              <h2>Grocery list</h2>
              <input placeholder="type to search food.." className="search_input" onChange={(e) => filterData(e.target.value)} />
              <div className="list_section">
                {
                  this.state.filteredItem.map((item, index) => (
                    <div className= { item.selected ? "food_item_selected" : "food_item" } key = {index}  onClick ={(e) => alterActivateItem(item.name)} > {item.name} </div>
                  ))
                }
              </div>
              <button className="fab" onClick={(e) => addItemAlert()} >+</button>
            </div>
          </div>
        </div>
      </div>
    );

  }
}


