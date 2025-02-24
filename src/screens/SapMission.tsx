import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';

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

const shareResults = async () => {
    try {
        await Share.share({
            message: 'I just completed my SAP exam with an A pass! 🎉 #SAPMission #Success',
        });
    } catch (error) {
        console.log('Error sharing:', error);
    }
};

const SapMission = () => {
    return (
        <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Animation */}
                    <View style={styles.animationContainer}>
                        <LottieView 
                            source={require('D:/Dev/SMARTiD-main/src/assets/subjects.json')} 
                            autoPlay 
                            loop 
                            style={styles.animation}
                        />
                    </View>

                    {/* Mission Title */}
                    <Text style={styles.title}>Welcome !!! to Task Number 4</Text>

                    {/* Task Details */}
                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Task:</Text>
                            <Text style={styles.taskText}>
                                You must participate in SAP exams (ECON & BUSINESS STUDY) at least once.
                            </Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>How to do:</Text>
                            <Text style={styles.taskText}>
                                It is mandatory to participate in the SAP exam conducted by Sakya for both subjects.
                            </Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Rules:</Text>
                            <Text style={styles.taskText}>
                                You must get an A pass (above 75 marks) in both subjects to complete the mission.
                            </Text>
                        </View>
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

                    {/* Share Button */}
                    <TouchableOpacity style={styles.shareButton} onPress={shareResults}>
                        <Text style={styles.shareButtonText}>🎉  WoW !! Your BS marks 76</Text>
                        <Text style={styles.shareButtonLabel}>Click to Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={() => shareResults()}>
                        <Text style={styles.shareButtonText}>WoW !! Your ECON marks 78</Text>
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
        color: '#FFD700',
        marginTop: 15,
        textAlign: 'center',
    },
    taskContainer: {
        marginTop: 25,
        padding: 20,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 4,
    },
    taskRow: {
        marginBottom: 12,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 5,
    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
    },
    leaderboardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFD700',
        marginTop: 25,
        marginBottom: 10,
    },
    leaderboardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.85,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        marginBottom: 8,
    },
    rank: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        width: '15%',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        width: '60%',
        textAlign: 'left',
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        width: '25%',
        textAlign: 'right',
    },
    shareButton: {
        width: width * 0.85,
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFD700',
        borderRadius: 8,
        alignItems: 'center',
    },
    shareButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A00E0',
    },
});

export default SapMission
