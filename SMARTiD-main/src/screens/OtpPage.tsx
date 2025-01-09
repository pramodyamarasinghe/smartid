import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const OtpPage = ({ route,navigation }: any) => {
  const [otp, setOtp] = useState('');
  const {loginValidate,isAuthenticated, getAuth} = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const {studentId,phoneNumber}  = route.params;

  const handleValidate = async () => {

    if (otp) {
      try {
        await loginValidate(otp);


        if(isAuthenticated){
          navigation.navigate('Home');
        }else{
          Alert.alert('Error', 'Failed to Verify. Please try again.');
        }
        console.log(studentId);
        // Make an API call using fetch
        // const response = await fetch('https://example.com/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     studentId,
        //     otp,
        //   }),
        // });

        // const data = await response.json(); // Convert response to JSON

        // if (response.ok) {
        //   // Assuming the API returns a token
        //   const token = data.token;
        //   await loginValidate(token); // Save token and set user as authenticated
        //   navigation.navigate('Home', { studentId });
        // } else {
        //   Alert.alert('Login Failed', data.message || 'Invalid credentials');
        // }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error', 'Failed to log in. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please enter OTP and ensure Student ID is available');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Enter Your OTP</Text>
        <TextInput
          style={styles.inputotp}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          secureTextEntry
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#FF8800' : '#FFAC1C',
              elevation: pressed ? 6 : 3,
            },
            styles.button,
          ]}
          onPress={handleValidate}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Text style={styles.buttontext}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputotp: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingLeft: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#FFAC1C',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  buttonHover: {
    backgroundColor: '#ff8600',
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default OtpPage;
