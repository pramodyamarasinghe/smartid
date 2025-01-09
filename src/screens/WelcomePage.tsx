import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const WelcomePage = ({ navigation }: any) => {

    const handleLogin = () => {
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/welcome-animation.json')} // add your Lottie animation file here
                autoPlay
                loop={true}
                style={styles.animation}
            />
            <Image style={styles.tinyLogo}
                source={require('../assets/logo.png')} />
            <Text style={styles.welcomeText}>Welcome to Sakya</Text><Text style={styles.hilitedtext}>SMARTiD</Text>
            <Pressable style={styles.button} onPress={handleLogin}><Text style={styles.buttontext}>Click To Continue</Text></Pressable>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    animation: {
        width: 300,
        height: 300,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#181818',
        marginTop: 20,
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
    hilitedtext: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFAC1C',
    },
    tinyLogo: {
        // position: 'absolute',
        // top: 50, // Stick to the bottom
        height: 80,
        width: 158,
        alignSelf: 'center',
        marginTop:30,
    },
});

export default WelcomePage;
