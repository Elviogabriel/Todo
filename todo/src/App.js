import React, { Component } from 'react'
import moment from 'moment'
import { Input, List, Button, Checkbox, Row, Col, PageHeader } from 'antd'
import 'antd/dist/antd.css'

class FirstPage extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      newItem: ''
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
          endDate: null
        }
      ],
      newItem: ''
    })
  }

  handleUpdate = (itemsSelected, status) => {
    const { items } = this.state
    this.setState({
      items: items.map((item, index) => ({
        ...item,
        done: index === itemsSelected ? status : item.done,
        endDate: index === itemsSelected && status ? moment() : item.endDate
      }))
    })
  }

  getItemDescription = item => {
    let text = `Criado em: ${moment(item.startDate).format(
      'DD/MM/YYYY HH:mm:ss'
    )}`
    if (item.endDate) {
      text += ` - Concluído em: ${moment(item.endDate).format(
        'DD/MM/YYYY HH:mm:ss'
      )}`
    }
    return text
  }

  render() {
    const { items, newItem } = this.state

    return (
      <div className="first-page">
        <PageHeader title="ToDo List" />
        <Input
          value={newItem}
          onChange={e => this.setState({ newItem: e.target.value })}
          onPressEnter={this.handleChange}
          type="text"
          placeholder="Adicionar a sua ToDo list"
          style={{ width: 230 }}
        />
        <p style={{ marginBottom: 16 }} />
        <List
          size="small"
          bordered
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item>
              <Row guther={16} style={{ width: '100%' }}>
                <Col span={1}>
                  <Checkbox
                    onChange={e => this.handleUpdate(index, e.target.checked)}
                  />
                </Col>
                <Col span={23}>
                  <List.Item.Meta
                    key={item.title}
                    title={item.title}
                    style={{
                      textDecorationLine: item.done ? 'line-through' : ''
                    }}
                    description={this.getItemDescription(item)}
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
export default FirstPage
