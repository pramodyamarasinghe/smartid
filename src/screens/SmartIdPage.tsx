import React, { useState } from 'react';   
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import Barcode from 'react-native-barcode-svg';
import { themeImages } from '../constants/theme';

const SmartIdPage = () => {
    const [profileImage, setProfileImage] = useState(null);

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.error && response.assets?.length > 0) {
                setProfileImage(response.assets[0].uri);
            }
        });
    };

    return (
        <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={pickImage} style={styles.profileUploadContainer}>
                        <Image 
                            source={{ uri: profileImage || 'https://via.placeholder.com/120' }}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                    
                    <Text style={styles.studentName}>Malith Pramodya</Text>
                    <Text style={styles.studentId}>ID: 123456789</Text>

                    {/* Barcode Component */}
                    <View style={styles.barcodeWrapper}>
                        <View style={styles.barcodeContainer}>
                            <Barcode value="123456789" format="CODE128" />
                            <Image style={styles.logo} source={themeImages.SmartIdPageImg} />

                        </View>
                        <View style={styles.orangeLine} />
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
        padding: 20,
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        paddingBottom: 20,
    },
    profileUploadContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        width: 150,
        height: 150,
        backgroundColor: '#ddd',
        borderWidth: 3,
        borderColor: '#FFA500',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 75,
    },
    studentName: {
        marginTop: 15,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
    },
    studentId: {
        fontSize: 24,
        color: '#555',
        marginBottom: 10,
    },
    barcodeWrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        position: 'relative',
        paddingBottom: 6,
    },
    barcodeContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
        width: '90%',
    },
    logo: {
        marginTop: 10,
        width: 80,
        height: 40,
        resizeMode: 'contain',
    },
    orangeLine: {
        width: '90%',
        height: 6,
        backgroundColor: '#FFA500',
        borderRadius: 3,
        position: 'absolute',
        bottom: 0,
    },
});

export default SmartIdPage;
