import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const SelectEmpType = props => {
    const cards = [
        { image: require('../images/salaryied.png'), name: 'AQM', destination: 'AqmSignup' },
        { image: require('../images/employee.png'), name: 'TL', destination: 'TlSignup' },
        { image: require('../images/business.png'), name: 'ADMIN', destination: 'AdminSignup' },
        { image: require('../images/loanAp.png'), name: 'HR', destination: 'HrSignup' },
        { image: require('../images/student.png'), name: 'PARTNER', destination: 'PartnerSignup' },
      ];
  
      const handleCardPress = (destination) => {
        // Navigate to the corresponding screen based on the destination
        props.navigation.navigate(destination);
      };

      const navigation = useNavigation();    

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
          <View style={styles.container}>
          
              <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 30, fontWeight: 'bold' }}>
                Select Your Role
              </Text>
              <View style={styles.containerBox}>
                {cards.map((card, index) => (
                  <View key={index} style={[styles.cardContainer, index === cards.length - 1 && styles.centeredCard]}>
                    <TouchableOpacity style={styles.cardBox} onPress={() => handleCardPress(card.destination)}>
                      <Image source={card.image} style={styles.cardImg} />
                      <Text style={styles.cardText}>{card.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#f8edeb",
    
  },

  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 24,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 45,
    alignItems: 'center',
  },
  centeredCard: {
    alignSelf: 'center',
  },
  cardBox: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensure content stays within rounded corners
  },
  cardImg: {
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 40, // Round image
  },
  cardText: {
    color: '#000', // Black color
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16, // Increased font size
  },
  elgText: {
    fontSize: 20,
    marginLeft: 150,
    borderBottomWidth: 2,
    color: '#0071CD',
    borderBottomColor: '#0071CD',
    marginTop: 10,
  },
});

export default SelectEmpType;
