 

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { add } from "../Redux/Cartslice";

const AddToCart = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const dispatch = useDispatch();

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

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  // Function to filter items based on search keyword
  const filterItems = (keyword) => {
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // Render either filtered items or all items based on search keyword presence
  const renderItems = () => {
    const itemsToRender = searchKeyword ? filteredItems : items;
    return itemsToRender.map(item => (
      <TouchableOpacity
        key={item.id}
        style={styles.itemContainer}
        onPress={() => props.navigation.navigate('productview')}
      >
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>₹{item.price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={[styles.searchInput, { color: 'black', fontWeight: 'bold' }]}
        placeholder="Search..."
        value={searchKeyword}
        onChangeText={text => {
          setSearchKeyword(text);
          filterItems(text);
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderItems()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#FCF7EE',
  },
 
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 30, // Adjust based on the height of the fixed TextInput
    paddingBottom:60
  },
  itemContainer: {
    width: '48%', // Two items per row with some gap between them
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: { 
    zIndex: 1,
    width: '80%', 
    padding:10,
    marginTop: 20, 
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    color:"#111",
    backgroundColor:'#fff',
    fontSize:20,
    borderRadius:5, 
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
