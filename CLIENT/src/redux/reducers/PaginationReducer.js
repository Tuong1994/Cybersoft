const stateDefault = {
    trang: 1,
}

export const PaginationReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_PAGE": {
            state.trang = action.page
            return { ...state }
        };
        default:
            return { ...state }
    }
}