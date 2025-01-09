

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const OtpPage = ({ route, navigation }: any) => {
  const { studentId } = route.params;
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = async () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }

    try {
      const response = await fetch('https://ams.sakya.edu.lk/api/v1/smartid/otp-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer i8273e93287eh938eh9328eh9328he923`, // Update token as needed
        },
        body: JSON.stringify({ studentId, otp }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (response.ok) {
        Alert.alert('Success', 'OTP Verified Successfully!');
        navigation.navigate('Home'); // Navigate to the Home page
      } else {
        Alert.alert('Error', data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error during OTP submission:', error);
      Alert.alert('Error', 'Failed to verify OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Student ID: {studentId}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#FF8800' : '#FFAC1C' },
        ]}
        onPress={handleOtpSubmit}
      >
        <Text style={styles.buttonText}>Submit OTP</Text>
      </Pressable>
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
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  input: {
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
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default OtpPage;
