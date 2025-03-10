import React, { useState, useEffect, useRef } from 'react';  
import { View, Text, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { themeImages } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const TwoAndTwoScreen = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
            startAnimation();
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 14);
        const now = new Date();
        const difference = targetDate - now;
        return difference > 0 ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        } : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
            Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true })
        ]).start();
    };

    return (
       <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.animationContainer}>
                        <LottieView source={themeImages.TwoAndTwoScreenImg} autoPlay loop style={styles.animation} />
                    </View>
                    <Text style={styles.title}>welcome task number 3</Text>
                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}><Text style={styles.taskTitle}>Task :</Text><Text style={styles.taskText}>Complete Payment before 2nd week.</Text></View>
                        <View style={styles.taskRow}><Text style={styles.taskTitle}>How to do :</Text><Text style={styles.taskText}>Complete the class fees for the three classes you are attending before or during the second week.</Text></View>
                        <View style={styles.taskRow}><Text style={styles.taskTitle}>Rules :</Text><Text style={styles.taskText}>There should be a class conducted by Bandara Dissanayake sir. Having two classes is an added advantage.</Text></View>
                    </View>
                    <View style={styles.countdownContainer}>
                        <Text style={styles.countdownText}>Time Left:</Text>
                        <Animated.Text style={[styles.countdownNumbers, { opacity: fadeAnim }]}>
                            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                        </Animated.Text>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    scrollContainer: { flexGrow: 1, alignItems: 'center', paddingBottom: 30 },
    container: { alignItems: 'center', paddingTop: 20 },
    animationContainer: { width: width * 0.9, height: height * 0.3, justifyContent: 'center', alignItems: 'center' },
    animation: { width: width * 0.8, height: height * 0.3 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#000000', marginTop: 10, textAlign: 'center', textTransform: 'uppercase' },
    taskContainer: { marginTop: 25, paddingVertical: 20, width: '90%', backgroundColor: '#FFFFFF', borderRadius: 12 },
    taskRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#FFA500' },
    taskTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFA500', width: '35%' },
    taskText: { fontSize: 16, fontWeight: 'bold', color: '#000000', width: '65%' },
    countdownContainer: { marginTop: 20, padding: 20, backgroundColor: '#FFFFFF', borderRadius: 15, width: '85%', alignItems: 'center' },
    countdownText: { fontSize: 20, fontWeight: 'bold', color: '#FFA500', textTransform: 'uppercase' },
    countdownNumbers: { fontSize: 26, fontWeight: 'bold', color: '#FFA500', marginTop: 5 },
});

export default TwoAndTwoScreen;
