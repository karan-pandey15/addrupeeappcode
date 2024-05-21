 
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// const PanCardDetails = (props) => {
//   const [gender, setGender] = useState('');

//   const handleSave = () => {
//     // You can perform additional validation or actions before saving the data
//     props.navigation.navigate('customerDashboard');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Pan Card Details</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Pan Card Number"
//           maxLength={16}
//           placeholderTextColor="#111"
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Date of Birth (dd/mm/yyyy)"
//           placeholderTextColor="#111"
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="PIN Code"
//           maxLength={6}
//           placeholderTextColor="#111"
//           keyboardType="numeric"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Religion"
//           placeholderTextColor="#111"
//         />
//       </View>
      

//       <Text style={styles.genderLabel}>Select Gender:</Text>
//       <View style={styles.genderContainer}>
//         <TouchableOpacity
//           style={[styles.genderOption, gender === 'Male' && styles.selectedGender]}
//           onPress={() => setGender('Male')}>
//           <Text style={styles.genderText}>Male</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.genderOption, gender === 'Female' && styles.selectedGender]}
//           onPress={() => setGender('Female')}>
//           <Text style={styles.genderText}>Female</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.genderOption, gender === 'Other' && styles.selectedGender]}
//           onPress={() => setGender('Other')}>
//           <Text style={styles.genderText}>Other</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={handleSave} style={styles.button}>
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     // marginTop: 50,

//     backgroundColor:"#f8edeb"
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 50,
//     marginBottom: 20,
//     color: '#111', // dark black color
//   },
//   inputContainer: {
//     marginBottom: 20,
//     width: '100%',
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#111', // dark black color
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     fontSize: 16,
//     color: '#111', // dark black color
//   },
//   button: {
//     height: 50,
//     width: 340,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 60,
//     backgroundColor: '#3E9D7C',
//     color: '#fff',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   genderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   genderLabel: {
//     marginRight: 10,
//     marginBottom: 20,
//     fontSize: 20,
//     color: '#111', // dark black color
//   },
//   genderOption: {
//     borderWidth: 1,
//     borderColor: '#111', // dark black color
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginRight: 20,
//   },
//   genderText: {
//     color: '#111', // dark black color
//   },
//   selectedGender: {
//     backgroundColor: '#3E9D7C',
//   },
// });

// export default PanCardDetails;


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PanCardDetails = (props) => {
  const [panCardNumber, setPanCardNumber] = useState('');
  const [dob, setDob] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [religion, setReligion] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!panCardNumber || !dob || !pinCode || !religion || !gender) {
      setError('Please fill in all the fields');
      return;
    }

    // You can perform additional validation or actions before saving the data
    props.navigation.navigate('customerDashboard');
  };

  return (
    <ScrollView>

     
    <View style={styles.container}>
      <Text style={styles.heading}>Pan Card Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pan Card Number"
          maxLength={16}
          placeholderTextColor="#111"
          value={panCardNumber}
          onChangeText={text => setPanCardNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (dd/mm/yyyy)"
          placeholderTextColor="#111"
          value={dob}
          onChangeText={text => setDob(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="PIN Code"
          maxLength={6}
          placeholderTextColor="#111"
          keyboardType="numeric"
          value={pinCode}
          onChangeText={text => setPinCode(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Religion"
          placeholderTextColor="#111"
          value={religion}
          onChangeText={text => setReligion(text)}
        />
      </View>
      
      <Text style={styles.genderLabel}>Select Gender:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderOption, gender === 'Male' && styles.selectedGender]}
          onPress={() => setGender('Male')}>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderOption, gender === 'Female' && styles.selectedGender]}
          onPress={() => setGender('Female')}>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderOption, gender === 'Other' && styles.selectedGender]}
          onPress={() => setGender('Other')}>
          <Text style={styles.genderText}>Other</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // marginTop: 50,

    backgroundColor:"#f8edeb"
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    color: '#111', // dark black color
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#111', // dark black color
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111', // dark black color
  },
  button: {
    height: 50,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
    marginBottom:110
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderLabel: {
    marginRight: 10,
    marginBottom: 20,
    fontSize: 20,
    color: '#111', // dark black color
  },
  genderOption: {
    borderWidth: 1,
    borderColor: '#111', // dark black color
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 20,
  },
  genderText: {
    color: '#111', // dark black color
  },
  selectedGender: {
    backgroundColor: '#3E9D7C',
  },
  errorText:{
    color:'red'
  }
});


export default PanCardDetails;
