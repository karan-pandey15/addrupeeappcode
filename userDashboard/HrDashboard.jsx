import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const HrDashboard = () => {

    
  const [interviewedCandidate, setInterviewedCandidate] = useState([]);
  const [salaryOfferedCandidate, setSalaryOfferedCandidate] = useState([]);
  const [confirmedCandidate, setConfirmedCandidate] = useState([]);
  const [rejectedCandidate, setRejectedCandidate] = useState([]);
  const [hrEmailId, setHrEmailId] = useState(null);
  
  const [selectedFilter, setSelectedFilter] = useState("from1to31");

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('hrEmailId');
        if (storedEmail !== null) {
          setHrEmailId(storedEmail);
        }
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    fetchEmail();
  }, []);
  

  
  useEffect(() => {
    const fetchInterviewedCandidate = async () => {
      try {
        let data = await fetch(
          `https://api.addrupee.com/api/hr_interviewed_candidate/${hrEmailId}?filter=${selectedFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        let result = await data.json();
        setInterviewedCandidate(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInterviewedCandidate();
  }, [hrEmailId, selectedFilter]);

  const fetchSalaryOfferedCandidate = async () => {
    const Status = "Interviewed";
    let data = await fetch(
      `https://api.addrupee.com/api/hr_salary_offered_candidate/${hrEmailId}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setSalaryOfferedCandidate(result);
  };

  const fetchCanfirmedCandidateData = async () => {
    const Status = "Confirmed";
    let data = await fetch(
      `https://api.addrupee.com/api/fetch-confirmedCandidate-data/${hrEmailId}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setConfirmedCandidate(result);
  };

  const fetchRejectedCandidateData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/fetch-rejectedCandidate-data/${hrEmailId}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setRejectedCandidate(result);
  };


  useEffect(() => {
    fetchSalaryOfferedCandidate();
    fetchCanfirmedCandidateData();
    fetchRejectedCandidateData();
  }, [hrEmailId]);
  
  const handleNavigate = () => {
    Linking.openURL('https://addrupee.com/pages/employeesignin');
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
          <Picker
      style={styles.picker}
        selectedValue={selectedFilter}
        onValueChange={(itemValue) => setSelectedFilter(itemValue)}
      >
        <Picker.Item label="Select Date Filter" value="from1to31" />
        <Picker.Item label="From Last Day" value="lastday" />
        <Picker.Item label="From Last 7 Days" value="last7days" />
        <Picker.Item label="From Last 30 Days" value="last30days" />
        <Picker.Item label="All Data" value="all" />
      </Picker>
      <View style={styles.container}>
        <View style={styles.childContainer}>
        <TouchableOpacity  onPress={handleNavigate} style={[styles.child, { backgroundColor: '#17A2B8' }]}  >
          <View  >
            <Text style={styles.childText}>INTERVIEWED</Text>
            <Text style={styles.childdataText}>{interviewedCandidate.length}</Text>
          </View>
          </TouchableOpacity>
        </View>

        
        <View style={styles.childContainer}>
        <TouchableOpacity  onPress={handleNavigate} style={[styles.child, { backgroundColor: '#FFC107' }]}  >
          <View  >
            <Text style={styles.childText}>SALARY OFFERED</Text>
            <Text style={styles.childdataText}>{salaryOfferedCandidate.length}</Text>
          </View>
        </TouchableOpacity>
        </View>
        
        <View style={styles.childContainer}>
        <TouchableOpacity  onPress={handleNavigate} style={[styles.child, { backgroundColor: '#28A745' }]}  >
          <View  >
            <Text style={styles.childText}>TOTAL EMPLOYEES</Text>
            <Text style={styles.childdataText}>{confirmedCandidate.length}</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
        <TouchableOpacity  onPress={handleNavigate} style={[styles.child, { backgroundColor: '#DC3545' }]}  >
          <View>
            <Text style={styles.childText}>REJECTED (Follow-up)</Text>
            <Text style={styles.childdataText}>{rejectedCandidate.length}</Text>
          </View>
          </TouchableOpacity>
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
   picker: {
    color: '#111',
    fontWeight: 'bold',
    backgroundColor:"#f8edeb",
    padding:30
    
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
    marginTop: 15,
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

export default HrDashboard;
