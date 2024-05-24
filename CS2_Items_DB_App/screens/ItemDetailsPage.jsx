import {globalStyles} from "../styles/globalStyles";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {getSkinsFromApi} from "../api/SkinsApiManager";
import ItemRarityBar from "../components/ItemRarityBar";
import ItemTile from "../components/itemTile";
import BoxTile from "../components/boxTile";

const ItemDetailsPage = ({ route, navigation })  => {
    const {itemName, itemImage, itemRarity} = route.params;
    const [itemDetails, setItemDetails] = useState([]);
    useEffect(() => {
        getSkinsFromApi().then(data=> {
            const details = data.find(item=>item.name === itemName)
            console.log(details);
            setItemDetails(details);
        })
    }, []);

    return (
        <View style={[globalStyles.container, {paddingLeft: 0}, {paddingRight: 0}]}>
            <Image source={{ uri: itemImage }} style={styles.itemImage} resizeMode="contain"/>
            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.itemName}>{itemName}</Text>
                <ItemRarityBar quality = {itemRarity}/>

                <View style={styles.collectionsContainer}>
                    {itemDetails.collections && itemDetails.collections.length > 0 && (
                        <>
                            {itemDetails.collections.map((collection) => (
                                <BoxTile key={collection.id} boxName={collection.name} boxImage={collection.image} navigation={navigation}/>
                            ))}
                        </>
                    )}
                    {itemDetails.crates && itemDetails.crates.length > 0 && (
                        <>
                            {itemDetails.crates.map((crate) => (
                                <BoxTile key={crate.id} boxName={crate.name} boxImage={crate.image} navigation={navigation}/>
                            ))}
                        </>
                    )}
                </View>

                <Text style={styles.sectionHeader}>Description</Text>
                <Text style={styles.itemDescription}>{itemDetails.description}</Text>

                <View style={styles.floatContainer}>
                    <Text style={styles.sectionHeader}>Float range:</Text>
                    <Text style={styles.floatValue}>{itemDetails.min_float} - {itemDetails.max_float}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.priceItem}>
                        <Text style={styles.sectionHeader}>Volume (24h):</Text>
                        <Text style={styles.itemDescription}>{itemDetails.volume}</Text>
                    </View>
                    <View style={styles.priceItem}>
                        <Text style={styles.sectionHeader}>Price:</Text>
                        <Text style={styles.itemDescription}>{itemDetails.price} PLN</Text>
                    </View>
                    <View style={styles.priceItem}>
                        <Text style={styles.sectionHeader}>Median:</Text>
                        <Text style={styles.itemDescription}>{itemDetails.median} PLN</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: '#15141F',
        borderRadius: 10,
        padding: 16,
        flex: 1,
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 8,
        textAlign: "center"
    },
    itemImage: {
        marginTop: 16,
        maxWidth: '100%',
        height: '25%',
    },
    itemDescription: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: "light",
        marginTop: 8,
    },
    collectionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginVertical: 16,
    },
    sectionHeader: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    floatContainer: {
        flexDirection: 'row',
        marginVertical: 16,
    },
    floatValue: {
        color: '#FFFFFF',
        marginTop: 8,
        marginLeft: 10,
        fontSize: 16,
    },
});
export default ItemDetailsPage;
