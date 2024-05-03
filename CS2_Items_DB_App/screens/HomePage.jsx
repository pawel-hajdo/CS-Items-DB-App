import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import ItemTile from "../components/ItemTile";
import ItemTileBig from "../components/itemTileBig";
const HomePage = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {fontSize: 35}]}>CS2 DB</Text>
            <ScrollView>
                <Text style={globalStyles.headlineText}>Latest</Text>
                <View style={styles.rowContainer}>
                    <ItemTile itemName="Kilowatt Case" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_33_png.png"}></ItemTile>
                    <ItemTile itemName="Ambush Sticker Capsule" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_sticker_pack_community_2024_capsule_png.png"}></ItemTile>
                    <ItemTile itemName="NIGHTMODE Music Kit Box" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_musickit_nightmode_capsule_png.png"}></ItemTile>
                </View>
                <View style={styles.watchlistText}>
                    <Text style={globalStyles.headlineText}>From your watchlist</Text>
                    <Text style={globalStyles.secondaryText}>Go to watchlist</Text>
                </View>
                <View style={styles.watchListContainer}>
                    <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                        There is nothing here :(((
                        Go add something to your watchlist
                    </Text>
                </View>
                <Text style={globalStyles.headlineText}>Search for</Text>
                <View style={styles.rowContainer}>
                    <ItemTileBig itemName= "Cases" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_30_png.png"} navigation={navigation}></ItemTileBig>
                    <ItemTileBig itemName= "Collections" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/set_icons/set_op10_ancient_png.png"} navigation={navigation}></ItemTileBig>
                    <ItemTileBig itemName= "Agents" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/characters/customplayer_ctm_fbi_variantb_png.png"} navigation={navigation}></ItemTileBig>
                    <ItemTileBig itemName= "Tournament stickers" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_sticker_pack_cph2024_contenders_png.png"} navigation={navigation}></ItemTileBig>
                    <ItemTileBig itemName= "Graffities" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/stickers/valve_sprays/howling_dawn_png.png"} navigation={navigation}></ItemTileBig>
                    <ItemTileBig itemName= "Music kits" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/music_kits/timhuling_01_png.png"} navigation={navigation}></ItemTileBig>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
       // paddingTop: 8,
        paddingBottom: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    watchlistText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    watchListContainer: {
        backgroundColor: '#15141F',
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        marginTop: 4
    }
});
export default HomePage;
