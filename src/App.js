import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './navigationRef';
import reducers from './reducers';

import HomeScreen from './screens/HomeScreen';
import ResourceScreen from './screens/ResourceScreen';
import PeopleScreen from './screens/PeopleScreen';
import PlanetScreen from './screens/PlanetScreen';
import FilmsScreen from './screens/FilmsScreen';
import SpeciesScreen from './screens/SpeciesScreen';
import VehiclesScreen from './screens/VehiclesScreen';
import StarshipsScreen from './screens/StarshipsScreen';


const stackNavigator = createStackNavigator({
    Home: HomeScreen,
    Resource: ResourceScreen,
    People: PeopleScreen,
    Planet: PlanetScreen,
    Films: FilmsScreen,
    Species: SpeciesScreen,
    Vehicles: VehiclesScreen,
    Starships: StarshipsScreen
})

const App = createAppContainer(stackNavigator);

export default () => {
    return(
        <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
            <App ref={ (navigator) => {setNavigator(navigator)} }/>
        </Provider>
    );
};

