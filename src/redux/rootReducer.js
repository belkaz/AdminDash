import initState from './initState';

const red = ( state = initState, action ) => {
    switch ( action.type ) {
        case "ALogIn" : 
            return {
                state
            }
        default :
            return state
    }
}

export default red;