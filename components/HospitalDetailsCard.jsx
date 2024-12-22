import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const hospitalImages = [
  require('../assets/images/hospitals/Hos-1.jpg'),
  require('../assets/images/hospitals/Hos-2.jpg'),
  require('../assets/images/hospitals/Hos-3.jpg'),
  require('../assets/images/hospitals/Hos-4.jpg'),
  require('../assets/images/hospitals/Hos-5.jpg'),
  require('../assets/images/hospitals/Hos-6.jpg'),
  require('../assets/images/hospitals/Hos-7.jpg'),
  require('../assets/images/hospitals/Hos-8.jpg'),
  require('../assets/images/hospitals/Hos-9.jpg'),
  require('../assets/images/hospitals/Hos-10.jpg'),
  require('../assets/images/hospitals/Hos-11.jpg'),
  require('../assets/images/hospitals/Hos-12.jpg'),
  require('../assets/images/hospitals/Hos-13.jpg'),
  require('../assets/images/hospitals/Hos-14.jpg'),
  require('../assets/images/hospitals/Hos-15.jpg'),
  require('../assets/images/hospitals/Hos-16.jpg'),
  require('../assets/images/hospitals/Hos-17.jpg'),
  require('../assets/images/hospitals/Hos-18.jpg'),
  require('../assets/images/hospitals/Hos-19.jpg'),
  require('../assets/images/hospitals/Hos-20.jpg'),
  
];

const HospitalDetailsCard = ({ item, onReact }) => {
  const [image] = useState(() =>
    hospitalImages[Math.floor(Math.random() * hospitalImages.length)]
  );

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.hospitalImage} />

      <View style={styles.cardContent}>
        <Text style={styles.hospitalName}>{item.hospital_name}</Text>
        <Text style={styles.hospitalDetails}>City: {item.city}</Text>
        <Text style={styles.hospitalDetails}>State: {item.state}</Text>
        <Text style={styles.hospitalDetails}>ZIP Code: {item.zip_code}</Text>
      </View>

      <TouchableOpacity style={styles.reactButton} onPress={onReact}>
        <AntDesign
          name="heart"
          size={24}
          color={item.hasReacted ? '#FF4D4D' : '#CCCCCC'}
        />
        <Text style={styles.reactCount}>{item.reacts}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hospitalImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  hospitalDetails: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  reactButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactCount: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 5,
  },
});

export default HospitalDetailsCard;
