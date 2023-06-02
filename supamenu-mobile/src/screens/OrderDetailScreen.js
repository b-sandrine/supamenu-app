import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const OrderDetailScreen = () => {
  return (
    <View>
      <FontAwesomeIcon
        icon={faAngleLeft}
        size={15}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "#F8F8FB",
          color: "#F08F5F",
          marginTop: 20,
          marginLeft: 10,
          borderRadius: 5,
        }}
      />
      <Text style={{ textAlign: "center", fontWeight: "bold", margin: 10 }}>
        Order Details
      </Text>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>2 x Tom Yummy - 12.5</Text>
          <Text style={styles.textOrange}>Frw 10,000</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>2 x Singapore Sling</Text>
          <Text style={styles.textOrange}>Frw 10,000</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>2x White Russian- 12.5</Text>
          <Text style={styles.textOrange}>Frw 12,000</Text>
        </View>

        <View style={styles.textContainer1}>
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
              color: "#F08F5F",
            }}
          >
            Frw 32,000
          </Text>
        </View>
        <View style={styles.textContainer1}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Payment Method
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#F08F5F",
            }}
          >
            Order Id
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Mobile Money</Text>
          <Text>123456789098766 Sol</Text>
        </View>
        <View style={{textAlign:'center', marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Restuarant</Text>
            <Text>Choose Kigali</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 330,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  textContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: 30,
  },
  textOrange: {
    color: "#F08F5F",
  },
  button: {
    width: 150,
    borderRadius: 20,
    backgroundColor: '#F7941D',
    height: 60,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
  }
});

export default OrderDetailScreen;
