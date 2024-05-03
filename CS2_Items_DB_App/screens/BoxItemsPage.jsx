import {Text} from "react-native";

const BoxItemsPage = ({ route }) => {
    const {boxName} = route.params;

    return (
        <Text>{boxName}</Text>
    );
}
export default BoxItemsPage;
