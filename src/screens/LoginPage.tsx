import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import LottieView from 'lottie-react-native';

const LoginPage = ({ navigation }: any) => {
  const [studentId, setStudentId] = useState('24n00024');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    console.log('Student ID:', studentId);

    if (!studentId) {
      Alert.alert('Error', 'Please enter your Student ID');
      return;
    }

    try {
      const response = await fetch('https://ams.sakya.edu.lk/api/v1/smartid/otp-validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer i8273e93287eh938eh9328eh9328he923`, // Update token as needed
        },
        body: JSON.stringify({ studentId }),
      });

      console.log('Response Status:', response.status);

      let data;
      try {
        data = await response.json();
      } catch (err) {
        console.error('Error parsing response:', err);
        Alert.alert('Error', 'Invalid server response. Please try again later.');
        return;
      }

      console.log('API Response:', data);

      if (response.ok) {
        const token = data.token; // Assuming token is returned on success
        login(token); // Save token to context
        navigation.navigate('OtpPage', { studentId }); // Navigate to OTP Page
      } else {
        Alert.alert('Login Failed', data.message || 'Invalid Student ID');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Failed to log in. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/login-animation.json')} // Ensure this file exists
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Student Validation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Student ID"
          value={studentId}
          onChangeText={setStudentId}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#FF8800' : '#FFAC1C' },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Validate Student ID</Text>
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
    fontWeight: 'bold',
    color: '#333',
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
  animation: {
    width: '100%',
    height: 300,
  },
  form: {
    marginTop: 20,
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

export default LoginPage;