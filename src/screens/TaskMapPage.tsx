import React, { useEffect, useRef, useState } from 'react';     
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import type { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { themeImages } from '../constants/theme';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
    Share5: undefined;
    Sakya3In: undefined;
    TwoAndTwo: undefined;
    SapMission: undefined;
    ThreeDTwoMPage: undefined;  
    FreeCardPage: undefined;
};

const TaskMapPage = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const slideAnim = useRef(new Animated.Value(-50)).current;
    
    const [tasks] = useState([
        { name: "Share With 5 friends", route: "Share5", icon: "share-alt" },
        { name: "Participate 3 Classes", route: "Sakya3In", icon: "users" },
        { name: "Do Payment On time", route: "TwoAndTwo", icon: "handshake" },
        { name: "SAP marks mission", route: "SapMission", icon: "tasks" },
        { name: "Attendance mission", route: "ThreeDTwoMPage", icon: "cubes" }  
    ]);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.animationContainer}>
                        <LottieView 
                            source={themeImages.TaskMapPageImg}  
                            autoPlay 
                            loop 
                            style={styles.animation}
                        />
                    </View>

                    <Animated.Text style={[styles.text, { transform: [{ translateY: slideAnim }] }]}>Welcome to Task Map</Animated.Text>
                    <Text style={styles.subText}><Text style={{ fontWeight: 'bold' }}>Complete Tasks and Get your Free Card!</Text></Text>

                    {tasks.map((task, index) => (
                        <TouchableOpacity 
                            key={index} 
                            onPress={() => navigation.navigate(task.route as keyof RootStackParamList)} 
                            style={styles.taskButtonWrapper}
                        >
                            <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.taskButton}>
                                <FontAwesome5 name={task.icon} size={16} color="#fff" style={styles.icon} />
                                <Text style={styles.taskButtonText}>{task.name}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}

                    <View style={styles.gap} />

                    <TouchableOpacity 
                        style={styles.bottomButtonWrapper} 
                        onPress={() => navigation.navigate("FreeCardPage")}
                    >
                        <LinearGradient colors={['#FF0000', '#B22222']} style={styles.bottomButton}>
                            <FontAwesome5 name="gift" size={16} color="#fff" style={styles.icon} />
                            <Text style={styles.bottomButtonText}>Collect your free card</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    scrollContainer: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
    container: { width: '90%', alignItems: 'center', paddingVertical: 15 },
    animationContainer: { width: width * 0.7, height: height * 0.2, justifyContent: 'center', alignItems: 'center' },
    animation: { width: width * 0.6, height: height * 0.2 },
    text: { fontSize: 22, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 5, textTransform: 'uppercase' },
    subText: { fontSize: 14, color: '#333', textAlign: 'center', marginBottom: 10 },
    taskButtonWrapper: { width: '95%', marginVertical: 5, borderRadius: 8, overflow: 'hidden' },  
    taskButton: { padding: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },  
    taskButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 6 },  
    icon: { marginRight: 6 },  
    gap: { height: 20 }, 
    bottomButtonWrapper: { width: '95%', marginTop: 8, borderRadius: 8, overflow: 'hidden' },  
    bottomButton: { paddingVertical: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },  
    bottomButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold', marginLeft: 6 }  
});

export default TaskMapPage;
