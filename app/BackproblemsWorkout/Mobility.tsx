import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Pressable,TouchableOpacity } from 'react-native'
import { Link, useRouter } from "expo-router";

export class Mobility extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blueBg}>
          <Image 
              source={require('../../assets/images/myImages/Mobility-Img.png')}
              style={styles.image} 
            />
            <Text style={styles.overlayText}>Mobility and Flexibility</Text>
        </View>
        <View style={styles.bottomContainer}>
        <View style={styles.exerciseContainer}>
              <Image
                source={require('../../assets/images/SeatedMobility/GoalPostStretching_Thumbnail.png')}
                style={styles.thumbnailImg}
              />
              <View style={styles.exerciseTextContainer}>
                <Text style={styles.exerciseText}>Goal Post Stretching</Text>
                <Text style={styles.exerciseText}>3 x 25 seconds</Text>
              </View>
        </View>
        <View style={styles.exerciseContainer}>
              <Image
                source={require('../../assets/images/SeatedMobility/SeatedHamstringStretch_Thumbnail.png')}
                style={styles.thumbnailImg}
              />
              <View style={styles.exerciseTextContainer}>
                <Text style={styles.exerciseText}>Hamstring Stretch</Text>
                <Text style={styles.exerciseText}>3 x 25 seconds</Text>
              </View>
        </View>
        <View style={styles.exerciseContainer}>
              <Image
                source={require('../../assets/images/SeatedMobility/SeatedPiriformStretch_Thumbnail.png')}
                style={styles.thumbnailImg}
              />
              <View style={styles.exerciseTextContainer}>
                <Text style={styles.exerciseText}>Piriform Stretch</Text>
                <Text style={styles.exerciseText}>3 x 25 seconds</Text>
              </View>
        </View>
            <View>
            <Link href="../BackproblemsWorkout/ExerciseStartMobility" asChild>
              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Start Workout</Text>
              </TouchableOpacity>
            </Link>
            </View>
        </View>
      </View>
    )
  }
}

export default Mobility

const styles = StyleSheet.create({
  exerciseTextContainer:{
    width:'60%',
    height:'40%',
  },
  exerciseText: {
    flex: 1,
    paddingLeft: 10, // Adjusts spacing between image and text
    alignSelf: 'flex-start', // Vertically centers the text
    fontSize: 18,
    fontWeight: '600'
  },
  thumbnailImg:{
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
  button:{
    backgroundColor: '#A1C6EA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 22,
    fontWeight: 'bold',
  },
  exerciseContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#ffffff",
    height: '29%',
    marginVertical: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  bottomContainer: {
    height: '75%',
    marginHorizontal: 20,
  },
  overlayText: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueBg: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: "#f2f0ef",
  }
});
