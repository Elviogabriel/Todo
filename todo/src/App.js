import React, { Component } from 'react';
import {
   Input, 
   List, 
   Button,
   Checkbox,
   Row,
   Col,
 } from 'antd';
import "antd/dist/antd.css";
import Header from './components/header'


class FirstPage extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      newItems: '',
      itemsSelected: [],
      itemsSelectedKeys: false,
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

  deleteItems = (e) => {
    e.preventDefault()
    const { items, itemsSelected } = this.state
    console.log(itemsSelected)
    items.splice(itemsSelected, 1)
    this.setState({
      items: [...items],
      itemsSelected: [],
      itemsSelectedKeys: false,
    }, () => {
      const {itemsSelectedKeys} = this.state
      console.log('deletado')
      console.log(itemsSelectedKeys)
    })
    
  }

  render() {
    const { items, newItems } = this.state;

    return (
      <div className="first-page">
        <Header />
          <Input 
            value={newItems} 
            onChange={(e) => this.setState({newItems: e.target.value})} 
            type="text" 
            placeholder="Adicionar a sua ToDo list" 
            style={{ width: 230}} />
          <Button onClick={this.handleChange} type="primary">
            Adicionar
          </Button>
          <Button type="danger" onClick={this.deleteItems}>
            Excluir
          </Button>
          <p style={{ marginBottom: 16 }}></p>
          <List
            size="small"
            bordered
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <Row guther={16}>
                  <Col span={4}>
                    <Checkbox onChange={(e) => this.setState({itemsSelected: items.indexOf(item), itemsSelectedKeys: e.target.checked})}/>
                  </Col>
                  <Col span={12}>
                    <List.Item.Meta
                      title={item}
                      style={{ marginLeft: 16}}
                    />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
      </div>    
    )
  }
}
export default FirstPage;

