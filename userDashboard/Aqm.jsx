import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';




const AqmDashboard = () => {

  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('employeeEmail');
        if (storedEmail !== null) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    fetchEmail();
  }, []);

  // Loan States
  const [allData, setData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  // Card States
  const [cardAllData, setCardAllData] = useState([]);
  const [cardPendingData, setCardPendingData] = useState([]);
  const [cardApprovedData, setCardApprovedData] = useState([]);
  const [cardRejectData, setCardRejectedData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("from1to31");


  // Loan Fetch Data
  const fetchAlldata = async () => {
    let data = await fetch(
      `https://api.addrupee.com/api/pendingdata/${email}?filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setData(result);
  };

  const fetchPendingData = async () => {
    const Status = "Pending";

    let data = await fetch(
      `https://api.addrupee.com/api/getpendingdatas/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setPendingData(result);
  };

  const fetchApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `https://api.addrupee.com/api/approved-data/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setApprovedData(result);
  };

  const fetchRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/rejected-data/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setRejectedData(result);
  };

  // Fetch Card Data
  const fetchCardAlldata = async () => {
    let data = await fetch(
      `https://api.addrupee.com/api/card_pendingdata/${email}?filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardAllData(result);
  };

  const fetchCardPendingData = async () => {
    const Status = "Pending";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getpendingdatas/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardPendingData(result);
  };

  const fetchCardApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `https://api.addrupee.com/api/card_approved-data/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardApprovedData(result);
  };

  const fetchCardRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/card_rejected-data/${email}?Status=${Status}&filter=${selectedFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardRejectedData(result);
  };

  const handleNavigate = () => {
    Linking.openURL('https://addrupee.com/pages/employeesignin');
  };

  useEffect(() => {
    fetchAlldata();
    fetchPendingData();
    fetchApprovedData();
    fetchRejectedData();
    fetchCardAlldata();
    fetchCardPendingData();
    fetchCardApprovedData();
    fetchCardRejectedData();
  }, [selectedFilter]);

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
        <Text style={styles.heading}>Loan Details</Text> 
        <View style={styles.childContainer}> 
          <TouchableOpacity onPress={handleNavigate}  style={[styles.child, { backgroundColor: '#17A2B8' }]}>
          <View  >
            <Text style={styles.childText}>Login Leads</Text>
            <Text style={styles.childdataText}>{allData.length}</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={handleNavigate} style={[styles.child, { backgroundColor: '#FFC107', marginLeft: 20 }]}>
          
          <View style={[styles.child, { backgroundColor: '#FFC107', marginLeft: 20 }]}>
            <Text style={styles.childText}>Pending Leads</Text>
            <Text style={styles.childdataText}>{pendingData.length}</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
        <TouchableOpacity  onPress={handleNavigate}  style={[styles.child, { backgroundColor: '#28A745' }]}>
          
          <View >
            <Text style={styles.childText}>Disbursed Leads</Text>
            <Text style={styles.childdataText}>{approvedData.length}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleNavigate}  style={[styles.child, { backgroundColor: '#DC3545', marginLeft: 20 }]}>
          
           
          <View  >
            <Text style={styles.childText}>Rejected Leads</Text>
            <Text style={styles.childdataText}>{rejectData.length}</Text>
          </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Credit Card</Text>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#17A2B8' }]}>
            <Text style={styles.childText}>Login Leads</Text>
            <Text style={styles.childdataText}>{cardAllData.length}</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#FFC107', marginLeft: 20 }]}>
            <Text style={styles.childText}>Pending Leads</Text>
            <Text style={styles.childdataText}>{cardPendingData.length}</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#28A745' }]}>
            <Text style={styles.childText}>{cardApprovedData.length}</Text>
            <Text style={styles.childdataText}>0</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#DC3545', marginLeft: 20 }]}>
            <Text style={styles.childText}>Rejected Leads</Text>
            <Text style={styles.childdataText}>{cardRejectData.length}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start', // Align items to the left
    backgroundColor: "#f8edeb"

  },
  picker: {
    color: '#111',
    fontWeight: 'bold',
    backgroundColor: "#f8edeb",
    padding: 30
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  childContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  child: {
    flex: 1,
    height: 100,
    borderRadius: 10,
  },
  childText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10,

  },
  childdataText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 14,
    marginLeft: 15
  }

});

export default AqmDashboard;
