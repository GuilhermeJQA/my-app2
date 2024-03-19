import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://st4.depositphotos.com/1325771/37979/i/450/depositphotos_379795446-stock-photo-portrait-of-smiling-mature-man.jpg' }} // Substitua pela URL da foto de perfil do usuário
          style={styles.profileImage}
        />
        <Text style={styles.username}>Carlos Alberto</Text>
        <Text style={styles.bio}>Sou de Santa Catarina e tenho 60 anos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Profile;
