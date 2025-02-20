import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Share5Screen = () => {
    const [referralCode] = useState('ABC123XYZ'); // Simulated referral code
    const blinkAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(blinkAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(blinkAnim, { toValue: 0, duration: 500, useNativeDriver: true })
            ])
        ).start();
    }, []);

    return (
        <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Animation at the top */}
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={require('D:/Dev/SMARTiD-main/src/assets/share 5.json')}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                    </View>

                    {/* Welcome text below animation */}
                    <Text style={styles.text}>Welcome !!! to Task Number 1</Text>

                    {/* Task Details */}
                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Task :</Text>
                            <Text style={styles.taskText}>Share app with 5 friends.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>How to do :</Text>
                            <Text style={styles.taskText}>Share your referral code with your friends.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Rules :</Text>
                            <Text style={styles.taskText}>The referral code must be entered when your friends log in.</Text>
                        </View>
                    </View>

                    {/* Referral Code Section */}
                    <View style={styles.referralContainer}>
                        <Text style={styles.referralTitle}>Your Referral Code:</Text>
                        <View style={styles.codeBox}>
                            <Animated.Text style={[styles.referralCode, { opacity: blinkAnim }]}>{referralCode}</Animated.Text>
                        </View>
                        <TouchableOpacity style={styles.shareButton}>
                            <Text style={styles.shareButtonText}>Share Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 30, // Prevents content from cutting off at the bottom
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
    },
    animationContainer: {
        width: width * 0.9,
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: width * 0.8,
        height: height * 0.3,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        marginTop: 10,
        textAlign: 'center',
    },
    taskContainer: {
        marginTop: 25,
        paddingVertical: 20,
        width: '95%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 4,
    },
    taskRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        width: '35%',
        textAlign: 'left',
    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        width: '65%',
        textAlign: 'left',
    },
    referralContainer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 4,
        alignItems: 'center',
        width: '90%',
    },
    referralTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    codeBox: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFD700',
    },
    referralCode: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    shareButton: {
        marginTop: 15,
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    shareButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Share5Screen;
