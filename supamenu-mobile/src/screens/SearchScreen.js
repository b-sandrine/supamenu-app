import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <FontAwesomeIcon icon={faSearch} size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for your preffered restaurant"
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <Text style={styles.text}>or</Text>
      <QRCode 
        size={250}
      />
      <Text style={styles.text}>Scan, Pay & Enjoy!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7941D",
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 40,
    width: 350,
  },
  icon: {
    marginRight: 10,
    color: "#F7941D",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    outlineStyle: "none",
  },
  text: { marginBottom: 40, marginTop: 40, fontSize: 20, fontWeight: "bold" },
});

export default SearchScreen;
