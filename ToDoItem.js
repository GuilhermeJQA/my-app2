import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoItem;
