import React, { useState } from 'react';   
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { themeImages,colors } from '../constants/theme';

const OtpPage = ({ route, navigation }) => {
  const { studentId } = route.params || {}; // Receive Student ID from LoginPage
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    if (!otp.trim()) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }

    Alert.alert('Success', 'OTP Verified Successfully!');
    navigation.navigate('Home'); // Navigate to Home Page
  };

  return (
    <LinearGradient colors={colors.BackgroundColor} style={styles.gradient}>
      <View style={styles.container}>
        {/* Lottie Animation */}
        <LottieView
          source={themeImages.OtpImg}

          autoPlay
          loop
          style={styles.animation}
        />

        <View style={styles.form}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>Enter the OTP sent to Student ID: {studentId}</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
          
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#FF8C00' : '#FFA500' },
            ]}
            onPress={handleOtpSubmit}
          >
            <Text style={styles.buttonText}>Submit OTP</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 20,
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
    textAlign: 'center',
    marginBottom: 20,
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
    backgroundColor: '#ffffff',
    width: '100%',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.ButtonColor,
  },
});

export default OtpPage;
