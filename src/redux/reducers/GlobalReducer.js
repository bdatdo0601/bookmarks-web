import { GlobalActionTypes } from "../actions/GlobalActions";

const initialState = {
    isMobile: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.ON_SIZE_CHANGE:
            return Object.assign({}, state, {
                isMobile: action.payload,
            });
        case GlobalActionTypes.CHECK_MOBILE_FULFILL:
            return Object.assign({}, state, {
                isMobile: action.payload,
            });
        default:
            return state;
    }
};
