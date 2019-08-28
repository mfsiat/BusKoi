import React from "react";
import {Text} from "react-native";
import { View, InputGroup, Input } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SearchBoxStyles.js";

export const SearchBox = () =>{
    return(
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Search For Buses</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A" />
                    <Input style={styles.inputSearch} placeholder="Enter Bus Name"></Input>
                </InputGroup>
            </View>
            {/* <View style={styles.inputWrapper}>
                <Text style={styles.label}>Where To?</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A" />
                    <Input style={styles.inputSearch} placeholder="To"></Input>
                </InputGroup>
            </View> */}
        </View>
    );
}

export default SearchBox;