import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Choose Kigali</Text>
      <View style={styles.iconContainer}>
        <View
          style={styles.div1}
        >
          <Image
            source={require("../../assets/tableImage.png")}
            style={styles.image1}
          />
          <TextInput
            multiline
            placeholder="Enter table Number"
            style={styles.input1}
          ></TextInput>
        </View>
        <View
          style={styles.div2}
        ></View>
        <View
          style={{
            margin: 30,
            textAlign: "left",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/waiterIcon.png")}
            style={{ width: 40, height: 35, marginBottom: 10 }}
          />
          <Text style={styles.black}>call waiter</Text>
        </View>
      </View>

      <View style={styles.topText}>
        <Text style={styles.white}>Menu</Text>
      </View>
      <View style={styles.width}>
        <View style={styles.iconContainerMod}>
          <Text style={styles.black}>Appetizer</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={10}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainerMod}>
          <Text style={styles.black}>Starter</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={10}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainerMod}>
          <Text style={styles.black}>Main</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={10}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainerMod}>
          <Text style={styles.black}>Dessert</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={10}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainerMod} >
          <Text style={styles.black} onPress={() => {
          navigation.navigate("drinks")
        }}>Drink</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={10}
            style={styles.icon}
          />
        </View>
      </View>
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
  iconContainerMod: {
    flexDirection: "row",
    margin: 10,
    width: width - 180,
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
  icon: {
    color: "#fff",
    position: "absolute",
    left: width - 190,
    top: 4,
  },
  div1: {
    margin: 30,
    textAlign: "left",
    alignItems: "left",
    justifyContent: "center",
  },
  div2: {
    borderLeftWidth: 1,
    borderLeftColor: "#F7941D",
    height: 70,
    marginTop: 28,
  },
  input1: {
    color: "white",
    width: 80,
    height: 40,
    textAlignVertical: "top",
  },
  image1 : { width: 40, height: 36, marginBottom: 10 }
});

export default MenuScreen;
