const inititialState = {
    list_jogs: [],
    statusResponse: false
};

export default function(state = inititialState, action){
    switch (action.type){
        case "SET_JOGS":
            return Object.assign({}, state, {
                list_jogs: action.payload
            });
        case "STATUS_RESPONSE_GET_JOGS":
            return Object.assign({}, state, {
                statusResponse: action.payload
            });
        default:
            return state;
    }
}