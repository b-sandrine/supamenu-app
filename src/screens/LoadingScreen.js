import { StyleSheet, View, Text, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={styles.black}>Supa</Text>
                <Text style={styles.white}>Menu</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7941D',
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    black : {
       color: '#000' 
    },
    white: {
        color: 'white',
    }
})

export default LoadingScreen;