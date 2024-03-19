import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ProductCard from './ProductCard';
import Header from './Header';
import ToDoList from './ToDoList';
import Button from './Button';
import Profile from './Profile';

export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];
  return (
    <View style={styles.container}>
      <ProductCard nome='Produto 1' preco='R$20,00'/>
      <br/><br/>
      <Header title="Questão 2" onPress={handleButtonPress} />
      <br/><br/>
      <ToDoList tasks={tasks} />
      <br/><br/>
      <Button title="Pressione-me" color="#007bff" />
      <br/><br/>
      <Profile/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const handleButtonPress = () => {
  alert('Botão clicado');
};