import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";
import { Icon } from 'react-native-elements'

export default function Search({onSearch}) {
        
        return (
            <View style={styles.main_container}>
                <View style={styles.searchContent}>
                    <Icon name="search" size={28} style={styles.searchIcon}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder='Titre du film'
                        onChangeText={(text) => onSearch(text)}
                    />
                </View>
            </View>
        )

}

const styles = StyleSheet.create({
    main_container: {
        padding: 20,
        backgroundColor: '#F44802',
        width: '100%',
        paddingTop: 80,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
    searchContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
    },
    searchIcon: {
        marginRight: 10
    },
    button: {
        color: 'white'
    }
})