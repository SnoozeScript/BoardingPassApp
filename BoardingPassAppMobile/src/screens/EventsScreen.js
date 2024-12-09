
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Card } from 'react-native';

export default function EventsScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('John Doe'); // Sample user name 

  // Demo data for events
  const demoEvents = [
    {
      id: '1',
      name: 'Tech Conference 2024',
      description: 'A conference about the latest trends in tech.',
      date: '2024-12-09',
      location: 'India',
    },
    {
      id: '2',
      name: 'Food & Wine Gala 2024',
      description: 'A gala event celebrating fine dining, wine, and culture.',
      date: '2024-08-22',
      location: 'Chicago, IL',
    },
    {
      id: '3',
      name: 'Startup Pitch Day 2024',
      description: 'A day for startups to pitch their ideas to investors.',
      date: '2024-09-05',
      location: 'Austin, TX',
    },
    {
      id: '4',
      name: 'Art Expo 2024',
      description: 'An art exhibition showcasing works from around the world.',
      date: '2024-07-15',
      location: 'New York City, NY',
    },
    {
      id: '5',
      name: 'Music Festival 2024',
      description: 'An annual music festival featuring top global artists.',
      date: '2024-06-10',
      location: 'Los Angeles, CA',
    },
    {
      id: '6',
      name: 'Gaming Convention 2024',
      description: 'The largest gaming convention with tournaments and meetups.',
      date: '2024-11-11',
      location: 'Las Vegas, NV',
    },
    {
      id: '7',
      name: 'Health & Wellness Expo 2024',
      description: 'An expo to explore the latest trends in health and wellness.',
      date: '2024-05-20',
      location: 'San Francisco, CA',
    },
  ];

  // Simulate loading state (in place of actual data fetching)
  useEffect(() => {
    setTimeout(() => {
      setEvents(demoEvents); // Set demo events after a delay (simulating data fetch)
      setLoading(false); 
    }, 1000); 
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id} // Use 'id' as the key for each event
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Navigate to QRCodeScreen, passing event details and user name
              navigation.navigate('QRCode', {
                event: item,
                userName: userName,
              });
            }}
          >
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.name}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <Text style={styles.eventDate}>{new Date(item.date).toLocaleDateString()}</Text>
              <Text style={styles.eventLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f9',
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // for Android shadow effect
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
  },
});
