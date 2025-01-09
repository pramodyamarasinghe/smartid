import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { AuthContext, setOtp } from '../context/AuthContext';
import LottieView from 'lottie-react-native';
import constants from '../constants/main';

const LoginPage = ({ navigation }: any) => {
  const [studentId, setStudentId] = useState('');
  const { setOtp } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = async () => {
    if (studentId) {
      setLoading(true); // Set loading to true when the request starts
      try {
        const response = await fetch(`${constants.server}/v1/smartid/otp-validate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${constants.apiKey}`,
          },
          body: JSON.stringify({ studentId: studentId }),
        });

        const data = await response.json();

        console.log(data);

        if (data.status == 200) {
          const hashed_token = data.otphashed;
          const student_id = data.studentId;

          setOtp({ hashed_token: hashed_token, student_id: student_id });
          setPhoneNumber(data.contactnumber);
          navigation.navigate('Otp', { studentId, phoneNumber });
        } else {
          Alert.alert('Login Failed!', data.message);
        }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error', 'Failed to log in. Please try again.');
      } finally {
        setLoading(false); // Set loading to false when the request finishes
      }
    } else {
      Alert.alert('Error', 'Please enter your Student ID');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/login-animation.json')}
        autoPlay
        loop={true}
        style={styles.animation}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Student Validation</Text>
        <Text style={styles.inputText}>Enter Your Student ID</Text>
        <TextInput
          style={styles.input}
          placeholder="26CXXXXX"
          value={studentId}
          onChangeText={setStudentId}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#FF8800" /> // Show spinner when loading
        ) : (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#FF8800' : '#FFAC1C',
                elevation: pressed ? 6 : 3,
              },
              styles.button,
            ]}
            onPress={handleLogin}
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
          >
            <Text style={styles.buttontext}>Submit</Text>
          </Pressable>
        )}
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
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  inputText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3a3a3b',
  }
});

export default LoginPage;
