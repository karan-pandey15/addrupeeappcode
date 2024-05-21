import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CusCompanyAddress = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [income, setIncome] = useState('');

  const handleSaveCompanyAddress = () => {
    if (!companyName || !companyAddress || !locality || !pincode || !city || !income ) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if(pincode.length!=6){
      Alert.alert('invalid pin code')
    }

    // Proceed with saving the address or navigation
    navigation.navigate('PanCardDetails');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/CompadressImg.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Company Details?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setCompanyName}
            value={companyName}
            placeholder="Company Name"
            placeholderTextColor="#111"
          />

          <TextInput
            style={styles.input}
            onChangeText={setCompanyAddress}
            value={companyAddress}
            placeholder="Company Address"
            placeholderTextColor="#111"
          />

          <TextInput
            style={styles.input}
            onChangeText={setLocality}
            value={locality}
            placeholder="Locality / Area"
            placeholderTextColor="#111"
          />

          <View style={styles.twoInputContainer}>
            <View style={styles.twoInput}>
              <TextInput
                style={styles.input}
                onChangeText={setPincode}
                value={pincode}
                placeholder="Pincode"
                keyboardType="numeric"
                placeholderTextColor="#111"
              />
            </View>
            <View style={styles.twoInput}>
              <TextInput
                style={styles.input}
                onChangeText={setCity}
                value={city}
                placeholder="City"
                placeholderTextColor="#111"
              />
            </View>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={setIncome}
            value={income}
            placeholder="Monthly in-hand income"
            keyboardType="numeric"
            placeholderTextColor="#111"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSaveCompanyAddress}>
              <Text style={{ fontSize: 20, color: '#fff' }}>
                Save Company Address
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8edeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 15,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  textContainer: {
    padding: 20,
  },
  text: {
    color: '#111',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#111',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
  twoInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twoInput: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    height: 55,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
});

export default CusCompanyAddress;
