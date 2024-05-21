import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


const CustomerDashboard = (props) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  // Dummy data for carousel items
  const carouselItems = [
    {
      title: 'LOAN DATA',
      imageSource: require("../images/loanappImg.png"),
      navigationScreen: 'LendingPartners'
    },
    {
      title: 'CREDIT CARD',
      imageSource: require("../images/cardImg.png"),
      navigationScreen: 'LendingPartners'

    },
    {
      title: 'TL DETAILS',
      imageSource: require("../images/selfEmployeed.png"),
      navigationScreen: 'LendingPartners'
    },
    {
      title: 'CUSTOMER DATA',
      imageSource: require("../images/salaryied.png"),
      navigationScreen: 'LendingPartners'
    },
    {
      title: 'IMP LINKS',
      imageSource: require("../images/employee.png"),
      navigationScreen: 'LendingPartners'
    }
  ];

  useEffect(() => {
    // setData(dataItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.outerContainer}>

       
        <TouchableOpacity onPress={() => props.navigation.navigate('SalariedDashboard')}>

          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.fitstText} >PERSONAL LOAN</Text>
              <Text style={styles.secondText} >Get Up to</Text>
              <Text style={styles.boldText}>₹- 10L in 10 mins!</Text>
              <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }} >Apply now</Text>
            </View>
            <Image style={styles.image}
              source={require("../images/loanappImg.png")} />

          </View>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate('CustDashboard')}>

          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.fitstText} >BUSUNESS LOAN</Text>
              <Text style={styles.secondText} >Get Up to</Text>
              <Text style={styles.boldText}>₹- 50L in 10 mins!</Text>

              <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }} >Apply now</Text>
            </View>
            <Image style={styles.image}
              source={require("../images/WelcomeeImg.png")} />
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate('ReferShare')}>

          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.fitstText} >Refer To Friend</Text>
              <Text style={styles.secondText} >& Get Points</Text>
              <Text style={styles.boldText}>For 1 Refer get 200</Text>
              <Text style={{fontSize:20,color:'black',fontWeight:'bold'}} >Points</Text>

              <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }} >Refer Now</Text>
            </View>
            <Image style={styles.image}
              source={require("../images/shareImg.png")} />
          </View>

        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
  outerContainer: {
    marginTop: '20%',
    width: '100%',
    alignSelf: 'center',
    // borderRadius: 50, // Default border radius for other corners
    borderTopLeftRadius: 50, // Apply border radius only to the top-left corner
    borderTopRightRadius: 50, // Apply border radius only to the top-right corner
    backgroundColor: '#ffffff', // Add desired background color
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 10
  },

  innerContainer: {
    width: '100%',
    height: 200, // Assuming height of inner container
    borderRadius: 10,
    backgroundColor: '#ffffff', // Add desired background color
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  textContainer: {
    marginLeft: 10, // Adjust this value as needed for spacing
  },
  fitstText: {
    marginBottom: 5,
    fontSize: 15
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'black'
  },
  image: {
    width: 150, // Adjust according to your image size
    height: 200, // Adjust according to your image size
    resizeMode: 'contain', // or any other resizeMode value you prefer
  },
});

export default CustomerDashboard;
