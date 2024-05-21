import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import { View, StyleSheet, Image, Text } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustDashboard = ({navigation, props}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulating data fetching
  useEffect(() => {
    // Fetch your data here or replace it with your actual data-fetching logic
    const fetchData = async () => {
      // Simulated delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock data
      const mockData = [
        {title: 'Loan Data', imageSource: require('../images/loanAp.png')},
        {title: 'Credit Card', imageSource: require('../images/loanAp.png')},
        {title: 'Customer Data', imageSource: require('../images/loanAp.png')},
        {title: 'TL Details', imageSource: require('../images/loanAp.png')},
        {title: 'HR Details', imageSource: require('../images/loanAp.png')},
        {
          title: 'Partner Details',
          imageSource: require('../images/loanAp.png'),
        },
        {title: 'Customer Data', imageSource: require('../images/loanAp.png')},
        {title: 'Inquiry Data', imageSource: require('../images/loanAp.png')},
        {
          title: 'Important Links',
          imageSource: require('../images/loanAp.png'),
        },
      ];

      setData(mockData);
    };

    fetchData();
  }, []);

  // Array of image paths and names for each card
  const cards = [
    {image: require('../images/bankImg.png'), name: 'Personal Loan'},
    {image: require('../images/Homeloan.png'), name: 'Home Loan'},
    {image: require('../images/businessLoan.png'), name: 'Business Loan'},
    {image: require('../images/loanAp.png'), name: 'Loan Against Property'},
    {image: require('../images/loanappImg.png'), name: 'OD/OC'},
    {image: require('../images/cardImg.png'), name: 'Credit Card'},
    {image: require('../images/mutual.png'), name: 'Mutual Funds'},
    {image: require('../images/healths.png'), name: 'Health Insurance'},
    {image: require('../images/loanImg.png'), name: 'General Insurance'},
  ];

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy data for carousel items
  const carouselItems = [
    {
      title: 'PERSONAL LOAN',
      imageSource: require('../images/loanappImg.png'),
      navigationScreen: 'LendingPartners',
    },
    {
      title: 'CREDIT CARD',
      imageSource: require('../images/cardImg.png'),
      navigationScreen: 'LendingPartners',
    },
    {
      title: 'HOME LOAN',
      imageSource: require('../images/Homeloan.png'),
      navigationScreen: 'LendingPartners',
    },
    {
      title: 'OD/OC',
      imageSource: require('../images/salaryied.png'),
      navigationScreen: 'LendingPartners',
    },
    {
      title: 'BUSINESS LOAN',
      imageSource: require('../images/employee.png'),
      navigationScreen: 'BusinessLendingPartner',
    },
    // CustomerApplyForm
  ];

  useEffect(() => {
    // setData(dataItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={{backgroundColor: '#3D9C77', height: '100%'}}>
      {/* <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}

      style={{marginTop:30}}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(carouselItems[currentIndex].navigationScreen)}

        style={styles.carouselItem}
      >
        <View style={styles.innerContainer}>
            <Text></Text>
        </View>
      </TouchableOpacity> 
      </ScrollView> */}

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(carouselItems[currentIndex].navigationScreen)
          }
          style={styles.carouselItem}>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.boldText}>
                {carouselItems[currentIndex].title}
              </Text>
              <Text style={{marginTop: 20, color: 'green', fontWeight: 'bold'}}>
                Click To View
              </Text>
            </View>
            <Image
              style={styles.image}
              source={carouselItems[currentIndex].imageSource}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerBox}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardBox2}
              onPress={() =>
                navigation.navigate(
                  card.name === 'Business Loan'
                    ? 'BusinessLendingPartner'
                    : 'LendingPartners',
                )
              }>
              <Image source={card.image} style={styles.cardImg2} />
              <Text style={styles.cardText}>{card.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },

  childContainerTwo: {
    width: '30%',
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  imageTwo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Align items to the start of the scroll view
    marginTop: 30,
  },
  carouselItem: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Add padding to the top to align items vertically
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFF',
    elevation: 15,
    height: 140,
    marginBottom: 20,
    borderRadius: 15,
  },
  textContainer: {
    marginRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },

  scrollContainer: {
    // flex: 1,
    padding: 10,
    marginTop: 30,
  },
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 24,
  },
  cardBox2: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 5,
  },
  cardImg2: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  cardText: {
    color: '#81c3d7',
    marginTop: 10,
    fontWeight: 'bold',
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

export default CustDashboard;
