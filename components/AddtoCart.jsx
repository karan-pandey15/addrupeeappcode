import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
 
const AddToCart =  (props) => { 
      

  const items = [
    {
      id: 1,
      image: require('../image/cartImg1.webp'),
      title: "Zirconia Cream.",
      price: 1200,
    },
    {
      id: 2,
      image: require('../image/cartImg2.webp'),
      title: "Gold Plated Cream",

      price: 300,
    },
    {
        id: 3,
        image: require('../image/cartImg3.webp'),
        title: "Zirconia Studded Sapphire Blue.",
        price: 1200,
      },
      {
        id: 4,
        image: require('../image/cartImg1.webp'),
        title: "Gold Plated Cubic Zirconia",
        price: 230,
      },
      {
        id: 5,
        image: require('../image/cartImg2.webp'),
        title: "Gold Plated Cream",
        price: 420,
      },
      {
        id: 6,
        image: require('../image/cartImg3.webp'),
        title: "Gold Plated Cubic ",
        price: 144,
      }, 
  ];


 

  return (
    <View style={styles.container}> 
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {items.map((item) => (
          <TouchableOpacity  
          key={item.id} style={styles.itemContainer} 
          
          onPress={() => props.navigation.navigate('productview')}
          >
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
              <TouchableOpacity  
               style={styles.addToCartButton} >
                <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FCF7EE', 
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10, 
  },
  itemContainer: {
    width: '48%', // Two items per row with some gap between them
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
  },
  itemDetails: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: '#9B4D45',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddToCart;
