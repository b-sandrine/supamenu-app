import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrderTrackingScreen = ({navigation}) => {
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
      <Text
        style={{
          textAlign: "right",
          fontWeight: "bold",
          margin: 10,
          color: "#494949",
          fontSize: 20,
        }}
      >
        Order Tracking
      </Text>
      <View style={styles.container}>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              What do you think of Choose Kigali
            </Text>
          </View>
          <View style={styles.other}>
            <Text>Rating this Restuarant</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("feedback")
        }}>
              <Text>Rate Choose Kigali</Text>
            </TouchableOpacity>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Enjoy! Served
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Ready to be served
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              The Chief started this task
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Your order is accepted
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Pending</Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Order under review
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          <View style={styles.heading}>
            <FontAwesomeIcon icon={faCheckCircle} size={15} />
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Payment has been made
            </Text>
          </View>
          <View style={styles.other}>
            <Text style={styles.textGrey}>2022-04-30 13:11:34</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    flexDirection: "row",
  },
  button: {
    width: 200,
    borderRadius: 20,
    backgroundColor: "#F7941D",
    height: 50,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 5,
  },
  other: {
    marginLeft: 38,
    marginTop: 10,
  },
  textGrey: {
    color: "#ABABAB",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default OrderTrackingScreen;
