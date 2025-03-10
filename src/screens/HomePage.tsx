import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { themeImages, colors } from '../constants/theme';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
    Settings: undefined;
    SmartID: undefined;
    TaskMap: undefined;
};

const HomePage = () => {
    const animationSource = themeImages.HomeImg;
    const sapImage = themeImages.HomeSample;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(!menuVisible)}>
                    <Text style={styles.menuText}>☰</Text> 
                </TouchableOpacity>
            ),
            
        });
    }, [navigation, menuVisible]);

    const handleMenuItemPress = (action: () => void) => {
        action();
        setMenuVisible(false);
    };

    return (
        <LinearGradient colors={colors.BackgroundColor} style={styles.gradient}>

            {/* Fixed Menu Bar */}
            {menuVisible && (
                <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress(() => navigation.navigate('Settings'))}>
                        <Text style={styles.menuItemText}>⚙️ Settings</Text>
                    </TouchableOpacity>
                </View>
            )}

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.animationContainer}>
                    <LottieView source={animationSource} autoPlay loop style={styles.animation} />
                </View>
                
                <View style={styles.contentContainer}>
                    <Text style={styles.greetingText}>Hello, Malith !!!</Text>

                    {/* Smart-ID and TaskMap Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => handleMenuItemPress(() => navigation.navigate('SmartID'))}>
                            <Text style={styles.buttonText}>Smart-ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => handleMenuItemPress(() => navigation.navigate('TaskMap'))}>
                            <Text style={styles.buttonText}>Task-Map</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={sapImage} style={styles.image} />
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
        alignItems: 'center',
        paddingBottom: height * 0.1,
    },
    menuButton: {
        marginRight: 15,
        backgroundColor: '#FF8C00',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, // Ensures the button is circular
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    menuText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    menuBar: {
        position: 'absolute',
        top: 60,
        right: 20,
        backgroundColor: '#FF8C00',
        padding: 15,
        borderRadius: 10,
        zIndex: 10,
        width: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    menuItemText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    animationContainer: {
        alignItems: 'center',
        marginTop: height * 0.1,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.04,
    },
    greetingText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#080808 ',
        marginBottom: 20,
    },
    animation: {
        width: width * 0.7,
        height: width * 0.7,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FF8C00',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 8,
        overflow: 'hidden',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageContainer: {
        alignItems: 'center',
        width: width,
        height: height * 0.6,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default HomePage;
