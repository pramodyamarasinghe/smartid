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
        <LinearGradient colors={['#FFA500', '#FFFFFF']} style={styles.gradient}>
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

                    {/* Welcome text */}
                    <Text style={styles.text}>Welcome to Task Number 1</Text>
                    <Text style={styles.subText}>
                        <Text style={{ fontWeight: 'bold' }}>Share the app with 5 friends and earn rewards!</Text>
                    </Text>

                    {/* Task Details */}
                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Task:</Text>
                            <Text style={styles.taskText}>Share app with 5 friends.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>How to do:</Text>
                            <Text style={styles.taskText}>Share your referral code with your friends.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Rules:</Text>
                            <Text style={styles.taskText}>The referral code must be entered when your friends log in.</Text>
                        </View>
                    </View>

                    {/* Referral Code Section */}
                    <View style={styles.referralContainer}>
                        <Text style={styles.referralTitle}>Your Referral Code:</Text>
                        <View style={styles.codeBox}>
                            <Animated.Text style={[styles.referralCode, { opacity: blinkAnim }]}>{referralCode}</Animated.Text>
                        </View>

                        {/* Share Code Button */}
                        <TouchableOpacity style={styles.shareButtonWrapper}>
                            <LinearGradient colors={['#FFA500', '#FFA200']} style={styles.shareButton}>
                                <Text style={styles.shareButtonText}>Share Code</Text>
                            </LinearGradient>
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
        paddingBottom: 30,
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
        width: '90%',
    },
    animationContainer: {
        width: width * 0.7,
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: width * 0.6,
        height: height * 0.3,
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10,
        textAlign: 'center',
    },
    subText: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10,
    },
    taskContainer: {
        marginTop: 25,
        paddingVertical: 20,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#FFA500',
    },
    taskRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFA500',
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFA500',
        width: '35%',
        textAlign: 'left',
    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        width: '65%',
        textAlign: 'left',
    },
    referralContainer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFA500',
        alignItems: 'center',
        width: '100%',
    },
    referralTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFA500',
    },
    codeBox: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFA500',
    },
    referralCode: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFA500',
    },
    shareButtonWrapper: {
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    shareButton: {
        paddingVertical: 14,
        alignItems: 'center',
    },
    shareButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default Share5Screen;
