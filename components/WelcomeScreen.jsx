import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: '#f8edeb', flexGrow: 1 }}>
        <View style={styles.RegisterBox}>
          <Image style={{ height: 120, width: 230, marginTop: 20 }} source={require("../images/addrupeelogo.png")} />
          
          <Image source={require('../images/welcomeimg.png')} style={styles.welcomeImg} />
          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.paragraph}>
            Create an account to use the Features
          </Text>
          <Text style={styles.paragraph}> of this App</Text>

          <TouchableOpacity onPress={() => props.navigation.navigate('EmpRegister')} style={styles.button} >
            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>

          <Text onPress={() => props.navigation.navigate('CustomerLogin')} style={{ fontSize: 20, color: 'red', marginTop: 30, fontWeight: 'bold',marginBottom:35 }}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  RegisterBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  welcomeImg: {
    height: 300,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  heading: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 30,
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500',
    color: '#111',
  },
  button: {
    height: 50,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
});

export default WelcomeScreen;