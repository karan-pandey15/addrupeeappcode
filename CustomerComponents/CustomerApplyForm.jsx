// import React, { useState } from 'react';
// import {
//   View,
//   Image,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// const CustomerApplyForm = (props) => {

//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>Fill Basic Details</Text>
//           <View style={styles.inputContainer}>

//           <TextInput
//               style={styles.input}
//               placeholder="Enter Loan Type"
//               placeholderTextColor="#333" // Set placeholder text color
//             />

            
//           <TextInput
//               style={styles.input}
//               placeholder="Select Bank"
//               placeholderTextColor="#333" // Set placeholder text color
//             />

            

//             <TextInput
//               style={styles.input}
//               placeholder="Enter FullName"
//               placeholderTextColor="#333" // Set placeholder text color
//             />


//             <TextInput
//               style={styles.input}
//               placeholder="Father Name"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Mother Name"
//               placeholderTextColor="#333"
//             />


//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Mobile No"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               placeholder='Mail Id'
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Pan Card No"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Aadhar Card No"
//               placeholderTextColor="#333"
//             />


//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="dd/mm/yyyy"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Gender"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Religion"
//               placeholderTextColor="#333"
//             />

//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Applied Amount"
//               placeholderTextColor="#333"
//             />



//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Per Month Salary"
//               placeholderTextColor="#333"
//             />




//             <TouchableOpacity
//               style={[styles.button, { alignSelf: 'center' }]} // Center the button horizontally
//               onPress={() => props.navigation.navigate('CustDashboard')}
//             >
//               <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };



// export default CustomerApplyForm;

import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomerApplyForm = () => {
  const [loanType, setLoanType] = useState('');
  const [bankName, setBankName] = useState('');
  const [customerName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [mailId, setMailId] = useState('');
  const [panCardNo, setPanCardNo] = useState('');
  const [AadharCardNo, setAadharCardNo] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [appliedAmount, setAppliedAmount] = useState('');
  const [salary, setSalary] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [companyName, setcompanyName] = useState('');


  const navigation = useNavigation();

  
  const handleSubmit = async () => {
    // Check if all required fields are filled
    if (
      !loanType ||
      !bankName ||
      !customerName ||
      !fatherName ||
      !motherName ||
      !mobileNo ||
      !mailId ||
      !panCardNo ||
      !AadharCardNo ||
      !dob ||
      !gender ||
      !religion ||
      !appliedAmount ||
      !salary ||
      !customerLocation ||
      !companyName
    ) {
      // If any required field is empty, alert the user
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('https://api.addrupee.com/api/cust_loan_apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loanType,
          bankName,
          customerName,
          fatherName,
          motherName,
          mobileNo,
          mailId,
          panCardNo,
          AadharCardNo,
          dob,
          gender,
          religion,
          appliedAmount,
          salary,
          customerLocation,
          companyName,
        }),
      });

      const data = await response.json();
      console.log(data); // Log the response from the backend

      // Clear input fields
      setLoanType('');
      setBankName('');
      setFullName('');
      setFatherName('');
      setMotherName('');
      setMobileNo('');
      setMailId('');
      setPanCardNo('');
      setAadharCardNo('');
      setDob('');
      setGender('');
      setReligion('');
      setAppliedAmount('');
      setSalary('');
      setCustomerLocation('');
      setcompanyName('');

      // Navigate to the next page
      navigation.navigate('CustDashboard');
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message, etc.
    }
  };


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Fill Basic Details</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Loan Type"
              placeholderTextColor="#333"
              value={loanType}
              onChangeText={text => setLoanType(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Select Bank"
              placeholderTextColor="#333"
              value={bankName}
              onChangeText={text => setBankName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              placeholderTextColor="#333"
              value={customerName}
              onChangeText={text => setFullName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Father Name"
              placeholderTextColor="#333"
              value={fatherName}
              onChangeText={text => setFatherName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mother Name"
              placeholderTextColor="#333"
              value={motherName}
              onChangeText={text => setMotherName(text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Mobile No"
              placeholderTextColor="#333"
              value={mobileNo}
              onChangeText={text => setMobileNo(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Mail Id'
              placeholderTextColor="#333"
              value={mailId}
              onChangeText={text => setMailId(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Your Location'
              placeholderTextColor="#333"
              value={customerLocation}
              onChangeText={text => setCustomerLocation(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Your Company Name'
              placeholderTextColor="#333"
              value={companyName}
              onChangeText={text => setcompanyName(text)}
            />
            
            

            <TextInput
              style={styles.input}
              placeholder="Pan Card No"
              placeholderTextColor="#333"
              value={panCardNo}
              onChangeText={text => setPanCardNo(text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Aadhar Card No"
              placeholderTextColor="#333"
              value={AadharCardNo}
              onChangeText={text => setAadharCardNo(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="dd/mm/yyyy"
              placeholderTextColor="#333"
              value={dob}
              onChangeText={text => setDob(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor="#333"
              value={gender}
              onChangeText={text => setGender(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Religion"
              placeholderTextColor="#333"
              value={religion}
              onChangeText={text => setReligion(text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Applied Amount"
              placeholderTextColor="#333"
              value={appliedAmount}
              onChangeText={text => setAppliedAmount(text)}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Per Month Salary"
              placeholderTextColor="#333"
              value={salary}
              onChangeText={text => setSalary(text)}
            />
            <TouchableOpacity
              style={[styles.button, { alignSelf: 'center' }]}
              onPress={handleSubmit}
            >
              <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderBottomWidth: 1,
    borderColor: '#333', // Set border color
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#333', // Set text color
    fontWeight: '600',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    height: 45,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
});

export default CustomerApplyForm;



