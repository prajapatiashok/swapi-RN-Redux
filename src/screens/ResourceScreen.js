import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SpecificResourceComponent from '../components/SpecificResource'
import { FetchNextOrPreviousSpecificResource } from '../actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResourceScreen = ({ specificResource, FetchNextOrPreviousSpecificResource }) => {

    return(
        <View style={styles.container}>
            <FlatList
                data={specificResource.results}
                keyExtractor={(item,index) => { return index.toString()}}
                renderItem={({item}) => {
                    return(
                        <SpecificResourceComponent {...item} />
                    );
                }}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 5}}>
                { typeof specificResource.previous === "object" ? null :
                    <TouchableOpacity onPress={() => FetchNextOrPreviousSpecificResource(specificResource.previous)}>
                        <AntDesign name="caretleft" size={24} color="#333333" />
                    </TouchableOpacity>
                }
                { 
                typeof specificResource.next === "object" ? null :
                    <TouchableOpacity onPress={() => FetchNextOrPreviousSpecificResource(specificResource.next)}>
                        <AntDesign name="caretright" size={24} color="#333333" />
                    </TouchableOpacity>
                }
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
        marginTop: 20,
    }
});


ResourceScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title')
})

const mapStateToProps = state => {
    const { specificResource } = state.resources;
    return { specificResource };
}
export default connect(mapStateToProps, { FetchNextOrPreviousSpecificResource })(ResourceScreen);
