const inititialState = {
    stateFilter: false,
    dataForm: {
        dateFrom: "",
        dateTo: ""
    }
};

export default function(state = inititialState, action){
    switch (action.type){
        case "CHANGE_STATE_FILTER":
            return Object.assign({}, state, {
                stateFilter: !action.payload
            });
        case "GET_DATA_FORM_FILTER":
            return Object.assign({}, state, {
                dataForm: action.payload
            });
        default:
            return state;
    }
}