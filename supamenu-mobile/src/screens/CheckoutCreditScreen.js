import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faCreditCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const CheckoutCreditScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faAngleLeft} size={10} style={styles.topIcon} />
        <View style={styles.titles}>
          <Text>Checkout 💳</Text>
          <View>
            <Text>Frw 16,000</Text>
            <Text>Including VAT(18%)</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon
              icon={faCreditCard}
              size={15}
              style={{ margin: 10, color: "#fff" }}
            />
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Credit card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 20 }}>
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("checkout mobile");
              }}
            >
              Mobile & Cash
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Card number</Text>
          <TextInput placeholder="Enter the card number" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Cardholder name</Text>
          <TextInput placeholder="Enter the card owner" style={styles.input} />
        </View>
        <View style={styles.flexView}>
          <View>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput
              placeholder="Enter the expiry date"
              style={styles.input0}
            />
          </View>
          <View>
            <Text style={styles.label}>CVV/CVC</Text>
            <TextInput placeholder="Enter CVV/CVC" style={styles.input0} />
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          width: 300,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          marginBottom: 20,
          color: "#B1B1B1",
        }}
      >
        We will send you an order details to your email after the successfull
        payment
      </Text>
      <TouchableOpacity style={styles.payment} onPress={() => {
          navigation.navigate("payment success")
        }}>
        <FontAwesomeIcon
          icon={faLock}
          size={15}
          style={{ margin: 10, color: "#fff" }}
        />
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Pay for the order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 350,
    height: 160,
    boxShadow: "0px 2px 27px rgba(1, 118, 63, 0.4)",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  topIcon: {
    backgroundColor: "#F8F8FB",
    color: "#25D482",
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  titles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "#F8F8FB",
    height: 50,
    borderRadius: 20,
    marginTop: 40,
  },
  button: {
    flexDirection: "row",
    color: "#ffffff",
    backgroundColor: "#25D482",
    borderRadius: 20,
    alignItems: "center",
    width: 150,
  },
  form: {
    width: 350,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    backgroundColor: "#F8F8FB",
    borderRadius: 10,
    margin: 5,
    height: 50,
    padding: 5,
  },
  input0: {
    backgroundColor: "#F8F8FB",
    margin: 5,
    width: 165,
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  flexView: {
    flexDirection: "row",
  },
  payment: {
    flexDirection: "row",
    backgroundColor: "#25D482",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    margin: "auto",
  },
});

export default CheckoutCreditScreen;
