// src/screens/QRCodeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen({ route }) {
  const { event, userName } = route.params; // Get event details and user name from route params

  const qrValue = `${event.name} - ${event.date} - ${event.location} - ${userName}`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Event QR Code</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}><Text style={styles.bold}>Event:</Text> {event.name}</Text>
        <Text style={styles.detailsText}><Text style={styles.bold}>Date:</Text> {new Date(event.date).toLocaleDateString()}</Text>
        <Text style={styles.detailsText}><Text style={styles.bold}>Location:</Text> {event.location}</Text>
        <Text style={styles.detailsText}><Text style={styles.bold}>Name:</Text> {userName}</Text>
      </View>

      <QRCode
        value={qrValue} // QR code value (event info + user name)
        size={250} // Set QR code size
        color="black" // Set QR code color
        backgroundColor="white" // Set QR code background color
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for Android shadow effect
    width: '100%',
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
