import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const AqmSignup = props => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tlName, setTlName] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState('Select Branch Name');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    if (!fullName || !email || !phone || !tlName || !password || branch === 'Select Branch Name') {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const response = await fetch('https://api.addrupee.com/api/emp_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phone,
          TL_Name: tlName,
          password: password,
          Branch_Name: branch,
          userType: 'TL', // Assuming TL as the user type
        }),
      });

      const data = await response.json();
      console.log(data); // Log the response from the backend

      // Handle navigation or show success message based on the response
      props.navigation.navigate('EmpLogin'); // Example navigation after successful registration
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <View style={styles.RegisterContainer}>
      <ScrollView
        style={styles.RegisterBox}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../images/signUp.png')}
            style={styles.logoImg}
          />
          <Text style={styles.heading}>AQM Sign Up</Text>
          <Text style={styles.paragraph}>
            Please fill the fields and create an account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter FullName"
              value={fullName}
              onChangeText={text => setFullName(text)}
            />
          </View>
          <View style={styles.phoneContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.phoneInput}
              keyboardType="numeric"
              maxLength={10}
              placeholder="Enter Phone No"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter TL Name"
            value={tlName}
            onChangeText={text => setTlName(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            placeholder="Create Password"
            value={password}
            onChangeText={text => setPassword(text)}
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
          <Picker
            style={styles.picker}
            selectedValue={branch}
            onValueChange={itemValue => setBranch(itemValue)}>
            <Picker.Item label="Select Branch Name" />
            <Picker.Item label="Addrupee Noida" value="Noida" />
          </Picker>
          
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: '#111',
              fontWeight: '500',
            }}>
            Already have an account ?{' '}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EmpLogin')}>
              <Text style={{ color: '#3E9D7C', fontWeight: 'bold' }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8edeb',
    height: '100%',
  },
  RegisterBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 120,
    width: 160,
    borderRadius: 50,
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
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '95%',
  },
  countryCode: {
    marginRight: 10,
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  picker: {
    flex: 1,
    color: '#111',
    fontWeight: 'bold',
  },
});

export default AqmSignup;


