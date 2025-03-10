import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar } from 'react-native-calendars';
import { themeImages } from '../constants/theme';


const { width, height } = Dimensions.get('window');

const ThreeDTwoMPage = () => {
    const navigation = useNavigation();
    const [markedDates, setMarkedDates] = useState({});

    // Function to mark a date for attendance
    const markAttendance = (day) => {
    setMarkedDates((prev) => ({
        ...prev,
        [day.dateString]: {
            selected: true,
            marked: true,
            selectedColor: '#FFA500',
        },
    }));
};

const highlightSaturdays = () => {
    let newMarkedDates = { ...markedDates };
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let daysInMonth = new Date(year, month, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        let dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        let dateObj = new Date(dateStr);
        if (dateObj.getDay() === 6) { // Saturday
            newMarkedDates[dateStr] = {
                marked: true,
                selectedColor: 'red',
            };
        }
    }
    setMarkedDates(newMarkedDates);
};

    return (
        <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Animation at the top */}
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={themeImages.ThreeDTwoMPageImg}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                    </View>

                    {/* Welcome text */}
                    <Text style={styles.text}>Welcome to Task Number 5</Text>

                    {/* Task Details */}
                    <View style={styles.taskContainer}>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Task :</Text>
                            <Text style={styles.taskText}>You have to manage your attendance very well.</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>How to do :</Text>
                            <Text style={styles.taskText}>You have to participate in both Econ & Business Studies classes for 2 months (you must participate every day).</Text>
                        </View>
                        <View style={styles.taskRow}>
                            <Text style={styles.taskTitle}>Rules :</Text>
                            <Text style={styles.taskText}>Attend both classes every day for two months.</Text>
                        </View>
                    </View>

                    {/* Attendance Calendar */}
                    <Text style={styles.calendarTitle}>📅 Track Your Attendance</Text>
                    <Calendar
                        onDayPress={markAttendance}
                        markedDates={markedDates}
                        theme={{
                            backgroundColor: 'transparent',
                            calendarBackground: 'transparent',
                            textSectionTitleColor: '#FFA500',
                            dayTextColor: '#000',
                            todayTextColor: '#FFA500',
                            selectedDayTextColor: '#000',
                            arrowColor: '#FFA500',
                            monthTextColor: '#FFA500',
                            textDayFontWeight: 'bold',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: 'bold',
                        }}
                        style={styles.calendar}
                    />

                    {/* Check Your Attendance Button */}
                    <TouchableOpacity onPress={highlightSaturdays} style={styles.button}>
                        <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.buttonInner}>
                            <Text style={styles.buttonText}>Check Your Attendance</Text>
                        </LinearGradient>
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
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginTop: 10,
        textAlign: 'center',
    },
    taskContainer: {
        marginTop: 25,
        paddingVertical: 20,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
    },
    taskRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#FFA500',
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFA500',
        width: '35%',
    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        width: '65%',
    },
    calendarTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 20,
        marginBottom: 10,
    },
    calendar: {
        width: width * 0.9,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttonInner: {
        padding: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ThreeDTwoMPage;