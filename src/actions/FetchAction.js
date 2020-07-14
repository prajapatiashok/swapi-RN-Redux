import { FETCH_ROOT_RESOURCE, FETCH_SPECIFIC_RESOURCE, FETCH_RESOURCE_DETAIL } from './Types';
import swapi from '../api/swapi';
import { navigate } from '../navigationRef';

export const FetchRootResource = () => {
    return (dispatch) => {
        swapi.get().then((response) => {
            dispatch({
                type: FETCH_ROOT_RESOURCE,
                payload: response.data
            })
        }).catch((e) => console.log(e))
    }
}

export const FetchSpecificResource = (endpoint) => {
    return(dispatch) => {
        swapi.get( `/${endpoint}`).then((response) => {
            dispatch({
                type: FETCH_SPECIFIC_RESOURCE,
                payload: response.data
            })
            navigate('Resource', { title: endpoint })
        }).catch((e) => {
            console.log(e)
        })
        
    }
}

export const FetchNextOrPreviousSpecificResource=(url) => {
    return(dispatch) => {
        const url_endpoint = url.split('/api/');

        swapi.get( `/${url_endpoint[1]}`).then((response) => {
            dispatch({
                type: FETCH_SPECIFIC_RESOURCE,
                payload: response.data
            })
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const FetchResourceDatail = (url) => {
    return(dispatch) => {
        const url_endpoint = url.split('/api/');
        swapi.get( `/${url_endpoint[1]}`).then((response) => {
            dispatch({
                type: FETCH_RESOURCE_DETAIL,
                payload: response.data
            })
            if(url_endpoint[1].includes('people')){
                return navigate('People')
            } else if(url_endpoint[1].includes('planets')){
                return navigate('Planet')
            }else if(url_endpoint[1].includes('films')){
                return navigate('Films')
            }else if(url_endpoint[1].includes('species')){
                return navigate('Species')
            }else if(url_endpoint[1].includes('vehicles')){
                return navigate('Vehicles')
            }else if(url_endpoint[1].includes('starships')){
                return navigate('Starships')
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}