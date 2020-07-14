import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FetchResourceDatail } from '../actions' ;
import Entypo from 'react-native-vector-icons/Entypo';

const PlanetScreen = ({resourceDetail, FetchResourceDatail}) => {
    const ListHeaderComponent = () => {
        return (
            <View>
                <Text style={styles.textStyle}>Name: {resourceDetail.name}</Text>
                <Text style={styles.textStyle}>Rotation Period: {resourceDetail.rotation_period}</Text>
                <Text style={styles.textStyle}>Diameter: {resourceDetail.diameter}</Text>
                <Text style={styles.textStyle}>Climate: {resourceDetail.climate}</Text>
                <Text style={styles.textStyle}>Gravity: {resourceDetail.gravity}</Text>
                <Text style={styles.textStyle}>Terrain: {resourceDetail.terrain}</Text>
                <Text style={styles.textStyle}>Surface Water: {resourceDetail.surface_water}</Text>
                <Text style={styles.textStyle}>Population: {resourceDetail.population}</Text>
                <Text style={styles.textStyle}>Created At: {resourceDetail.created}</Text>
                <Text style={styles.textStyle}>Edited At: {resourceDetail.edited}</Text>
                {
                   resourceDetail.residents.length >= 1 ?  
                   <Text style={styles.textStyle}>Residents: </Text>
                   : null
                }
            </View>
        )
    }

    return(
        <View style={styles.containerStyle} >
            <View>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent()}
                    data={resourceDetail.residents}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.residentTextStyle}>Resident</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 15,
        elevation: 8,
        padding: 10
    },
    textStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight:'bold',
        fontSize: 18,
    },
    residentTextStyle: {
        fontSize: 15
    }
})

const mapStateToProps = state => {
    const { resourceDetail } = state.resources;
    return{ resourceDetail }
}

export default connect(mapStateToProps, { FetchResourceDatail })(PlanetScreen);