const inititialState = {
    stateFilter: false
};

export default function(state = inititialState, action){
    switch (action.type){
        case "CHANGE_STATE_FILTER":
            return Object.assign({}, state, {
                stateFilter: !action.payload
            });
        default:
            return state;
    }
}