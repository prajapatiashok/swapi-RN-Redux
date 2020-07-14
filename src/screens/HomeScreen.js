import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Resource from '../components/Resource';
import { FetchRootResource } from '../actions';


const HomeScreen = ({ FetchRootResource, items }) => {
    useEffect(() => {
        FetchRootResource()
    }, [])
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={items}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({item}) => <Resource item={item}/> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        marginVertical: 70,
    }
});

HomeScreen.navigationOptions = () => ({
    title: '',
    headerTransparent: true
})

const mapStateToProps = state => {
    const { resources } = state.resources;
    var items = [];
    for (key in resources) {    
        items.push(Object.assign({name: key}, {url:resources[key]}));
    }
    return { items }
}

export default connect(mapStateToProps, { FetchRootResource })(HomeScreen);
