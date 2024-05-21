import React from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerComponent/DrawerContent";
import WelcomeScreen from "./components/WelcomeScreen";
import EmployeeRegister from "./EmpComponents/EmpRegister";
import EmployeeLogin from "./EmpComponents/EmpLogin";
import EmpDashboard from "./EmpComponents/EmpDashboard";
import EmpForm from "./EmpComponents/EmpForm";
import TermsAndConditions from "./EmpComponents/TermsAndConditions";
import ContactScreen from "./EmpComponents/ContactScreen";
import ReferShare from "./EmpComponents/ReferShare";
import Tldashboard from "./EmpComponents/Tldashboard";
import SelectType from "./CustomerComponents/SelectType";
// import AqmSignup from './SignupComponents/AqmSignup';
import TlSignup from "./SignupComponents/TlSignup";
import HrSignup from "./SignupComponents/HrSignup";
import AdminSignup from "./SignupComponents/AdminSignup";
import CusAddress from "./CustomerComponents/CusAddress";
import CusCompanyAddress from "./CustomerComponents/CusCompanyAddress";
import CustomerAccount from "./CustomerComponents/CustomerAccount";
import Elegibility from "./EmpComponents/Elegibility";
import knowledge from "./EmpComponents/Knowledge";
import CustomerDashboard from "./CustomerComponents/CustomerDashboard";
import LendingPartners from "./CustomerComponents/LendingPartners";
import ProfilePage from "./CustomerComponents/ProfilePage";
import PanCardDetails from "./CustomerComponents/PanDetails";
import AqmDashboard from "./userDashboard/Aqm";
import TlDashboard from "./userDashboard/TlDashboard";
import HrDashboard from "./userDashboard/HrDashboard";
import AdminDashboard from "./userDashboard/AdminDashboard";
import LoanData from "./AdminDashboardComponent/LoanData";
import CreditCardData from "./AdminDashboardComponent/CreditCardData";
import Hrdata from "./AdminDashboardComponent/Hrdata";
import CustDashboard from "./CustomerComponents/CustDashboard";
import CustomerApplyForm from "./CustomerComponents/CustomerApplyForm";
import TlViewData from "./AdminDashboardComponent/TlViewData";
import HrViewData from "./AdminDashboardComponent/HrViewData";
import ImpLinks from "./AdminDashboardComponent/ImpLinks";
import SelectEmpType from "./EmpComponents/SelectEmpType";
import { Image } from "react-native";
import SalariedDashboard from "./CustomerComponents/SalariedDashboard";
import BusinessApplyfrom from "./CustomerComponents/BusinessApplyfrom";
import BusinessLendingPartner from "./CustomerComponents/BusinessLendingPartner";
import PartnerDashboard from "./userDashboard/PartnerDashboard";
import PartnerSignup from "./SignupComponents/PartnerSignup";
import AqmSignup from "./SignupComponents/AqmSignup";
import CustomerLogin from "./CustomerComponents/CustomerLogin";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* Start Screen Start Here  */}

      <Stack.Screen name="Home" component={WelcomeScreen} />

      {/* Employee Screen Start Here  */}

      <Stack.Screen
        name="EmpDashboard"
        component={DrawerNav}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Tldashboard"
        component={Tldashboard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="ReferShare"
        component={ReferShare}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Help"
        component={ContactScreen}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="EmpForm"
        component={EmpForm}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      {/* Signup Screen Start here  */}

      {/* <Stack.Screen
        name="EmpRegister"
        component={EmployeeRegister}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
      />
       */}

      <Stack.Screen
        name="EmpRegister"
        component={EmployeeRegister}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EmpLogin"
        component={EmployeeLogin}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="AqmSignup"
        component={AqmSignup}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="TlSignup"
        component={TlSignup}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="HrSignup"
        component={HrSignup}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="AdminSignup"
        component={AdminSignup}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />
      {/* Customer Screen Start Here  */}

      <Stack.Screen
        name="CustomerLogin"
        component={CustomerLogin}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="SelectType"
        component={SelectType}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },
          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="CusAddress"
        component={CusAddress}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="CusCompanyAddress"
        component={CusCompanyAddress}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="CustDashboard"
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Elegibility"
        component={Elegibility}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="customerDashboard"
        component={CustomerDashboard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#fff", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="LendingPartners"
        component={LendingPartners}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="PanCardDetails"
        component={PanCardDetails}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="profile"
        component={ProfilePage}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="AqmDashboard"
        component={AqmDashboard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="TlDashboard"
        component={TlDashboard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="HrDashboard"
        component={HrDashboard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="LoanData"
        component={LoanData}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="CreditCardData"
        component={CreditCardData}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Hrdata"
        component={Hrdata}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      {/* 
      <Stack.Screen
        name="CustDashboard"
        component={CustDashboard}

        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
      /> */}

      <Stack.Screen
        name="CustomerApplyForm"
        component={CustomerApplyForm}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="SelectEmpType"
        component={SelectEmpType}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 230 }}
              source={require("./images/addrupeelogo.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#f8edeb", // Background color for the header
          },

          headerTitleStyle: {
            display: "none", // Hide the text title
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="TlViewData"
        component={TlViewData}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="HrViewData"
        component={HrViewData}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="ImpLinks"
        component={ImpLinks}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="SalariedDashboard"
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="BusinessApplyfrom"
        component={BusinessApplyfrom}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="BusinessLendingPartner"
        component={BusinessLendingPartner}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="PartnerDashboard"
        component={PartnerDashboard}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="PartnerSignup"
        component={PartnerSignup}
        options={{
          headerShown: true,
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTitleStyle: {
            color: "white", // Text color for the header title
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
// console.log(a)
// temperal dead zone  let a
// temperal dead zone is the time between decleartion and the intialization of let and const variable

// const DrawerNav = () => {

//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         options={{
//           headerTitle: 'AddRupee',
//           headerStyle: {
//             backgroundColor: '#3E9D7C', // Background color for the header
//           },
//           headerTitleStyle: {
//             color: 'white', // Text color for the header title
//             fontWeight: 'bold', // Make the text bold
//             fontSize: 25
//           },
//           headerTitleAlign: "center"
//         }}
//         name='EmpDashboard' component={EmpDashboard} />
//     </Drawer.Navigator>
//   )
// }

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTintColor: "white", // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
        name="CustDashboard"
        component={CustDashboard}
      />
      <Drawer.Screen
        options={{
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTintColor: "white", // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
        name="CustomerAccount"
        component={CustomerAccount}
      />
      <Drawer.Screen
        options={{
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTintColor: "white", // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
        name="Elegibility"
        component={Elegibility}
      />

      <Drawer.Screen
        options={{
          headerTitle: "AddRupee",
          headerStyle: {
            backgroundColor: "#3E9D7C", // Background color for the header
          },
          headerTintColor: "white", // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: "bold", // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
        name="knowledge"
        component={knowledge}
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StackNav />
      {/* <DrawerNav /> */}
    </NavigationContainer>
  );
}
export default App;
