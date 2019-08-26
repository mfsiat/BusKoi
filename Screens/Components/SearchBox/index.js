import React from "react";
import {Text} from "react-native";
import { View, InputGroup, Input } from "native-base";

import styles from "./SearchBoxStyles.js";

export const SearchBox = () =>{
    return(
        <View style={styles.searchBox}>
            <Text style={styles.label}>Where To?</Text>
            <InputGroup>
                <Input style={styles.inputSearch} placeholder="Pick Up Location"></Input>
            </InputGroup>
        </View>
    );
}

export default SearchBox;