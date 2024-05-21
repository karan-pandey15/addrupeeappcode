import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,Alert  } from "react-native";
 
export default function Orderpage(props) {
 
  return (
    <ScrollView> 
        <View style={styles.orderContainer} >
             <Text style={styles.orderText} >
                Opps You have no order!
             </Text> 
             <TouchableOpacity
             style={styles.orderbutton}
             onPress={() => props.navigation.navigate('moreproduct')}
             >
              <Text style={styles.orderbuttontxt} >  GoTo Shop</Text>
             </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        justifyContent: 'center', // Horizontally centers items
        alignItems: 'center', // Vertically centers items
        marginTop:20 
      },
    orderText:{
        color:"red",
        fontWeight:'bold',
        fontSize:26
    },
    orderbutton:{
        borderWidth:2,
        height:40,
        width:100,
        flex: 1,
        justifyContent: 'center', // Horizontally centers items
        alignItems: 'center', // Vertically centers items
        marginTop:20, 

    },
    orderbuttontxt:{
        fontSize:14,
        fontWeight:'bold'
    }
});
