import { Pressable, Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
 
const Homepage = () => (
  
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to ActiveAges</Text>
    <Text style={styles.paragraph}>
      Where you can enjoy gentle,
      easy-to-follow exercises designed to
      improve your strength, balance, and
      flexibility—at your own pace!
    </Text>
    <View>
      <Link href="/intro/forms" asChild>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'left',
    padding: 28,
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  paragraph:{
    marginTop:20,
    fontSize: 20,
  },
  button:{
    backgroundColor: '#A1C6EA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
    marginTop:20,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 22,
    fontWeight: 'bold',
    
  },
});