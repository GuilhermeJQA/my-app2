import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProductCard extends Component {
  render() {
    const { nome, preco } = this.props; 

    return (
      <View style={styles.productCard}>
        <Text style={styles.produtoNome}>{nome}</Text>
        <Text style={styles.produtoPreco}>{preco}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  produtoNome: {
    fontWeight: 'bold',
  },
  produtoPreco: {
    fontStyle: 'italic',
  },
});

export default ProductCard;
