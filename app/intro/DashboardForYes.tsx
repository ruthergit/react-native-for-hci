import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { Link, router } from "expo-router";

const Dashboard = () => {
 

  return (
    <>
      <View style={styles.blueBg}>
        <StatusBar backgroundColor="#A1C6EA" barStyle="dark-content" />
        <View>
          <Text style={styles.titleDashboard}>Dashboard</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>3.75</Text>
          <Text style={styles.statsText}>1</Text>
          <Text style={styles.statsText}>0</Text>
        </View>
        <View style={styles.labelsText}>
          <View style={styles.textWrapper}>
            <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Minutes spent</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Workouts Completed</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Exercise Streak</Text>
          </View>
        </View>
      </View>
      
       
      <View style={styles.wrapper}>
        <View style={styles.exerciseContainer}>
          <Link href="../BackproblemsWorkout/Mobility" asChild>
            <Pressable>
              <Image 
                source={require('../../assets/images/myImages/Mobility-Img.png')}
                style={styles.image} 
              />
              <Text style={styles.overlayText}>Mobility and Flexibility</Text>
              </Pressable>
          </Link>
        </View>
        <View style={styles.exerciseContainer}>
          <Link href="../BackproblemsWorkout/Upper" asChild>
            <Pressable>
              <Image 
                source={require('../../assets/images/myImages/Upper-Img.png')}
                style={styles.image} 
              />
              <Text style={styles.overlayText}>Upper Strength</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.exerciseContainer}>
          <Link href="../BackproblemsWorkout/Lower" asChild>
            <Pressable>
              <Image 
                source={require('../../assets/images/myImages/Lower-Img.png')}
                style={styles.image} 
              />
              <Text style={styles.overlayText}>Lower Body Exercise</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  overlayText: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  exerciseContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  blueBg:{
    backgroundColor:"#A1C6EA",
    height: 200,
    paddingHorizontal: 14
  },
  titleDashboard:{
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
  stats: {
    paddingTop: 16,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center', 
  },
  statsText:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  labelsText:{
    paddingTop: 10,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',  
  },
  textWrapper: {
    gap: 10,
    flex: 1,
    width: 6,
    height: 40,
    alignItems: 'center',
  }
});
