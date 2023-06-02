import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native-web";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faCreditCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const CheckoutMobileScreen = ({navigation}) => {
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
          <TouchableOpacity style={{ margin: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: "bold", margin: 10 }}>
              Mobile & Cash
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.flexDisplay}>
            <Image source={require('../../assets/mtn.png')} style={styles.image} />
            <Text style={{margin: 35}}>MTN Mobile Money</Text>
        </View>
        <View  style={styles.flexDisplay}>
            <Image source={require('../../assets/airtel.png')} style={styles.image} />
            <Text style={{margin: 35}}>Airtel Money</Text>
        </View>
        <View  style={styles.flexDisplay}>
            <Image source={require('../../assets/cash.png')} style={styles.image} />
            <Text style={{margin: 35}}>Cash</Text>
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
    marginLeft: "auto",
  },
  form: {
    width: 350,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  payment: {
    flexDirection: "row",
    backgroundColor: "#25D482",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  image : {
    width: 100,
    height: 100,
  },
  flexDisplay: {
    flexDirection: 'row',
    margin: 10,
  }
});

export default CheckoutMobileScreen;
