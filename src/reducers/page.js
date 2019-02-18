const inititialState = {
    currentPage: "/",
    stateMenu: false,
    statusResponse: false
};

export default function(state = inititialState, action){
    switch (action.type){
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                currentPage: action.payload
            });
        case "CHANGE_STATE_MENU":
            return Object.assign({}, state, {
                stateMenu: !action.payload
            });
        case "STATUS_RESPONSE_AUTHENTICATE":
            return Object.assign({}, state, {
                statusResponse: action.payload
            });
        default:
            return state;
    } 
}