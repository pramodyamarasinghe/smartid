import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SettingsPage = () => {
    // User details states
    const [name, setName] = useState("Malith Pramodya");
    const [studentID, setStudentID] = useState("NIBM-12345");
    const [birthday, setBirthday] = useState("2002-05-10");
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [parentName, setParentName] = useState("John Doe");
    const [parentContact, setParentContact] = useState("+94 77 123 4567");

    const handleSave = () => {
        Alert.alert("Profile Updated", "Your changes have been saved!");
    };

    const toggleClassSelection = (subject) => {
        setSelectedClasses((prevClasses) => {
            if (prevClasses.includes(subject)) {
                return prevClasses.filter((item) => item !== subject);
            } else if (prevClasses.length < 3) {
                return [...prevClasses, subject];
            } else {
                Alert.alert("Limit Reached", "You can only select up to 3 subjects.");
                return prevClasses;
            }
        });
    };

    return (
        <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Settings</Text>

                {/* Editable Fields */}
                <View style={styles.section}>
                    <Text style={styles.label}>Change Name</Text>
                    <TextInput style={styles.input} value={name} onChangeText={setName} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Change Student ID</Text>
                    <TextInput style={styles.input} value={studentID} onChangeText={setStudentID} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Change Birthday</Text>
                    <TextInput style={styles.input} value={birthday} onChangeText={setBirthday} />
                </View>

                {/* Smaller Class Selection Buttons */}
                <View style={styles.section}>
                    <Text style={styles.label}>Select Classes (Max 3)</Text>
                    <View style={styles.subjectContainer}>
                        {['Economics', 'Business Studies', 'Information Technologies', 'Accounts'].map((subject) => (
                            <TouchableOpacity 
                                key={subject} 
                                style={[
                                    styles.subjectButton, 
                                    selectedClasses.includes(subject) && styles.subjectButtonSelected
                                ]} 
                                onPress={() => toggleClassSelection(subject)}
                            >
                                <Text style={[
                                    styles.subjectButtonText, 
                                    selectedClasses.includes(subject) && styles.subjectTextSelected
                                ]}>
                                    {subject}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Parent's Name</Text>
                    <TextInput style={styles.input} value={parentName} onChangeText={setParentName} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Parent's Contact</Text>
                    <TextInput style={styles.input} value={parentContact} onChangeText={setParentContact} keyboardType="phone-pad" />
                </View>

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>

                {/* Sign Out Button */}
                <TouchableOpacity style={styles.signOutButton} onPress={() => Alert.alert("Signed Out", "You have been signed out!") }>
                    <Text style={styles.signOutButtonText}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    container: { padding: 20, paddingBottom: 50 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    section: { marginBottom: 15 },
    label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    input: { 
        backgroundColor: '#FFF', 
        padding: 12, 
        borderRadius: 10, 
        fontSize: 16, 
        borderWidth: 1, 
        borderColor: '#CCC' 
    },
    
    // New Class Selection Styling
    subjectContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subjectButton: {
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCC',
        margin: 5,
        alignItems: 'center',
    },
    subjectButtonSelected: {
        backgroundColor: '#FF9800',  // Orange selected color
        borderColor: '#E65100',  // Darker orange border
    },
    subjectButtonText: {
        fontSize: 14,  // Reduced size
        fontWeight: 'bold',
    },
    subjectTextSelected: {
        color: '#FFF',  // White text when selected
    },

    // Save & Sign Out Buttons
    saveButton: { backgroundColor: '#007BFF', padding: 12, borderRadius: 10, alignItems: 'center', marginTop: 20 },
    saveButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
    signOutButton: { backgroundColor: '#D9534F', padding: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
    signOutButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});

export default SettingsPage;
