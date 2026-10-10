import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.schoolName}>EMSI</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>EL MAMOUN</Text>
        </Text>

        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>AMINE</Text>
        </Text>

        <Text style={styles.label}>
          Année universitaire :
          <Text style={styles.value}> 2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
  },

  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    width: 250,
    height: 120,
  },

  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  info: {
  backgroundColor: '#ffffff',
  padding: 20,
  borderRadius: 15,
  elevation: 5,
  width: 320,
},

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  value: {
    fontWeight: 'normal',
  },
});