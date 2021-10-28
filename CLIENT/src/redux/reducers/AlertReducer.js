const stateDefault = {
    alertDelete: false,
    alertContact: false
}

export const AlertReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "OPEN_ALERT_DELETE": {
            state.alertDelete = true;
            return { ...state }
        };
        case "CLOSE_ALERT_DELETE": {
            state.alertDelete = false;
            return { ...state }
        }
        case "OPEN_ALERT_CONTACT": {
            state.alertContact = true;
            return { ...state }
        };
        case "CLOSE_ALERT_CONTACT": {
            state.alertContact = false;
            return { ...state }
        }
        default:
            return { ...state }
    }
}