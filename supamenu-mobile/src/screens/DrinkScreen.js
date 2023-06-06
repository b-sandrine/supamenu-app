import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DrinkScreen = ({navigation}) => {
  return (
    <View>
      <FontAwesomeIcon
        icon={faAngleLeft}
        size={15}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#F8F8FB",
          color: "#F08F5F",
          marginTop: 20,
          marginLeft: 10,
          borderRadius: 5,
        }}
      />
      <Text style={styles.text_black}>Choose Kigali</Text>
      <Text style={styles.text_orange}>Drinks</Text>
      <View style={styles.single_drink}>
        <Image
          source={require("../../assets/drink1.png")}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
        <View style={styles.details}>
          <Text style={styles.text_black_0}>
            Kaffir Lime Vodka, Lemongrass, Ginger, Citrus
          </Text>
          <Text style={styles.text_black_1}>Tom Yummy - 12.5</Text>
          <View style={styles.pricing_quantity}>
            <Text style={styles.text_orange_1}>Frw 5,000</Text>
            <View style={styles.pricing_quantity_0}>
              <Text style={styles.text_orange_2}>-</Text>
              <Text>2</Text>
              <Text style={styles.text_orange_2}>+</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.single_drink}>
        <Image
          source={require("../../assets/drink2.png")}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
        <View style={styles.details}>
          <Text style={styles.text_black_0}>
            Gin, Grenadine, Citrus, Cucumber
          </Text>
          <Text style={styles.text_black_1}>Singapore Sling - 12.5</Text>
          <View style={styles.pricing_quantity}>
            <Text style={styles.text_orange_1}>Frw 5,000</Text>
            <View style={styles.pricing_quantity_0}>
              <Text style={styles.text_orange_2}>-</Text>
              <Text>2</Text>
              <Text style={styles.text_orange_2}>+</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.single_drink}>
        <Image
          source={require("../../assets/drink3.png")}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
        <View style={styles.details}>
          <Text style={styles.text_black_0}>
            Vanilla, Coffee and Chocolate with hints of Orange
          </Text>
          <Text style={styles.text_black_1}>White Russian- 12.5</Text>
          <View style={styles.pricing_quantity}>
            <Text style={styles.text_orange_1}>Frw 6,000</Text>
            <View style={styles.pricing_quantity_0}>
              <Text style={styles.text_orange_2}>-</Text>
              <Text>2</Text>
              <Text style={styles.text_orange_2}>+</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pricing_quantity_1}>
        <Text style={{ color: "#F08F5F" }}>more drinks</Text>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={20}
          style={{ color: "#F08F5F" }}
        />
      </View>
      <View style={styles.pricing}>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          16 000 RWF
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("checkout credit")
        }}>
        Proceed to checkout
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text_black: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginLeft: "auto",
    marginTop: 10,
    marginRight: 20,
  },
  text_orange: {
    fontSize: 18,
    color: "#F7941D",
    marginLeft: "auto",
    marginTop: 10,
    marginRight: 20,
  },
  single_drink: {
    backgroundColor: "#F8F8FB",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  details: {
    marginLeft: "auto",
    width: 215,
    height: 100,
  },
  text_black_0: {
    marginBottom: 5,
    fontSize: 12,
    marginTop: 10,
  },
  text_black_1: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 14,
  },
  text_orange_1: {
    color: "#F08F5F",
    fontSize: 16,
    width: 100,
    marginTop: 5,
  },
  text_orange_2: {
    color: "#F08F5F",
    fontSize: 20,
  },
  pricing_quantity: {
    flex: 1,
    flexDirection: "row",
  },
  pricing_quantity_0: {
    flex: 1,
    flexDirection: "row",
    width: 67,
    height: 25,
    marginLeft: "auto",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  pricing_quantity_1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    width: 150,
    height: 20,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: 330,
    height: 65,
    backgroundColor: "#F7941D",
    borderRadius: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  pricing: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    width: 320,
    height: 65,
    marginRight: "auto",
    justifyContent: "space-between",
  },
});

export default DrinkScreen;
