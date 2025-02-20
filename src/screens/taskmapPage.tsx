import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const TaskMapPage = () => {
    const navigation = useNavigation();
    const slideAnim = useRef(new Animated.Value(-50)).current;
    const [tasks, setTasks] = useState(["SHARE 5", "3 IN SAKYA", "2 & 2", "SAP MISSION", "3D 2M"]);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleTaskPress = (task) => {
        if (task === "SHARE 5") {
            navigation.navigate("Share5");
        } else if (task === "3 IN SAKYA") {
            navigation.navigate("Sakya3In");
        } else if (task === "2 & 2") {
            navigation.navigate("TwoAndTwo");
        } else if (task === "SAP MISSION") {
            navigation.navigate("SapMission");
        }
    };

    return (
        <LinearGradient colors={['#FFFFFF', '#FFEDD5']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.animationContainer}>
                        <LottieView 
                            source={require('D:/Dev/SMARTiD-main/src/assets/task map.json')} 
                            autoPlay 
                            loop 
                            style={styles.animation}
                        />
                    </View>
                    <Animated.Text style={[styles.text]}>Welcome to Task Map</Animated.Text>
                    <Text style={styles.subText}>
                        <Text style={{ fontWeight: 'bold' }}>Complete Tasks and Get your free Card !!!</Text>
                    </Text>
                    <View style={styles.buttonsContainer}>
                        {tasks.map((task, index) => (
                            <TouchableOpacity key={index} onPress={() => handleTaskPress(task)} style={styles.taskButtonWrapper}>
                                <LinearGradient 
                                    colors={['#FFA500', '#FF8C00']} 
                                    style={styles.taskButton}
                                >
                                    <Text style={styles.taskButtonText}>{task}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.bottomButtonWrapper}>
                            <LinearGradient colors={['#FF0000', '#B22222']} style={styles.bottomButton}>
                                <Text style={styles.bottomButtonText}>Collect your free card</Text>
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
        justifyContent: 'center',
        paddingVertical: 10,
    },
    container: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
    },
    animationContainer: {
        width: width * 0.7,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF8C00', // Dark Orange
        textAlign: 'center',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    animation: {
        width: width * 0.6,
        height: height * 0.2,
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    taskButtonWrapper: {
        width: '100%',
        marginVertical: 6,
        borderRadius: 10,
        overflow: 'hidden',
    },
    taskButton: {
        padding: 14,
        alignItems: 'center',
    },
    taskButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomButtonWrapper: {
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bottomButton: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    bottomButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    } 
});

export default TaskMapPage;
