import React, { Component } from 'react'
import moment from 'moment'
import {
   Input, 
   List, 
   Button,
   Checkbox,
   Row,
   Col,
 } from 'antd';
import "antd/dist/antd.css"
import Header from './components/header'


class FirstPage extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      newItem: '',
    }
  }

  handleChange = () => {
    const { items, newItem } = this.state
    this.setState({ 
      items: [
        ...items,
          {
            title: newItem,
            done: false,
            startDate: moment(),
            endDate: null,
          }
      ],
      newItem: '',
    });
  };

  handleUpdate = (itemsSelected, status) => {
    const { items } = this.state
    this.setState({ 
      items: items.map((item, index) => ({
        ...item,
        done: index === itemsSelected ? status : item.done,
        endDate: index === itemsSelected ? status === true ? moment() : item.endDate : item.endDate
      })),
    });
  }

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
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div className="first-page">
        <Header />
          <Input 
            value={newItem} 
            onChange={(e) => this.setState({newItem: e.target.value})} 
            type="text" 
            placeholder="Adicionar a sua ToDo list" 
            style={{ width: 230}} />
          <Button onClick={this.handleChange} type="primary">
            Adicionar
          </Button>
          {/* <Button type="default" onClick={this.handleUpdate}>
            Feito
          </Button> */}
          <p style={{ marginBottom: 16 }}></p>
          <List
            size="small"
            bordered
            dataSource={items}
            renderItem={(item, index) => (
              <List.Item>
                <Row guther={16}>
                  <Col span={4}>
                    <Checkbox onChange={(e) => this.handleUpdate(index, e.target.checked)}/>
                  </Col>
                  <Col span={12}>
                    <List.Item.Meta
                      key={item.title}
                      title={item.title}
                      description={'Data de inicio: ' 
                        + moment(item.startDate).format("dddd, MMMM Do YYYY, h:mm:ss a") 
                        + '\nData de término: ' 
                        + moment(item.endDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                      style={{ marginLeft: 16}}
                    />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
          <pre>{JSON.stringify(items, 2, 2)}</pre>
      </div>    
    )
  }
}
export default FirstPage;

