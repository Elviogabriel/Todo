import React, { Component } from 'react';
import {
   Input, 
   List, 
   Button,
 } from 'antd';
import "antd/dist/antd.css";
import Header from './components/header'


class FirstPage extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      newItems: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { items, newItems } = this.state
    this.setState({ 
      items: [...items, newItems],
      newItems: '',
     });
    console.log("state atualizado")
  };

  render() {
    const { items, newItems } = this.state;

    return (
      <div className="first-page">
        <Header />
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
      </div>    
    )
  }
}
export default FirstPage;

