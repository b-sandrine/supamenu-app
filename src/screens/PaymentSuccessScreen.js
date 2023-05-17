import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../../assets/payment_success.png')}
            style={{width: 200, height: 200, marginTop: 10, marginBottom: 20}}
        />
      <View style={styles.topText}>
        <Text style={styles.white}>Payment Success, Yayy!</Text>
        <Text style={styles.black}>we will send order details and invoice in</Text>
        <Text style={styles.black}>your contact no and registered email</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={{color: '#F08F5F', marginRight: 30}}>Check Details</Text>
        <FontAwesomeIcon icon={faArrowRight} size={20} style={{color: '#F08F5F'}} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.black}>Download Invoice</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F7941D',
    borderRadius: 20,
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,

  }
});

export default PaymentSuccessScreen;
