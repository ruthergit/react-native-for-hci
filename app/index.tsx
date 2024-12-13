import { Pressable, Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { Link, router } from "expo-router";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#A1C6EA" barStyle="dark-content"/>
      <Text style={styles.text}>ActiveAges</Text>
      <Link href="/intro/firstpage" asChild>
        <Pressable>
          <Image 
            source= {require('../assets/images/myImages/activeAgeLogo.png')}
            style={styles.image} 
          />
        </Pressable>
      </Link>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1C6EA',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  image: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    marginTop: 20, // Space between the text and the image
  },
});
