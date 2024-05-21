import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Hrdata = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#17A2B8' }]}>
            <Text style={styles.childText}>INTERVIEWED</Text>
            <Text style={styles.childdataText}>0</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#FFC107' }]}>
            <Text style={styles.childText}>SALARY OFFERED</Text>
            <Text style={styles.childdataText}>0</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#28A745' }]}>
            <Text style={styles.childText}>TOTAL EMPLOYEES</Text>
            <Text style={styles.childdataText}>0</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#DC3545' }]}>
            <Text style={styles.childText}>REJECTED (Follow-up)</Text>
            <Text style={styles.childdataText}>0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor:"#f8edeb"
    
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  child: {
    width: '90%',
    height: 120,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  childText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    marginTop: 14,
  },
  childdataText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 14,
    marginLeft: 15,
  },
});

export default Hrdata;
