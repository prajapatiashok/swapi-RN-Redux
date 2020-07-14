import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { FetchResourceDatail } from '../actions' ;


const VehiclesScreen = ({ resourceDetail, FetchResourceDatail }) => {
    
    const ListHeaderComponent = () => {
        return (
            <View>
                <Text style={styles.textStyle}>{resourceDetail.name}</Text>
                <Text style={styles.textStyle}>{resourceDetail.model}</Text>
                <Text style={styles.textStyle}>Manufacturer: {resourceDetail.manufacturer}</Text>
                <Text style={styles.textStyle}>Cost in credits: {resourceDetail.cost_in_credits}</Text>
                <Text style={styles.textStyle}>Length: {resourceDetail.length}</Text>
                <Text style={styles.textStyle}>Max atmosphering speed: {resourceDetail.max_atmosphering_speed}</Text>
                <Text style={styles.textStyle}>Crew: {resourceDetail.crew}</Text>
                <Text style={styles.textStyle}>Passengers: {resourceDetail.passengers}</Text>
                <Text style={styles.textStyle}>Cargo capacity: {resourceDetail.cargo_capacity}</Text>
                <Text style={styles.textStyle}>Consumables: {resourceDetail.consumables}</Text>
                <Text style={styles.textStyle}>Vehicle class: {resourceDetail.vehicle_class}</Text>
                <Text style={styles.textStyle}>Created At: {resourceDetail.created}</Text>
                <Text style={styles.textStyle}>Edited At: {resourceDetail.edited}</Text>
                <Text style={styles.textStyle}>Pilots: </Text>
            </View>
        )
    }
    
    return(
        <View style={styles.containerStyle}>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent()}
                    data={resourceDetail.pilots}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Pilot</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                
                <Text style={styles.textStyle}>Films: </Text>
                <FlatList
                    data={resourceDetail.films}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Film</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                
                />
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
        fontSize: 18,
        fontWeight:'bold'
    },
    nestedTextStyle: {
        fontSize: 15
    }
})

const mapStateToProps = state => {
    const { resourceDetail } = state.resources;
    return{ resourceDetail }
}

export default connect(mapStateToProps, { FetchResourceDatail })(VehiclesScreen);