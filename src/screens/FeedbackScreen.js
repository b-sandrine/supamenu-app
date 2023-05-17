import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FeedbackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topText}>
        <Text style={styles.white}>Yayy!</Text>
        <Text style={styles.white}>We value all feedback,</Text>
        <Text style={styles.white}>please rate yout experience</Text>
        <Text style={styles.white}>below:</Text> 
      </View>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faStar} size={20} style={styles.white} />
        <FontAwesomeIcon icon={faStar} size={20} style={styles.white} />
        <FontAwesomeIcon icon={faStar} size={20} style={styles.white} />
        <FontAwesomeIcon icon={faStar} size={20} style={styles.black} />
        <FontAwesomeIcon icon={faStar} size={20} style={styles.black} />
      </View>
      <View style={styles.topText}>
        <Text style={styles.white}>Thank you for helping us</Text>
        <Text style={styles.white}>improve our service!</Text> 
      </View>
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
    flexDirection: 'row',
    margin: 20,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 140,
    marginBottom: 20,
  },
  black: {
    color: "#fff",
  },
  white: {
    color: "#F7941D",
  },
  topText: {
    color: "#F7941D",
    marginTop: 60,
    marginBottom: 60, 
    textAlign: 'center',
  }
});

export default FeedbackScreen;
