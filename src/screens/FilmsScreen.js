import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { FetchResourceDatail } from '../actions' ;

const FilmsScreen = ({ resourceDetail, FetchResourceDatail }) => {
    
    const ListHeaderComponent = () => {
        return (
            <View>
                <Text style={styles.textStyle}>{resourceDetail.title}</Text>
                <Text style={styles.textStyle}>{resourceDetail.opening_crawl}</Text>
                <Text style={styles.textStyle}>Episode Id: {resourceDetail.episode_id}</Text>
                <Text style={styles.textStyle}>Director: {resourceDetail.director}</Text>
                <Text style={styles.textStyle}>Producer: {resourceDetail.producer}</Text>
                <Text style={styles.textStyle}>Release Date: {resourceDetail.release_date}</Text>
                <Text style={styles.textStyle}>Created At: {resourceDetail.created}</Text>
                <Text style={styles.textStyle}>Edited At: {resourceDetail.edited}</Text>
                <Text style={styles.textStyle}>Characters: </Text>
            </View>
        )
    }
    
    return(
        <View style={styles.containerStyle}>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent()}
                    data={resourceDetail.characters}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Character</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                {
                    resourceDetail.planets.length >= 1 ?  
                    <Text style={styles.textStyle}>Planets: </Text>
                    : null
                }
                <FlatList
                    data={resourceDetail.planets}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Planet</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />

                {
                    resourceDetail.starships.length >= 1 ?  
                    <Text style={styles.textStyle}>StarShips: </Text>
                    : null
                }
                <FlatList
                    data={resourceDetail.starships}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>starship</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                
                />  

                {
                    resourceDetail.vehicles.length >= 1 ?  
                    <Text style={styles.textStyle}>Vehicles: </Text>
                    : null
                }
                <FlatList
                    data={resourceDetail.vehicles}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Vehicle</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />

                {
                    resourceDetail.species.length >= 1 ?  
                    <Text style={styles.textStyle}>Species: </Text>
                    : null
                }
                <FlatList
                    data={resourceDetail.species}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>Species</Text>
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
        fontSize: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 3
    }
})

const mapStateToProps = state => {
    const { resourceDetail } = state.resources;
    return{ resourceDetail }
}

export default connect(mapStateToProps, { FetchResourceDatail })(FilmsScreen);