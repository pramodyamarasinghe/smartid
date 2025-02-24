import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

const FreeCardPage = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const animations = [
    require('D:/Dev/SMARTiD-main/src/assets/congratulation.json'),
    require('D:/Dev/SMARTiD-main/src/assets/congratulation2.json'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
    }, 4000); // Switch animation every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Grand Celebration Animation */}
      <View style={styles.animationWrapper}>
        <LottieView 
          source={animations[animationIndex]}
          autoPlay
          loop
          key={animationIndex} // Ensures animation switches
          style={styles.animation}
        />
      </View>

      {/* Engaging Message */}
      <Text style={styles.title}>🎉 Congratulations! 🎉</Text>
      <Text style={styles.message}>
        You are a true winner! 🏆 Enjoy your free card and keep up the great work!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White Background
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  animationWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: -20, // Adjusted for top placement
    marginBottom: 20,
  },
  animation: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFA500', // Golden-Orange
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#FF8C00', // Slightly deeper golden-orange for contrast
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 20,
  },
});

export default FreeCardPage;
