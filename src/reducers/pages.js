const inititialState = {
    currentPage: "/",
    stateMenu: false
}

export default function(state = inititialState, action){
    switch (action.type){
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                currentPage: action.payload
            })
        case "CHANGE_STATE_MENU":
            return Object.assign({}, state, {
                stateMenu: !action.payload
            })
        default:
            return state;
    } 
}