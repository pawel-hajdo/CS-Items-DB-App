import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemQualityBar from "./ItemQualityBar";
const ItemTile = ({itemName, itemImage, navigation}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Image source={{ uri: itemImage }} style={styles.itemImage} />
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
    itemName: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    itemImage: {
        width: 90,
        height: 70,
    }
});
export default ItemTile;

