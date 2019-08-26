import React from "react";
import {Text} from "react-native";
import { View, List, ListItem, Left } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultsStyles.js";

export const SearchResults = () =>{
    return(
        <View>
            <List style={styles.searchResultsWrapper}>
                <ListItem button avatar>
                    <Left style={styles.leftContainer}>
                        <Icon style={styles.leftIcon} name="location-on" />
                    </Left>    
                <Text>List Item 1</Text></ListItem>
                <ListItem><Text>List Item 2</Text></ListItem>
            </List>
        </View>
    );
}

export default SearchResults;