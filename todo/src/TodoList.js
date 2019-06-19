import React, { Component } from 'react'
import {
  Input, 
  Button,
} from 'antd';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <Input 
              placeholder="Tarefa"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} 
            />
            <Button type="primary"> Adicionar tarefa </Button>
          </form>
        </div>
      </div>
    )
  }
}
export default TodoList