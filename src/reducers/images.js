const inititialState = {
    currentLogo: "images/header/logo.svg",
    currentBear: "images/panel/bear-face.svg",
    currentFilter: "images/header/filter.svg"
};

export default function(state = inititialState, action){
    switch (action.type){
        case "CHANGE_IMAGE_BEAR":
            return Object.assign({}, state, {
                currentBear: action.payload > 768 ? "images/panel/bear-face.svg" : "images/panel/bear-face-purple.png"
            });
        case "CHANGE_IMAGE_LOGO":
            return Object.assign({}, state, {
                currentLogo: action.payload ? "images/header/logo-green.png" : "images/header/logo.svg"
            });
        case "CHANGE_IMAGE_FILTER":
            return Object.assign({}, state, {
                currentFilter: action.payload ? "images/header/filter-active.svg" : "images/header/filter.svg"
            });
        default:
            return state;
    } 
}