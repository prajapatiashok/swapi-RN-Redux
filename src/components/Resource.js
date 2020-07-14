import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FetchSpecificResource } from '../actions';

const Resource = ({item, FetchSpecificResource}) => {
    const renderIcon = (name) => {
        if(name == "people") {
            return <MaterialCommunityIcons name="nature-people" size={50} color="black" />
        } else if(name == "planets") {
            return <MaterialCommunityIcons name="globe-model" size={50} color="black" />
        } else if(name == "films") {
            return <MaterialCommunityIcons name="film" size={50} color="black" />
        } else if(name == "species") {
            return <MaterialCommunityIcons name="format-list-bulleted-type" size={50} color="black" />
        } else if(name == "vehicles") {
            return <MaterialCommunityIcons name="bus-articulated-front" size={50} color="black" />
        } else if(name == "starships") {
            return <MaterialCommunityIcons name="star" size={50} color="black" />
        } 
    }
    return(
        <View style={styles.containerStyle}>
            <TouchableOpacity onPress={() => FetchSpecificResource(item.name)}>
                <View style={styles.wrapperStyle}>
                    <View style={{alignSelf:'center', paddingTop: 30}}>
                        { renderIcon(item.name) }
                    </View>
                    <View style={{flexShrink: 1}}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flexGrow: 1,
        margin: 10
    },
    wrapperStyle: {
        backgroundColor: 'white',
        elevation: 8,
        borderRadius: 20,
        height: 150,
        width: 150,
        borderBottomColor: '#333333',
        borderBottomWidth: 30
    },
    textStyle: {
        paddingTop: 43,
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        textTransform: 'uppercase',
    }
})

export default connect(null, { FetchSpecificResource })(Resource);