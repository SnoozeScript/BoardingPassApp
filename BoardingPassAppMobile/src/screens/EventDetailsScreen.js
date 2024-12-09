import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { supabase } from "../utils/supabase";

export default function EventDetailsScreen({ route, navigation }) {
  const { eventId } = route.params;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("id", eventId)
          .single();

        if (error) throw error;

        setEvent(data);
      } catch (error) {
        console.error("Error fetching event details:", error.message);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return (
      <View style={styles.center}>
        <Text>Loading event details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{event.name}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.eventDetails}>Date: {event.date}</Text>
      <Text style={styles.eventDetails}>Location: {event.location}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  eventDetails: {
    fontSize: 14,
    marginBottom: 5,
    color: "gray",
  },
});
