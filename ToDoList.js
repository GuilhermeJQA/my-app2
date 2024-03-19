import React, { Component } from 'react';
import { View } from 'react-native';
import ToDoItem from './ToDoItem';
class ToDoList extends Component {
  render() {
    const { tasks } = this.props; // Recebe as tarefas

    return (
      <View>
        {tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}
      </View>
    );
  }
}

export default ToDoList;
