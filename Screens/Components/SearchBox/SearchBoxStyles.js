import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; // full width

const styles = {
    searchBox:{
        top: 0,
        position: "absolute",
        width: width
    },
    inputWrapper:{
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor:"#fff",
        opacity: 0.9,
        borderRadius: 7
    }
}