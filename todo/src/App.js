import React, { Component } from 'react';
import {
   Input, 
   List, 
   Form,
   Button,
 } from 'antd';
import "antd/dist/antd.css";
import Header from './components/header'
import TodoList from './TodoList'


class FirstPage extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      newItems: '',
      //currentItem: {text:'', key:''},
    }
  }

  // handleInput = e => {
  //   const itemText = e.target.value
  //   const currentItem = { text: itemText, key: Date.now() }
  //   this.setState({
  //     currentItem,
  //   })
  // }

  // addItem = e => {
  //   e.preventDefault()
  //   const newItem = this.state.currentItem
  //   if (newItem.text !== '') {
  //     console.log(newItem)
  //     const items = [...this.state.items, newItem]
  //     this.setState({
  //       items: items,
  //       currentItem: { text: '', key: '' },
  //     })
  //   }
  // }
  // state ={
  //   todos: [],
  // }
 
  handleChange = (e) => {
    e.preventDefault()
    const { items, newItems } = this.state
    this.setState({ 
      items: [...items, newItems],
      newItems: '',
     });
    console.log("state atualizado")
  };

  // showResults = () => {
  //   {this.state.todos.map(todo => (
  //     <li key={1}>{todo}</li>
  //   ))}
  // }

  render() {
    const { items, newItems } = this.state;

    return (
      <div className="first-page">
        <Header />
        {/* <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        /> */}
          <Input value={newItems} onChange={(e) => this.setState({newItems: e.target.value})} type="text" placeholder="Adicionar a sua ToDo list" style={{ width: 230}} />
          <Button onClick={this.handleChange} type="primary">
            Adicionar
          </Button>
          <p style={{ marginBottom: 16 }}></p>
          <List
            size="small"
            bordered
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta 
                    title={item}
                />
              </List.Item>
            )}
          />
          {/* <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul> */}
      </div>    
    )
  }
}
export default FirstPage;

