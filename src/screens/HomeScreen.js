import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/homeImage.png")}
        style={{ width: width, height: 318, marginBottom: 10 }}
      />
      <TouchableOpacity style={styles.buttonRight}>
        <Text style={styles.black}>Share</Text>
      </TouchableOpacity>
      <View style={styles.topText}>
        <Text style={styles.black}>Choose Kigali</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('menuScreen')
      }}>
        <Text style={styles.black}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.black}>and check our menu</Text>
      <Text style={styles.text}>
        <Text style={styles.black}>Supa</Text>
        <Text style={styles.white}>Menu</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    margin: 10,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
  },
  black: {
    color: "#fff",
  },
  white: {
    color: "#F7941D",
  },
  topText: {
    color: "#F7941D",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#F7941D",
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonRight: {
    backgroundColor: "#F7941D",
    width: 100,
    height: 40,
    padding: 15,
    position: "absolute",
    left: width - 70,
    top: 30,
    transform: [{ rotate: "270deg" }],
  },
});

export default HomeScreen;
