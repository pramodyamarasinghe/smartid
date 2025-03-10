import React, { useEffect, useRef, useState } from 'react';   
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import type { StackNavigationProp } from '@react-navigation/stack';
import { themeImages } from '../constants/theme';


type RootStackParamList = {
    Share5: undefined;
    Sakya3In: undefined;
    TwoAndTwo: undefined;
    SapMission: undefined;
    ThreeDTwoMPage: undefined;  
    FreeCardPage: undefined;
};

const { width, height } = Dimensions.get('window');

const TaskMapPage = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const slideAnim = useRef(new Animated.Value(-50)).current;
    
    const [tasks] = useState([
        { name: "SHARE 5", route: "Share5" },
        { name: "3 IN SAKYA", route: "Sakya3In" },
        { name: "2 & 2", route: "TwoAndTwo" },
        { name: "SAP MISSION", route: "SapMission" },
        { name: "3D 2M", route: "ThreeDTwoMPage" }  
    ]);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (<LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    
                    {/* Animation Container */}
                    <View style={styles.animationContainer}>
                        <LottieView 
                            source={themeImages.TaskMapPageImg}  
                            autoPlay 
                            loop 
                            style={styles.animation}
                        />
                    </View>

                    {/* Title Text */}
                    <Animated.Text style={[styles.text, { transform: [{ translateY: slideAnim }] }]}>
                        Welcome to Task Map
                    </Animated.Text>
                    <Text style={styles.subText}>
                        <Text style={{ fontWeight: 'bold' }}>Complete Tasks and Get your Free Card!</Text>
                    </Text>

                    {/* Task Buttons */}
                    <View style={styles.buttonsContainer}>
                        {tasks.map((task, index) => (
                            <TouchableOpacity 
                                key={index} 
                                onPress={() => navigation.navigate(task.route as keyof RootStackParamList)} 
                                style={styles.taskButtonWrapper}
                            >
                                <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.taskButton}>
                                    <Text style={styles.taskButtonText}>{task.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}

                        {/* Collect Your Free Card Button */}
                        <TouchableOpacity 
                            style={styles.bottomButtonWrapper} 
                            onPress={() => navigation.navigate("FreeCardPage")}
                        >
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

// Styles
const styles = StyleSheet.create({
    gradient: { flex: 1 },
    scrollContainer: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
    container: { width: '90%', alignItems: 'center', paddingVertical: 15 },
    animationContainer: { width: width * 0.7, height: height * 0.2, justifyContent: 'center', alignItems: 'center' },
    animation: { width: width * 0.6, height: height * 0.2 },
    text: { fontSize: 26, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 5, textTransform: 'uppercase' },
    subText: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 10 },
    buttonsContainer: { width: '100%', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 15, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
    taskButtonWrapper: { width: '100%', marginVertical: 6, borderRadius: 10, overflow: 'hidden' },
    taskButton: { padding: 14, alignItems: 'center' },
    taskButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    bottomButtonWrapper: { width: '100%', marginTop: 10, borderRadius: 10, overflow: 'hidden' },
    bottomButton: { paddingVertical: 12, alignItems: 'center' },
    bottomButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' }
});

export default TaskMapPage;
