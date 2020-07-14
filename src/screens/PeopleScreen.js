import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FetchResourceDatail } from '../actions' ;
import Entypo from 'react-native-vector-icons/Entypo';


const PeopleScreen = ({resourceDetail, FetchResourceDatail}) => {
    const ListHeaderComponent = () => {
        return (
            <View>
                <Text style={styles.textStyle}>Name: {resourceDetail.name}</Text>
                <Text style={styles.textStyle}>Height: {resourceDetail.height}</Text>
                <Text style={styles.textStyle}>Mass: {resourceDetail.mass}</Text>
                <Text style={styles.textStyle}>Hair Color: {resourceDetail.hair_color}</Text>
                <Text style={styles.textStyle}>Skin Color: {resourceDetail.skin_color}</Text>
                <Text style={styles.textStyle}>Eye Color: {resourceDetail.eye_color}</Text>
                <Text style={styles.textStyle}>DOB: {resourceDetail.birth_year}</Text>
                <Text style={styles.textStyle}>Gender: {resourceDetail.gender}</Text>
                <Text style={styles.textStyle}>Created At: {resourceDetail.created}</Text>
                <Text style={styles.textStyle}>Edited At: {resourceDetail.edited}</Text>
                <TouchableOpacity onPress={() => FetchResourceDatail(resourceDetail.homeworld)}>
                    <Text style={styles.textStyle}>HomeWorld</Text>
                </TouchableOpacity>

                {
                   resourceDetail.films.length >= 1 ?  
                   <Text style={styles.textStyle}>Films: </Text>
                   : null
                }
                
            </View>
        )
    }

    
    return(
        <View style={styles.containerStyle}>
            <FlatList
                ListHeaderComponent={ListHeaderComponent()}
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
                resourceDetail.starships.length >= 1 ?  
                <Text style={styles.textStyle}>Starships: </Text>
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
                                <Text style={styles.nestedTextStyle}>Starship</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
            
            <View>
            
            {
                resourceDetail.species.length >= 1 ?  
                <Text style={styles.textStyle}>Species: </Text>
                : null
            }
                <FlatList
                    data={resourceDetail.species}
                    keyExtractor={(item,index) => { return index.toString()}}renderItem={({index, item}) => {
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
        fontWeight:'bold',
    },
    nestedTextStyle: {
        fontSize: 15
    }
})

const mapStateToProps = state => {
    const { resourceDetail } = state.resources;
    return{ resourceDetail }
}

export default connect(mapStateToProps, { FetchResourceDatail })(PeopleScreen);