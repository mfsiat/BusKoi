import React from "react";
import {Text} from "react-native";
import { View, List, ListItem } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SearchResultsStyles.js";

export const SearchResults = () =>{
    return(
        <View>
            <List style={styles.searchResultsWrapper}>
                <ListItem><Text>List Item 1</Text></ListItem>
                <ListItem><Text>List Item 2</Text></ListItem>
            </List>
        </View>
    );
}

export default SearchResults;