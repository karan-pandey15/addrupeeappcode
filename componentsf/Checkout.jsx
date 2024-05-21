import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

const cartData = [
  { id: 1, name: "Product 1", image: require("../image/cartImg1.webp") },
  { id: 2, name: "Product 2", image: require("../image/cartImg2.webp") },
  { id: 3, name: "Product 3", image: require("../image/cartImg3.webp") },
  { id: 4, name: "Product 4", image: require("../image/cartImg1.webp") },
];

export default function Checkout(props) {
  const [cartItems, setCartItems] = useState(cartData);
  const [showItems, setShowItems] = useState(true);

  const handleRemoveItem = (itemId) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => removeItem(itemId) }
      ],
      { cancelable: false }
    );
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    if (updatedCartItems.length === 0) {
      setShowItems(false);
    }
  };

  const handleCheckout = () => {
    Alert.alert("Database Error", "Database is not connected. Unable to checkout.");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {showItems && cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}

        {!showItems && (
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>
              Oops! You have no orders.
            </Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => props.navigation.navigate('moreproduct')}
            >
              <Text style={styles.orderButtonText}>Go To Shop</Text>
            </TouchableOpacity>
          </View>
        )}

        {showItems && (
          <View style={styles.checkoutContainer}>
            <Text style={styles.totalText}>Total: ₹999</Text>
            <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continueShopping}
              onPress={() => props.navigation.navigate('moreproduct')}
            >
              <Text style={styles.continueShoppingText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  orderContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  orderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: "#1C4DD8",
    padding: 15,
    borderRadius: 5,
  },
  orderButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#9B4D45",
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 'bold'
  },
  checkoutContainer: {
    marginTop: 20,
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#1C4DD8",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginTop: 10
  },
  continueShopping: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 10
  },
  checkoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
  continueShoppingText: {
    color: '#111',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
