 

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { RadioButton } from 'react-native-paper';

// const EmployeeRegister = (props) => {
//   const navigation = useNavigation();
//   const [selectedValue, setSelectedValue] = useState('no');
//   const [showPassword, setShowPassword] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };


//   const handleRadioChange = value => {
//     setSelectedValue(value);

//     if (value === 'yes') {
//       // Set isModalVisible to true when "Yes" is selected
//       navigation.navigate('SelectEmpType');
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await fetch('https://api.addrupee.com/api/cust_register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: fullName,
//           email: email,
//           phone: phone,
//           password: password,
//         }),
//       });

//       const data = await response.json();
//       console.log(data); // Log the response from the backend

//       // Handle navigation or show success message based on the response
//       navigation.navigate('SelectType'); // Example navigation after successful registration
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error, show error message, etc.
//     }
//   };

//   return (
//     <View style={styles.RegisterContainer}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.RegisterBox}>
//           <View style={styles.imgContainer}>
//             <Image
//               source={require('../images/signUp.png')}
//               style={styles.logoImg}
//             />
//             <Text style={styles.heading}>Sign Up Now</Text>
//             <Text style={styles.paragraph}>
//               Please fill the fields and create an account
//             </Text>
//           </View>

//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Full Name"
//               value={fullName} 
//               onChangeText={text => setFullName(text)}
//               required  
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Email"
//               value={email}
//               onChangeText={text => setEmail(text)}
//               required  
//             />

//             <View style={styles.phoneContainer}>
//               <Text style={styles.countryCode}>+91</Text>
//               <TextInput
//                 style={styles.phoneInput}
//                 keyboardType="numeric"
//                 maxLength={10}
//                 placeholder="Enter Phone No"
//                 value={phone}
//                 onChangeText={text => setPhone(text)}
//                 required  
//               />
//             </View>

//             <TextInput
//               style={styles.input}
//               secureTextEntry={!showPassword}
//               placeholder="Create Password"
//               value={password}
//               onChangeText={text => setPassword(text)}
//               required  
//             />

//             <TouchableOpacity onPress={togglePasswordVisibility}>
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   marginBottom: 40,
//                   fontWeight: 'bold',
//                   color: '#111',
//                 }}>
//                 {showPassword ? 'Hide' : 'Show'} Password
//               </Text>
//             </TouchableOpacity>

//             <View>
//               <Text style={styles.label}>Are you someone from Addrupee?</Text>
//               <RadioButton.Group
//                 onValueChange={handleRadioChange}
//                 value={selectedValue}>
//                 <View>
//                   <RadioButton.Item label="Yes" value="yes" />
//                   <RadioButton.Item label="No" value="no" />
//                 </View>
//               </RadioButton.Group>
//             </View>

//             {selectedValue === 'no' && (
//               <View>
//                 <TouchableOpacity
//                   style={[styles.button, { alignSelf: 'center' }]} // Center the button horizontally
//                   onPress={handleRegister}>
//                   <Text style={{ fontSize: 20, color: '#fff' }}>Register A</Text>
//                 </TouchableOpacity>

//                 <View style={{ marginBottom: 50 }}>
//                   <Text
//                     style={{
//                       marginTop: 10,
//                       textAlign: 'center',
//                       color: '#111',
//                       fontWeight: '500',
//                     }}>
//                     Already have an account ?{' '}
//                     <TouchableOpacity
//                       onPress={() => props.navigation.navigate('CustomerLogin')}>
//                       <Text style={{ color: '#3E9D7C', fontWeight: 'bold' }}>
//                         Sign In
//                       </Text>
//                     </TouchableOpacity>
//                   </Text>
//                 </View>
//               </View>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   RegisterContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8edeb',
//     height: '100%',
//   },
//   RegisterBox: {
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   imgContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoImg: {
//     height: 120,
//     width: 160,
//     borderRadius: 50,
//   },
//   heading: {
//     marginTop: 15,
//     fontSize: 25,
//     color: '#111',
//     fontWeight: 'bold',
//   },
//   paragraph: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   input: {
//     height: 50,
//     borderBottomWidth: 0.5,
//     borderColor: 'black',
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderRadius: 0,
//     width: '100%',
//     color: '#111',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   inputContainer: {
//     marginTop: 20,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     width: '95%',
//   },
//   countryCode: {
//     marginRight: 10,
//     fontSize: 16,
//     color: '#111',
//     fontWeight: '600',
//   },
//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//     paddingHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   button: {
//     height: 60,
//     width: 340,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     backgroundColor: '#3E9D7C',
//     color: '#fff',
//     borderRadius: 10,
//     alignSelf: 'center', // Center the button horizontally
//   },
//   container: {
//     flex: 1,
//   },
//   picker: { flex: 1 },
//   signInContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   signInText: {
//     color: '#3E9D7C',
//     marginLeft: 5, // Add some left margin for spacing
//     marginRight: 5, // Add some right margin for spacing
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8edeb',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     width: '90%',
//     height: '80%',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     borderRadius: 10,
//     elevation: 10,
//   },
//   label: {
//     color: '#111',
//     fontWeight: '600',
//   },
//   modalBtn: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     marginRight: 20,
//   },

//   selectedRole: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // for Android
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   buttons: {
//     margin: 5,
//     padding: 10,
//     backgroundColor: '#fff', // Set your background color
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // for Android
//     width: 120,
//   },

//   buttons2: {
//     margin: 5,
//     padding: 10,
//     backgroundColor: '#fff', // Set your background color
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // for Android
//     width: 80,
//   },

//   buttons3: {
//     margin: 5,
//     padding: 10,
//     backgroundColor: '#fff', // Set your background color
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // for Android
//     width: 160,
//   },
//   containerBox: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 24,
//   },
//   cardContainer: {
//     width: '48%',
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   centeredCard: {
//     alignSelf: 'center',
//   },
//   cardBox: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderRadius: 10, // Rounded corners
//     overflow: 'hidden', // Ensure content stays within rounded corners
//   },
//   cardImg: {
//     width: 80,
//     height: 80,
//     marginTop: 10,
//     borderRadius: 40, // Round image
//   },
//   cardText: {
//     color: '#000', // Black color
//     marginTop: 10,
//     fontWeight: 'bold',
//     fontSize: 16, // Increased font size
//   },
//   elgText: {
//     fontSize: 20,
//     marginLeft: 150,
//     borderBottomWidth: 2,
//     color: '#0071CD',
//     borderBottomColor: '#0071CD',
//     marginTop: 10,
//   },

// });

// export default EmployeeRegister;




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
import { RadioButton } from 'react-native-paper';

const EmployeeRegister = (props) => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('no');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRadioChange = value => {
    setSelectedValue(value);

    if (value === 'yes') {
      // Set isModalVisible to true when "Yes" is selected
      navigation.navigate('SelectEmpType');
    }
  };

  const handleRegister = async () => {
    if (!fullName || !email || !phone || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('https://api.addrupee.com/api/cust_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phone,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data); // Log the response from the backend

      // Handle navigation or show success message based on the response
      navigation.navigate('SelectType'); // Example navigation after successful registration
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <View style={styles.RegisterContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.RegisterBox}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../images/signUp.png')}
              style={styles.logoImg}
            />
            <Text style={styles.heading}>Sign Up Now</Text>
            <Text style={styles.paragraph}>
              Please fill the fields and create an account
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              value={fullName} 
              onChangeText={text => setFullName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />

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
              secureTextEntry={!showPassword}
              placeholder="Create Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 40,
                  fontWeight: 'bold',
                  color: '#111',
                }}>
                {showPassword ? 'Hide' : 'Show'} Password
              </Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.label}>Are you someone from Addrupee?</Text>
              <RadioButton.Group
                onValueChange={handleRadioChange}
                value={selectedValue}>
                <View>
                  <RadioButton.Item label="Yes" value="yes" />
                  <RadioButton.Item label="No" value="no" />
                </View>
              </RadioButton.Group>
            </View>

            {selectedValue === 'no' && (
              <View>
                <TouchableOpacity
                  style={[styles.button, { alignSelf: 'center' }]} // Center the button horizontally
                  onPress={handleRegister}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                </TouchableOpacity>

                {error ? <Text style={{color: 'red', alignSelf: 'center'}}>{error}</Text> : null}

                <View style={{ marginBottom: 50 }}>
                  <Text
                    style={{
                      marginTop: 10,
                      textAlign: 'center',
                      color: '#111',
                      fontWeight: '500',
                    }}>
                    Already have an account ?{' '}
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('CustomerLogin')}>
                      <Text style={{ color: '#3E9D7C', fontWeight: 'bold' }}>
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            )}
          </View>
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
    alignSelf: 'center', // Center the button horizontally
  },
  container: {
    flex: 1,
  },
  picker: { flex: 1 },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  signInText: {
    color: '#3E9D7C',
    marginLeft: 5, // Add some left margin for spacing
    marginRight: 5, // Add some right margin for spacing
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8edeb',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  label: {
    color: '#111',
    fontWeight: '600',
  },
  modalBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 20,
  },

  selectedRole: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttons: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 120,
  },

  buttons2: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 80,
  },

  buttons3: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 160,
  },
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 24,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  centeredCard: {
    alignSelf: 'center',
  },
  cardBox: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensure content stays within rounded corners
  },
  cardImg: {
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 40, // Round image
  },
  cardText: {
    color: '#000', // Black color
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16, // Increased font size
  },
  elgText: {
    fontSize: 20,
    marginLeft: 150,
    borderBottomWidth: 2,
    color: '#0071CD',
    borderBottomColor: '#0071CD',
    marginTop: 10,
  },

});
export default EmployeeRegister;
