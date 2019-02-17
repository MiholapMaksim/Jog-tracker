export default function(state = null, action){
    const currentImages = {
        currentLogo: "images/header/logo.svg",
        currentBear: "images/panel/bear-face.svg"
    }
    switch (action.type){
        case "CHANGE_IMAGE_BEAR":
            currentImages.currentBear =  action.payload > 768 ? "images/panel/bear-face.svg" : "images/panel/bear-face-purple.png";
            break;
    }
    return currentImages;
    
}