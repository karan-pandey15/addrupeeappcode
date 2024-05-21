import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const LoanData = () => {
  
  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

   // Loan State
   const [allData, setData] = useState([]);
   const [pendingData, setPendingData] = useState([]);
   const [approvedData, setApprovedData] = useState([]);
   const [rejectData, setRejectedData] = useState([]);
 
   // Card State
 
   const [allCardData, setCardData] = useState([]);
   const [pendingCardData, setCardPendingData] = useState([]);
   const [approvedCardData, setApprovedCardData] = useState([]);
   const [rejectCardData, setRejectedCardData] = useState([]);
 
  //  const parseAmount = (amountString) => {
  //    if (typeof amountString === "string") {
  //      const cleanedAmount = amountString.replace(/[,\s]/g, "");
  //      return isNaN(cleanedAmount) ? 0 : Number(cleanedAmount);
  //    }
  //    return 0;
  //  };
 
  //  const sumLoginLeads = allData.reduce(
  //    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
  //    0
  //  );
 
  //  const sumPending = pendingData.reduce(
  //    (pen, item) => pen + parseAmount(item.Loan_Amount_Applied),
  //    0
  //  );
 
  //  const sumDisbursed = approvedData.reduce(
  //    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
  //    0
  //  );
 
  //  const sumRejected = rejectData.reduce(
  //    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
  //    0
  //  );
 
  //  const numericRepresentation = sumLoginLeads.toLocaleString();
  //  const wordsRepresentation = numberToWords.toWords(sumLoginLeads);
 
  //  const PendingnumericRepresentation = sumPending.toLocaleString();
  //  const PendingwordsRepresentation = numberToWords.toWords(sumPending);
 
  //  const DisnumericRepresentation = sumDisbursed.toLocaleString();
  //  const DiswordsRepresentation = numberToWords.toWords(sumDisbursed);
 
  //  const RejnumericRepresentation = sumRejected.toLocaleString();
  //  const RejwordsRepresentation = numberToWords.toWords(sumRejected);
 
   const fetchAlldata = async () => {
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/fetchAdminAlldata?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`Error: ${data.status} - ${data.statusText}`);
       }
 
       let result = await data.json();
       setData(result);
     } catch (error) {
       console.error("Error fetching data:", error.message);
     }
   };
 
   const fetchPendingData = async () => {
     const Status = "Pending";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getpendingadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setPendingData(result);
     } catch (error) {
       console.error("Error fetching pending data:", error.message);
     }
   };
 
   const fetchApprovedData = async () => {
     const Status = "Disbursed";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getdisbursedadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setApprovedData(result);
     } catch (error) {
       console.error("Error fetching approved data:", error.message);
     }
   };
 
   const fetchRejectedData = async () => {
     const Status = "Rejected";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getrejectedadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setRejectedData(result);
     } catch (error) {
       console.error("Error fetching rejected data:", error.message);
     }
   };
 
   // Set Admin card
   const fetchCardAlldata = async () => {
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/fetchCardAdminAlldata?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`Error: ${data.status} - ${data.statusText}`);
       }
 
       let result = await data.json();
       setCardData(result);
     } catch (error) {
       console.error("Error fetching data:", error.message);
     }
   };
 
   const fetchCardPendingData = async () => {
     const Status = "Pending";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getCardpendingadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setCardPendingData(result);
     } catch (error) {
       console.error("Error fetching pending data:", error.message);
     }
   };
 
   const fetchCardApprovedData = async () => {
     const Status = "Disbursed";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getCarddisbursedadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setApprovedCardData(result);
       
     } catch (error) {
       console.error("Error fetching approved data:", error.message);
     }
   };
 
   const fetchCardRejectedData = async () => {
     const Status = "Rejected";
 
     try {
       let data = await fetch(
         `https://api.addrupee.com/api/getCardrejectedadmindatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
         {
           method: "GET",
           credentials: "include",
           headers: { "Content-Type": "application/json" },
         }
       );
 
       if (!data.ok) {
         throw new Error(`HTTP error! Status: ${data.status}`);
       }
 
       let result = await data.json();
       setRejectedCardData(result);
     } catch (error) {
       console.error("Error fetching rejected data:", error.message);
     }
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
   }, [selectedFilter, selectedBankFilter]);

 

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
          <View style={[styles.child, { backgroundColor: '#17A2B8' }]}>
            <Text style={styles.childText}>Login Leads</Text>
            <Text style={styles.childdataText}>{allData.length}</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#FFC107', marginLeft: 20 }]}>
            <Text style={styles.childText}>Pending Leads</Text>
            <Text style={styles.childdataText}>{pendingData.length}</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#28A745' }]}>
            <Text style={styles.childText}>Disbursed Leads</Text>
            <Text style={styles.childdataText}>{approvedData.length}</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#DC3545', marginLeft: 20 }]}>
            <Text style={styles.childText}>Rejected Leads</Text>
            <Text style={styles.childdataText}>{rejectData.length}</Text>
          </View>
        </View>

        <Text style={styles.heading}>Credit Card</Text> 
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#17A2B8' }]}>
            <Text style={styles.childText}>Login Leads</Text>
            <Text style={styles.childdataText}>{allCardData.length}</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#FFC107', marginLeft: 20 }]}>
            <Text style={styles.childText}>Pending Leads</Text>
            <Text style={styles.childdataText}>{pendingCardData.length}</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={[styles.child, { backgroundColor: '#28A745' }]}>
            <Text style={styles.childText}>Disbursed Leads</Text>
            <Text style={styles.childdataText}>{approvedCardData.length}</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#DC3545', marginLeft: 20 }]}>
            <Text style={styles.childText}>Rejected Leads</Text>
            <Text style={styles.childdataText}>{rejectCardData.length}</Text>
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
    backgroundColor:'#f8edeb'
    
  },
  picker: {
    color: '#111',
    fontWeight: 'bold',
    backgroundColor:"#f8edeb",
    padding:30
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20
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
    fontSize: 18,
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

export default LoanData;
