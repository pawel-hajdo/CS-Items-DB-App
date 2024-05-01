import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemQualityBar from "./ItemQualityBar";
const ItemTile = ({itemName, itemImage, itemQuality}) => {
    const hasQuality = !!itemQuality;
    const containerHeight = hasQuality ? 120 : 100;

    return (
        <TouchableOpacity style={[styles.container, { height: containerHeight }]}>
              <Text style={styles.itemName}>{itemName}</Text>
              <Image source={{ uri: itemImage }} style={styles.itemImage} />

              {hasQuality && <ItemQualityBar quality={itemQuality} />}
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

