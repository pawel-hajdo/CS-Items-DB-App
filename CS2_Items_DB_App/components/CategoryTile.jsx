import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemRarityBar from "./ItemRarityBar";
const CategoryTile = ({itemName, itemImage, navigation}) => {

    const navigateToCategorySearch = (categoryName) => {
        navigation.navigate('CategorySearch', { category: categoryName });
    };

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigateToCategorySearch(itemName)}
        >
            <Image source={{ uri: itemImage }} style={styles.itemImage} />
            <Text style={styles.itemName}>{itemName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        width: 145,
        height: 130,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: "regular",
        textAlign: "center"
    },
    itemImage: {
        width: 110,
        height: 85,
    }
});
export default CategoryTile;

