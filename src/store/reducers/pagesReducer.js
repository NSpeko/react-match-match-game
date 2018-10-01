import * as actions from '../actions';

const initialState = {
    activeRoutePage: 'authorization',
    registered: false,
    winModalIsShowed: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PAGE_CHANGE:
            return {
                ...state,
                activeRoutePage: action.value
            };
        case actions.CHANGE_WINMODAL_STATUS:
            return {
                ...state,
                winModalIsShowed: action.value
            };
        case actions.SET_REGISTERED:
            return {
                ...state,
                registered: true
            };
        default:
            return state;
    }
};

export default reducer;
