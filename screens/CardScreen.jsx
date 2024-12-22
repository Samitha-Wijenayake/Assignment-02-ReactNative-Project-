import React, { useContext, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { HospitalContext } from '../context/HospitalContext';
import HospitalDetailsCard from '../components/HospitalDetailsCard';

const CardScreen = ({ route }) => {
  const { username } = route.params; // username from navigation
  const { hospitals, isLoading, totalReacts, toggleReact } =
    useContext(HospitalContext);

  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3399FF" />
        <Text>Loading hospitals...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with greeting */}
      <View style={styles.header}>
        <Text style={styles.greetingText}>Hi, {username}</Text>
        <Text style={styles.totalReactsText}>Total Reacts: {totalReacts}</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Hospital Details"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Update state on text input
        />
      </View>

      <FlatList
        data={hospitals}
        renderItem={({ item, index }) => (
          <HospitalDetailsCard
            item={item}
            onReact={() => toggleReact(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#3399FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  greetingText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalReactsText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBoxContainer: {
    marginBottom: 15,
    marginHorizontal: 10,
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default CardScreen;
