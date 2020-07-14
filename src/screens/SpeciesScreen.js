import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FetchResourceDatail } from '../actions' ;
import Entypo from 'react-native-vector-icons/Entypo';

const PeopleScreen = ({resourceDetail, FetchResourceDatail}) => {
    
    const ListHeaderComponent = () => {
        return (
            <View>
                <Text style={styles.textStyle}>{resourceDetail.name}</Text>
                <Text style={styles.textStyle}>Classification: {resourceDetail.classification}</Text>
                <Text style={styles.textStyle}>Designation: {resourceDetail.designation}</Text>
                <Text style={styles.textStyle}>Average Height: {resourceDetail.average_height}</Text>
                <Text style={styles.textStyle}>Skin Color: {resourceDetail.skin_colors}</Text>
                <Text style={styles.textStyle}>Hair Color: {resourceDetail.hair_colors}</Text>
                <Text style={styles.textStyle}>Eye Color: {resourceDetail.eye_colors}</Text>
                <Text style={styles.textStyle}>Life Span: {resourceDetail.average_lifespan}</Text>
                <Text style={styles.textStyle}>Language: {resourceDetail.language}</Text>
                <TouchableOpacity onPress={() => FetchResourceDatail(resourceDetail.homeworld)}>
                    <Text style={styles.textStyle}>HomeWorld</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>Created At: {resourceDetail.created}</Text>
                <Text style={styles.textStyle}>Edited At: {resourceDetail.edited}</Text>
                <Text style={styles.textStyle}>Peoples: </Text>
            </View>
        )
    }
    
    return(
        <View style={styles.containerStyle}>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent()}
                    data={resourceDetail.people}
                    keyExtractor={(item,index) => { return index.toString()}}
                    renderItem={({index, item}) => {
                        return(
                            <TouchableOpacity onPress={() => FetchResourceDatail(item)}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text style={styles.nestedTextStyle}>People</Text>
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