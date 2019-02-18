export const checkWindowWidth = (width) =>({
    type: "CHANGE_IMAGE_BEAR",
    payload: width
});

export const checkActivePage = (page) =>({
    type: "CHANGE_PAGE",
    payload: page
});

export const checkStateMenu = (check) => ({
    type: "CHANGE_IMAGE_LOGO",
    payload: check
});

export const changeStateMenu = (value) =>({
    type: "CHANGE_STATE_MENU",
    payload: value
});

export const changeStatusResponseAuthenticate = (status) =>({
    type: "STATUS_RESPONSE_AUTHENTICATE",
    payload: status
});

export const changeStatusResponseGetJogs = (status) =>({
    type: "STATUS_RESPONSE_GET_JOGS",
    payload: status
});

export const setJogs = (array) =>({
    type: "SET_JOGS",
    payload: array
});