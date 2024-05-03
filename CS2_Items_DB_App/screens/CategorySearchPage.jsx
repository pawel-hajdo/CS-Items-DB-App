import {Text} from "react-native";

const CategorySearchPage = ({ route }) => {
    const {category} = route.params;

    return (
        <Text>{category}</Text>
    );
}
export default CategorySearchPage;
