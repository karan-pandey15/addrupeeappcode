import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AddToCart from "./AddtoCart";
 

const firstImg = require("../image/cartImg1.webp");
const secondImg = require("../image/cartImg2.webp");
const thirdImg = require("../image/cartImg1.webp");
const fourthImg = require("../image/cartImg2.webp");

export default function ProductView(props) {
  const imgArr = [firstImg, secondImg, thirdImg, fourthImg];
  const [img, setImg] = useState(imgArr[1]);

  return (
    <> 
    <ScrollView>
      <View style={styles.product_container}>
        <View style={styles.product}>
          <Image style={styles.main_img} source={img} />

          <View style={styles.product_small_img}>
            {imgArr.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => setImg(image)}>
                <Image style={styles.small_img} source={image} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.product_text_container}>
          <View></View>
          <View style={{marginTop:20}} >
            <Text style={styles.product_title}>Jemel Zerconia Plate</Text>
            <Text style={styles.product_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae{" "}
              <Text style={styles.read_more}>Read More</Text>...
            </Text>
            
            <TouchableOpacity style={styles.product_button}
            onPress={() => props.navigation.navigate('checkoutpage')}
            >
              <Text style={styles.button_text}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>  
      </ScrollView> 
    </>
  );
}

const styles = StyleSheet.create({
  product_container: {
    marginTop: 40,
  },
  product: {
    alignItems: "center",
  },
  main_img: {
    height: 340,
    width: 340,
  },
  product_small_img: {
    flexDirection: "row",
    marginTop: 10,
  },
  small_img: {
    margin:3,
    height: 80,
    width: 80,
  },
  product_text_container: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  product_title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  product_para: {
    color: "#494949",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 10,
  },
  read_more: {
    fontWeight: "600",
    color: "#494949",
  },
 
  
  product_button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: "#9B4D45",
    borderRadius: 5,
  },
  button_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
