import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Sakya3In = () => {
    const [progress, setProgress] = useState(0);
    const progressAnim = useState(new Animated.Value(progress))[0];
    const scaleAnim = useState(new Animated.Value(1))[0];

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();

        Animated.sequence([
            Animated.timing(scaleAnim, { toValue: 1.1, duration: 150, useNativeDriver: true }),
            Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
        ]).start();
    }, [progress]);

    const handleNextStep = () => {
        if (progress < 100) {
            setProgress(progress + 25);
        }
    };

    return (
        <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={require('D:/Dev/SMARTiD-main/src/assets/3 class.json')}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                    </View>

                    <Text style={styles.text}>Welcome !!! to Task Number 2</Text>

                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Task :</Text>
                            <Text style={styles.taskText}>Participate in 3 subjects at Sakya.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>How to do :</Text>
                            <Text style={styles.taskText}>Join Business Studies, Economics, and Accounting/IT classes.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Rules :</Text>
                            <Text style={styles.taskText}>You must attend a class conducted by Bandara Dissanayake.</Text>
                        </View>
                    </View>

                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>Progress: {progress}%</Text>
                        <View style={styles.progressBar}>
                            <Animated.View
                                style={[styles.progressFill, { width: `${progress}%`, transform: [{ scaleX: scaleAnim }] }]}
                            />
                        </View>
                        <TouchableOpacity
                            style={[styles.nextButton, progress === 100 && styles.disabledButton]}
                            onPress={handleNextStep}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.nextButtonText}>
                                {progress < 100 ? 'Check Progress' : 'Task Completed! 🎉'}
                            </Text>
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
        paddingBottom: 30, // Prevent content from being cut off
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    animationContainer: {
        width: width * 0.92,
        height: height * 0.32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: width * 0.85,
        height: height * 0.32,
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    },
    taskContainer: {
        marginTop: 15,
        paddingVertical: 18,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 15,
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
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFD700',
        width: '35%',
        textAlign: 'left',
    },
    taskText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        width: '65%',
        textAlign: 'left',
    },
    progressContainer: {
        marginTop: 30,
        width: '90%',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 8,
    },
    progressBar: {
        width: '100%',
        height: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 12,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#FFD700',
        borderRadius: 12,
    },
    nextButton: {
        marginTop: 15,
        backgroundColor: '#FFD700',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    disabledButton: {
        backgroundColor: '#32CD32',
    },
    nextButtonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Sakya3In;
