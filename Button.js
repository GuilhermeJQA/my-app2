import React from 'react';
import {Text, Alert, StyleSheet, Pressable } from 'react-native';

const Button = ({ title, color }) => {
  const handlePress = () => {
    alert(title)
  };

  return (
    <Pressable
      style={[styles.button, { backgroundColor: color }]}
      onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
