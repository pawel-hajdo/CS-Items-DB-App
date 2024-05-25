import {Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
const WatchlistPage = ({ navigation })  => {
    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {paddingTop: 8}]}>Watchlist</Text>
        </View>
    );
}

export default WatchlistPage;
