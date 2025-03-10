import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';
import { themeImages } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const econLeaderboard = [
    { rank: 1, name: 'Dinuth Shamen', score: 98 },
    { rank: 2, name: 'Sularaka Madu', score: 95 },
    { rank: 3, name: 'Pulina Somdasa', score: 92 },
    { rank: 4, name: 'Malith Pramodya', score: 89 },
    { rank: 5, name: 'Santhush Perera', score: 55 },
];

const bsLeaderboard = [
    { rank: 1, name: 'Erandi Alahakon', score: 99 },
    { rank: 2, name: 'Tanuji Sathsarani', score: 67 },
    { rank: 3, name: 'Bipuli Sadinka', score: 93 },
    { rank: 4, name: 'Malith Pramodya', score: 34 },
    { rank: 5, name: 'Sadun Suraweeera', score: 10 },
];

const shareResults = async (message) => {
    try {
        await Share.share({
            message,
        });
    } catch (error) {
        console.log('Error sharing:', error);
    }
};

const SapMission = () => {
    return (
       <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Animation */}
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={themeImages.SapMissionImg}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                    </View>

                    {/* Mission Title */}
                    <Text style={styles.title}>Welcome to Task Number 4</Text>

                    {/* Task Details */}
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskTitle}>Task:</Text>
                        <Text style={styles.taskText}>You must participate in SAP exams (ECON & BUSINESS STUDY) at least once.</Text>
                        <Text style={styles.taskTitle}>How to do:</Text>
                        <Text style={styles.taskText}>It is mandatory to participate in the SAP exam conducted by Sakya for both subjects.</Text>
                        <Text style={styles.taskTitle}>Rules:</Text>
                        <Text style={styles.taskText}>You must get an A pass (above 75 marks) in both subjects to complete the mission.</Text>
                    </View>

                    {/* ECON Leaderboard */}
                    <Text style={styles.leaderboardTitle}>🏆 ECON SAP Exam Marks</Text>
                    <FlatList
                        data={econLeaderboard}
                        keyExtractor={(item) => item.rank.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.leaderboardItem}>
                                <Text style={styles.rank}>{item.rank}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.score}>{item.score} Mark</Text>
                            </View>
                        )}
                    />

                    {/* BS Leaderboard */}
                    <Text style={styles.leaderboardTitle}>🏆 BS SAP Exam Marks</Text>
                    <FlatList
                        data={bsLeaderboard}
                        keyExtractor={(item) => item.rank.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.leaderboardItem}>
                                <Text style={styles.rank}>{item.rank}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.score}>{item.score} Mark</Text>
                            </View>
                        )}
                    />

                    {/* Share Buttons */}
                    <TouchableOpacity style={styles.shareButton} onPress={() => shareResults("🎉 WoW !! Your BS marks 76!")}>
                        <Text style={styles.shareButtonText}>🎉 WoW !! Your BS marks</Text>
                        <Text style={styles.markText}>76</Text>
                        <Text style={styles.shareButtonLabel}>Click to Share</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareButton} onPress={() => shareResults("WoW !! Your ECON marks 78!")}>
                        <Text style={styles.shareButtonText}>WoW !! Your ECON marks</Text>
                        <Text style={styles.markText}>78</Text>
                        <Text style={styles.shareButtonLabel}>Click to Share</Text>
                    </TouchableOpacity>
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
    },
    animationContainer: {
        width: width * 0.9,
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: width * 0.8,
        height: height * 0.3,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        textAlign: 'center',
    },
    taskContainer: {
        marginTop: 25,
        padding: 20,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    taskText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'left',
    },
    leaderboardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    leaderboardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.85,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        marginBottom: 8,
    },
    rank: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        width: '15%',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        width: '60%',
        textAlign: 'left',
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF0000', // Red for marks
        width: '25%',
        textAlign: 'right',
    },
    shareButton: {
        backgroundColor: '#FFA500', // Orange
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 20,
        width: width * 0.85,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    shareButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    markText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF0000', // Red for emphasis
    },
    shareButtonLabel: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
});

export default SapMission;
