import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import Barcode from 'react-native-barcode-builder';

const HomePage = () => {
    const studentId  = '24N00024';
    const studentName = 'John Doe'; // Replace with actual student name
    const profileImage = 'https://via.placeholder.com/150'; // Replace with actual image URL

    return (
        <View style={styles.container}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
            <Text style={styles.name}>{studentName}</Text>
            <Text style={styles.studentId}>ID: {studentId}</Text>
            {/* <Barcode value={studentId} format="CODE128" /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    studentId: {
        fontSize: 18,
        marginBottom: 20,
        color: '#555',
    },
});

export default HomePage;
