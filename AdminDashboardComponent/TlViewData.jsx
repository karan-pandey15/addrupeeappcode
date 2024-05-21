import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';

const TlViewData = (props) => {
  const handlePress = () => {
    props.navigation.navigate('TlDashboard');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.subContainer}>
            <Text style={styles.name}>Chahat Sharma</Text>
            <Text style={styles.email}>chahat212@gmail.com</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>See Details</Text>
              <Image
                source={require('../images/arrowImagee.png')}
                style={styles.detailsImage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.subContainer}>
            <Text style={styles.name}>Deepak Kumar</Text>
            <Text style={styles.email}>deepak33343@gmail.com</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>See Details</Text>
              <Image
                source={require('../images/arrowImagee.png')}
                style={styles.detailsImage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.subContainer}>
            <Text style={styles.name}>Sachin Kumar</Text>
            <Text style={styles.email}>sachinkumar@gmail.com</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>See Details</Text>
              <Image
                source={require('../images/arrowImagee.png')}
                style={styles.detailsImage}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#419F80"
  },
  subContainer: {
    marginTop: 40,
    width: '90%',
    height: 180,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  detailsContainer: {
    height: 50,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: "#17A2B8",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
  },
  detailsImage: {
    height: 50,
    width: 50,
    marginLeft: 20
  },
  detailsText: {
    fontSize: 20, fontWeight: 'bold', color: "#111"
  },
  name: {
    fontSize: 20,
    margin: 18,
    fontWeight:'bold',
    color:'black'
  },
  email: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default TlViewData;
