const stateDefault = {
  pageLoading: false,
  buttonLoading: false,
  listLoading: false,
};

export const LoadingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "OPEN_PAGE_LOADING": {
      state.pageLoading = true;
      return { ...state };
    }
    case "CLOSE_PAGE_LOADING": {
      state.pageLoading = false;
      return { ...state };
    }
    case "OPEN_BUTTON_LOADING": {
      state.buttonLoading = true;
      return { ...state };
    }
    case "CLOSE_BUTTON_LOADING": {
      state.buttonLoading = false;
      return { ...state };
    }
    case "OPEN_LIST_LOADING": {
      state.listLoading = true;
      return { ...state }
    }
    case "CLOSE_LIST_LOADING": {
      state.listLoading = false;
      return { ...state }
    }
    default:
      return { ...state };
  }
};
