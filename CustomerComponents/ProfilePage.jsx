import React from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const ProfilePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/usering.png')} style={styles.profileImage} />
          <Text style={styles.name}>Karan Pandey</Text>
        </View>
        <View style={styles.containers}>
          <View style={styles.twoInputContainer}>
            <TextInput style={styles.inputs} placeholder="Karan" />
            <TextInput style={styles.inputs} placeholder="Pandey" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="CGMP22...3343" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="+91 9569125048" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="15/01/2003" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Web Developer" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="AddRupee Noida" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="*****" />
        </View>
        <View style={styles.viewEditContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containers: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  twoInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputs: {
    height: 40,
    margin: 10,
    padding: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    fontSize: 18,
    color: '#111',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },
  name: {
    marginLeft: 20,
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    marginLeft: 10,
    marginTop: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  viewEditContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfilePage;
