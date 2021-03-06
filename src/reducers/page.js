const inititialState = {
    currentPage: window.location.pathname,
    stateMenu: false,
    statusAuthenticate: localStorage.getItem("access_token")
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
        case "STATUS_AUTHENTICATE":
            return Object.assign({}, state, {
                statusAuthenticate: action.payload
            });
        default:
            return state;
    } 
}