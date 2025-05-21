import React, { useState } from 'react';  
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { themeImages, colors } from '../constants/theme';

const LoginPage = ({ navigation }) => {
  const [studentId, setStudentId] = useState('');

  // Function to validate Student ID format (Two digits, one uppercase letter, five digits)
  const validateID = (id) => {
    const idPattern = /^[0-9]{2}[A-Z][0-9]{5}$/;
    return idPattern.test(id);
  };

  const handleLogin = () => {
    if (!studentId.trim()) {
      Alert.alert('Error', 'Please enter your Student ID');
      return;
    }

    // Convert input to uppercase before validation
    const formattedId = studentId.toUpperCase();

    if (!validateID(formattedId)) {
      Alert.alert('Error', 'Invalid Student ID format. Example: 23N00000');
      return;
    }

    // Navigate to OTP Page with the formatted Student ID
    navigation.navigate('OtpPage', { studentId: formattedId });
  };

  return (
    <LinearGradient colors={colors.BackgroundColor} style={styles.gradient}>
      <View style={styles.container}>
        <LottieView
          source={themeImages.LoginImg}
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
            onChangeText={(text) => setStudentId(text.toUpperCase())} // Auto-uppercase input
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#FF8C00' : '#FFA500' },
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Validate Student ID</Text>
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
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.SecondryColor,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingLeft: 20,
    backgroundColor: colors.ButtonColor,
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
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.ButtonColor,
  },
});

export default LoginPage;
