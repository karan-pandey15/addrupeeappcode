import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback,ScrollView } from 'react-native';
const BusinessLendingPartner = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleApplyPress = () => {
    // Handle first Apply Now button press
  };

  const handleOtherApplyPress = (index) => {
    // Handle other Apply Now button press
    setClickedIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setClickedIndex(null);
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>Our Lending Partners</Text>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          {/* <Image
            source={require('../images/hdfcbank.png')}
            style={styles.image}
          /> */}
          <Text style={{fontWeight:'bold',color:'#111',fontSize:18}} >Fresh Apply</Text>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => props.navigation.navigate('BusinessApplyfrom')}
          >
            <Text style={[styles.applyButtonText, { fontWeight: 'bold' }]}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Image
              source={require('../images/bankImgs.png')}
              style={styles.image}
            />
            <TouchableOpacity
              style={[styles.applyButton, { opacity: index === 0 ? 1 : 0.5 }]}
              onPress={() => handleOtherApplyPress(index)}
              disabled={index === 0 ? false : true}
            >
              <Text style={[styles.applyButtonText, { fontWeight: 'bold' }]}>Apply Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text>{clickedIndex !== null ? `Our Team is working in this and this feature will enable soon ` : 'Modal Content'}</Text>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
     backgroundColor:"#3F9E7E"
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop:30,
    fontWeight:'bold',
  },
  listContainer: {
    width: '90%',
    backgroundColor: '3F9E7E',
    borderRadius: 10,
    shadowColor: '#3F9E7E',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    marginBottom: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust opacity if needed
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    backgroundColor:'#fff'
    
  },
  applyButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    marginTop:10
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    top: '30%',
    left: '10%',
    right: '10%',
    alignItems: 'center',
    backgroundColor:"#3F9E7E"

  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default BusinessLendingPartner;
