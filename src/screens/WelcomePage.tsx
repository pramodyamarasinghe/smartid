import React from 'react';  
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { themeImages,colors } from '../constants/theme';

const WelcomePage = ({ navigation }: any) => {
    const handleLogin = () => {
        navigation.navigate('LoginPage'); // Fixed navigation issue
    };

    return (
        <LinearGradient colors={colors.BackgroundColor} style={styles.gradient}>



            <View style={styles.container}>
                <LottieView
                    source={themeImages.WelcomeImg}
                    autoPlay
                    loop
                    style={styles.animation}
                />
               
              <Image style={styles.tinyLogo} source={themeImages.SmartIdPageImg} />

                <Text style={styles.welcomeText}>Welcome to Sakya</Text>
                <Text style={styles.hilitedtext}>SMARTiD</Text>
                <Pressable 
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#333' : '#181818' },
                    ]}
                    onPress={handleLogin} // Clicking this button opens LoginPage
                >
                    <Text style={styles.buttontext}>Click To Continue</Text>
                </Pressable>
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
        paddingHorizontal: 20,
    },
    animation: {
        width: 250,
        height: 250,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        color: colors.SecondryColor,
    },
    hilitedtext: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.PrimaryColor,
    },
    tinyLogo: {
        height: 80,
        width: 160,
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        marginTop: 20,
        marginBottom: 10,
        height: 50,
    },
    buttontext: {
        fontSize: 16,
        fontWeight: 'bold',
        color:colors.ButtonColor ,
    },
});

export default WelcomePage;
