import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemRarityBar from "./ItemRarityBar";
const BoxTile = ({boxName, boxImage, navigation}) => {

    const navigateToBoxItems = (boxName) => {
        navigation.navigate('BoxItemsPage', { boxName: boxName });
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={()=>navigateToBoxItems(boxName)}
        >
              <Text style={styles.boxName}>{boxName}</Text>
              <Image source={{ uri: boxImage }} style={styles.boxImage} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#15141F',
       width: 100,
       height: 100,
       borderRadius: 10,
       justifyContent: "center",
       alignItems: "center",
       marginTop: 8
   },
   boxName: {
       color: '#FFFFFF',
       fontSize: 10,
       fontWeight: "bold",
       textAlign: "center"
   },
   boxImage: {
       width: 90,
       height: 70,
   }
});
export default BoxTile;

