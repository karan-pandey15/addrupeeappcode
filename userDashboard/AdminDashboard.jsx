

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


const AdminDashboard = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Dummy data for carousel items
  const carouselItems = [
    {
      title: 'LOAN DATA',
      imageSource: require("../images/loanappImg.png"),
      navigationScreen: 'LoanData'
    },
    {
      title: 'CREDIT CARD',
      imageSource: require("../images/cardImg.png"),
      navigationScreen: 'CreditCardData'

    },
    {
      title: 'TL DETAILS',
      imageSource: require("../images/selfEmployeed.png"),
      navigationScreen: 'TlViewData'
    },
    {
      title: 'CUSTOMER DATA',
      imageSource: require("../images/salaryied.png"),
      navigationScreen: ''
    },
    {
      title: 'IMP LINKS',
      imageSource: require("../images/employee.png"),
      navigationScreen: 'ImpLinks'
    }
  ];

  const dataItems = [
    { title: 'Loan Data', imageSource: require("../images/loanappImg.png"), navigationScreen: 'LoanData' },
    { title: 'Credit Card', imageSource: require("../images/cardImg.png"), navigationScreen: 'CreditCardData' },
    { title: 'Customer Data', imageSource: require("../images/salaryied.png"), navigationScreen: '' },
    { title: 'TL Details', imageSource: require("../images/selfEmployeed.png"), navigationScreen: 'TlViewData' },
    { title: 'HR Details', imageSource: require("../images/userimage.png"), navigationScreen: 'Hrdata' },
    { title: 'Partner Details', imageSource: require("../images/employee.png"), navigationScreen: '' },
    { title: 'Customer Data', imageSource: require("../images/WelcomeeImg.png"), navigationScreen: '' },
    { title: 'Inquiry Data', imageSource: require("../images/salaryied.png"), navigationScreen: '' },
    { title: 'Imp Links', imageSource: require("../images/selfEmployeed.png"), navigationScreen: 'ImpLinks' }
  ];

  useEffect(() => {
    setData(dataItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={{ backgroundColor: "#3E9D7C", height: '100%' }}>
       <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(carouselItems[currentIndex].navigationScreen)}
        style={styles.carouselItem}
      >
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.boldText}>{carouselItems[currentIndex].title}</Text>
            <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }}>Click To View</Text>
          </View>
          <Image style={styles.image} source={carouselItems[currentIndex].imageSource} />
        </View>
      </TouchableOpacity> 
  
      </ScrollView>


      <ScrollView>
        <View style={styles.innerContainerTwo}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.navigationScreen)}
              style={styles.childContainerTwo}
            >
              <Image style={styles.imageTwo} source={item.imageSource} />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainerTwo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  childContainerTwo: {
    width: '30%',
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 10,
    marginTop: 10
  },
  imageTwo: {
    width: 100,
    height: 80,
    marginBottom: 5,
    marginTop: 6
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {},
  scrollViewContent: {
    alignItems: 'flex-start', // Align items to the start of the scroll view
  },
  carouselItem: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 5,
    padding: 10
  },
  textContainer: {
    marginRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default AdminDashboard;

