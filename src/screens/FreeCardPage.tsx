import React, { useState, useEffect } from 'react';  
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { themeImages } from '../constants/theme';

const FreeCardPage = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const animations = [
    themeImages.FreeCardImg,
    themeImages.FreeCardImg2
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
    }, 4000); // Switch animation every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={['#FFECB3', '#FFFFFF']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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
          <View style={styles.messageBox}>
            <Text style={styles.title}>🎉 Congratulations! 🎉</Text>
            <Text style={styles.message}>
              You’ve achieved something amazing! Enjoy your free card and keep striving for greatness! 🚀
            </Text>
          </View>

          {/* Additional Motivational Content */}
          <View style={styles.extraContent}>
            <Text style={styles.extraText}>🔥 Keep pushing forward!</Text>
            <Text style={styles.extraText}>💡 Stay motivated and inspired.</Text>
            <Text style={styles.extraText}>🌟 Great things are ahead!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  animationWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  messageBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 18,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 15,
  },
  title: {
    fontSize: 28, // Reduced size for better balance
    fontWeight: 'bold',
    color: '#000', // Black for strong contrast
    textAlign: 'center',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#333', // Dark gray for readability
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  extraContent: {
    marginTop: 15,
    alignItems: 'center',
    width: '85%',
  },
  extraText: {
    fontSize: 14,
    color: '#000', // Black for better contrast
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 4,
  },
});

export default FreeCardPage;
