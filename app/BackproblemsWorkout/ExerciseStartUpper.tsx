import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { useRouter } from 'expo-router';

const ExerciseStartMobility = () => {
  const [timeLeft, setTimeLeft] = useState(25); 
  const [setNumber, setSetNumber] = useState(1); 
  const [isPaused, setIsPaused] = useState(false); 
  const [exerciseIndex, setExerciseIndex] = useState(0); 
  const [isResting, setIsResting] = useState(false); 
  const [restTimeLeft, setRestTimeLeft] = useState(10); 

  const router = useRouter(); 

  const exercises = [
    {
      label: 'Bench Press',
      video: require('../../assets/images/SeatedUpper/SeatedBenchPress.mp4'),
    },
    {
      label: 'Shoulder Press',
      video: require('../../assets/images/SeatedUpper/SeatedShoulderPress.mp4'),
    },
    {
      label: 'Upper Chest Press',
      video: require('../../assets/images/SeatedUpper/SeatedUpperChestPress.mp4'),
    },
  ];

  const totalSets = 3; 

  useEffect(() => {
    if (isPaused || isResting) return; 

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          if (setNumber < totalSets) {
            setIsResting(true); 
            setTimeLeft(25);
            return prevTime; 
          } else if (exerciseIndex < exercises.length - 1) {
            setExerciseIndex((prevIndex) => prevIndex + 1); 
            setSetNumber(1); 
            return 25; 
          } else {
            clearInterval(timer); 
            router.push('../intro/DashboardForYes'); 
          }
        }
        return prevTime > 0 ? prevTime - 1 : 0; 
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setNumber, isPaused, isResting, exerciseIndex, router]);

  useEffect(() => {
    if (!isResting) return;

    const restTimer = setInterval(() => {
      setRestTimeLeft((prevTime) => {
        if (prevTime === 1) {
          setIsResting(false); 
          setSetNumber((prevSet) => prevSet + 1); 
          setRestTimeLeft(10); 
        }
        return prevTime > 0 ? prevTime - 1 : 0; 
      });
    }, 1000);

    return () => clearInterval(restTimer);
  }, [isResting]);

  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev); 
  };

  return (
    <View style={styles.container}>
      <Video
        source={exercises[exerciseIndex].video}
        style={styles.video}
        shouldPlay={!isPaused && !isResting} 
        isLooping
        isMuted
        resizeMode={ResizeMode.CONTAIN}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{exercises[exerciseIndex].label}</Text>
        <View style={styles.middleContainer}>
          {isResting ? (
            <Text style={styles.largeText}>Rest: {restTimeLeft} s</Text>
          ) : (
            <Text style={styles.largeText}>{timeLeft} s</Text>
          )}
          <Text style={styles.text}>Set {setNumber}/{totalSets}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePauseToggle}>
          <Text style={styles.buttonText}>{isPaused ? 'Resume' : 'Pause'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseStartMobility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 220,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    width: '100%',
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
  },
  largeText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A1C6EA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '94%',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
