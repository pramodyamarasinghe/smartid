import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import scanAnimationData from '../assets/scan.json';
import newMapAnimationData from '../assets/new map.json'; // Include the new animation file
import backgroundAnimationData from '../assets/background.json'; // Include the background animation

const HomePage = () => {
    const navigation = useNavigation(); 
    const studentId = '24N00024';
    const studentName = 'Malith Pramodya';
    const profileImage = 'https://via.placeholder.com/150';
    const logoImage = require('../assets/logo.png'); // Add logo image path here

    const animationSize = 150;

    return (
        <View style={styles.container}>
            {/* Background Animation */}
            <LottieView
                source={backgroundAnimationData}
                autoPlay
                loop
                style={styles.backgroundAnimation}
            />
            
            {/* Content Section */}
            <View style={styles.contentContainer}>
                <View style={styles.middleSection}>
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                    <Text style={styles.name}>{studentName}</Text>
                    <Text style={styles.studentId}>ID: {studentId}</Text>
                </View>

                {/* Animations and Buttons Section */}
                <View style={styles.animationAndButtonSection}>
                    {/* Scan Animation */}
                    <View style={styles.animationWrapper}>
                        <View style={{ width: animationSize, height: animationSize }}>
                            <LottieView
                                source={scanAnimationData}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Scan</Text>
                        </TouchableOpacity>
                    </View>

                    {/* New Map Animation */}
                    <View style={styles.animationWrapper}>
                        <View style={{ width: animationSize, height: animationSize }}>
                            <LottieView
                                source={newMapAnimationData}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Task Map</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Logo added at the bottom of the UI */}
                <View style={styles.logoSection}>
                    <Image source={logoImage} style={styles.logo} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dceefb', // Light cloud blue
    },
    backgroundAnimation: {
        position: 'absolute', // Absolutely position the background
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1, // Place the background behind all other content
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between', // Ensures elements are spaced out vertically
    },
    middleSection: {
        alignItems: 'center',
        paddingTop: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    studentId: {
        fontSize: 18,
        color: '#555',
    },
    animationAndButtonSection: {
        flexDirection: 'row', // Align animations and buttons horizontally
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50, // Adjust spacing from the profile section
    },
    animationWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 140,
        height: 40,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10, // Adjust gap between animation and button
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
    animation: {
        flex: 1,
    },
    logoSection: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, // Space from the buttons section
    },
    logo: {
        width: 200,  // Adjust size as needed
        height: 100, // Adjust size as needed
    },
});


export default HomePage;


















