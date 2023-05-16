import { StyleSheet, View, Text, Dimensions } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-web";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>
          <Text style={styles.black}>Supa</Text>
          <Text style={styles.white}>Menu</Text>
        </Text>
        <View style={styles.welcome}>
          <Text>Welcome ...</Text>
          <Text>Please fill in the information</Text>
        </View>
        <View style={styles.inputContainer}>
          <Feather name="user" size={18} color="black" style={styles.icon} />
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="phone" size={18} color="black" style={styles.icon} />
          <TextInput placeholder="Phone Number" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="mail" size={18} color="black" style={styles.icon} />
          <TextInput placeholder="Your Email" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
        <View style={styles.welcome}>
          <Text>OR</Text>
          <Text>If you have a PMG account</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>
          Don't have account? <Text style={styles.white}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7941D",
    height: height,
    width: width,
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    height: 545,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
  black: {
    color: "#000",
  },
  white: {
    color: "#F7941D",
  },
  button: {
    backgroundColor: "#F7941D",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  welcome: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SignupScreen;
