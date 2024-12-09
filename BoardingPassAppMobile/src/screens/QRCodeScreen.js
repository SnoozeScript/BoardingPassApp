import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen({ route }) {
  const { event, userName } = route.params; // Get event details and user name from route params

  const qrValue = `${event.name} - ${event.date} - ${event.location} - ${userName}`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.boardingPassContainer}>
        <Text style={styles.title}>Boarding Pass</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}><Text style={styles.bold}>Event:</Text> {event.name}</Text>
          <Text style={styles.detailsText}><Text style={styles.bold}>Date:</Text> {new Date(event.date).toLocaleDateString()}</Text>
          <Text style={styles.detailsText}><Text style={styles.bold}>Location:</Text> {event.location}</Text>
          <Text style={styles.detailsText}><Text style={styles.bold}>Name:</Text> {userName}</Text>
        </View>

        <View style={styles.qrContainer}>
          <QRCode
            value={qrValue} 
            size={200} 
            color="black" 
            backgroundColor="white" 
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Scan to Enter</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  boardingPassContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2980b9',
    padding: 20,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // for Android shadow effect
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingBottom: 15,
  },
  detailsText: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2980b9',
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#bdc3c7',
    paddingTop: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#2980b9',
    fontWeight: 'bold',
  },
});
