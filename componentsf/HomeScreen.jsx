import React, { useState,useEffect } from 'react';
import { View, Image, ScrollView,  Dimensions, StyleSheet, Animated, TouchableOpacity, Text, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { add } from "../Redux/Cartslice";

const data = [
  {
    id: 1,
    image: require('../image/carimgthree.jpg'),
    title: "",
    price: 1200,
  },
  {
    id: 2,
    image: require('../image/carimgtwo.jpg'),
    title: "",
    price: 300,
  },
  {
    id: 3,
    image: require('../image/loginimg.jpg'),
    title: "",
    price: 1200,
  } 
];

const { width } = Dimensions.get('window');

const YourComponent = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const dispatch = useDispatch();

  const items = [
    {
      id: 1,
      image: require('../image/cartImg1.webp'),
      title: "Mens Cream.",
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


  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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
    <ScrollView style={styles.container}>
      <View  >
        {/* Search input */}
        <TextInput
          style={styles.searchInput}
          // style={{borderWidth:2,width:'80%',alignSelf:'center',borderColor: '#ccc',marginTop:10,marginBottom:10,fontSize:20,fontWeight:'400',padding:10,height:20}}
          placeholder="Search..."
          value={searchKeyword}
          onChangeText={text => {
            setSearchKeyword(text);
            filterItems(text);
          }}
        />

        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../image/homeScreen.webp')}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* Scrollable container */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderItems()}
        </ScrollView>
      </View>


      <View style={carouselStyles.container}>
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0, width]
          });

          return (
            <Animated.View
              style={[
                carouselStyles.imageContainer,
                { transform: [{ translateX }] }
              ]}
            >
              <Image source={item.image} style={carouselStyles.image} />
              <View style={carouselStyles.textContainer}> 
              </View>
            </Animated.View>
          );
        }}
      />
    </View>

    <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderItems()}
        </ScrollView>
    </ScrollView>
    
  );
};

const carouselStyles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:10,
    width: '90%',
    height: 200,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  imageContainer: {
    width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  textContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    left: 20,
    right: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111'
  },
  price: {
    fontSize: 18,
    color: 'white'
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7EE',
  },
  searchInput: {
    position: 'absolute',
    zIndex: 1,
    width: '80%', 
    padding:10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    color:"#111",
    backgroundColor:'#fff',
    fontSize:20,
    borderRadius:5

  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemContainer: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemImage: {
    width: '100%',
    height: 200,
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

export default YourComponent;
