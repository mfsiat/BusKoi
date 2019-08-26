import React from "react";
import {Text} from "react-native";
import { View, InputGroup, Input } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SearchBoxStyles.js";

export const SearchBox = () =>{
    return(
        <View style={styles.searchBox}>
            <Text style={styles.label}>Where To?</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#FF5E3A" />
                <Input style={styles.inputSearch} placeholder="Pick Up Location"></Input>
            </InputGroup>
        </View>
    );
}

export default SearchBox;