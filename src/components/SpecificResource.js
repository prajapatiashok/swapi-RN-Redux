import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FetchResourceDatail } from '../actions' ;

const SpecificResource = (props) => {

    const name = props.name || props.title;
    const { FetchResourceDatail, url } = props;
    return(
        <View style={styles.containerStyle}>
            <TouchableWithoutFeedback onPress={() => FetchResourceDatail(url)}>
                <View style={styles.wrapperStyle}>
                    <Text style={styles.textStyle}>{name}</Text>
                    <MaterialIcons name="navigate-next" size={16} color="white" style={{alignSelf: 'center', paddingRight: 15}}  />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 20,
    },
    wrapperStyle: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: '#333333',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    textStyle:{
        color: 'white',
        padding: 15,
        fontSize: 16
    }

})

export default connect(null, { FetchResourceDatail })(SpecificResource)