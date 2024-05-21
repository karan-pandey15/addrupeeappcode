import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const SignUppage = (props) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  // Navigation hook
  const navigation = useNavigation();

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle input changes
  const handleInputChange = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };


  
  
  return (
    <View style={styles.RegisterContainer}>
      <ScrollView
        style={styles.RegisterBox}
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      >
        <View style={styles.imgContainer}>
          <Image
            source={require('../image/loginimg.jpg')}
            style={styles.logoImg}
          />
          <Text style={styles.heading}>SignUp Now</Text>
          
        </View>

        <View style={styles.inputContainer}>

        <TextInput
            style={styles.input}  
            placeholder="Enter Name"
          />


          <TextInput
            style={styles.input}
            value={loginData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter Email"
          />

          <TextInput
            style={styles.input}
            value={loginData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={!showPassword}
            placeholder="Create Password"
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text
              style={{
                marginLeft: 10,
                marginBottom: 20,
                fontWeight: 'bold',
                color: '#111',
              }}>
              {showPassword ? 'Hide' : 'Show'} Password
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('homescreenpage')} >
          <Text style={{ fontSize: 20, color: '#fff' }}>SignUp</Text>
        </TouchableOpacity> 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    marginTop:15,
    height: 220,
    width: 340,
    borderRadius: 10,
  },
  heading: {
    marginTop: 15,
    fontSize: 25,
    color: '#111',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    marginBottom: 12,
    marginTop: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#774F36',
    color: '#fff',
    borderRadius: 10,
    alignSelf: 'center',  
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SocialImg: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUppage;
