import * as actions from '../actions';

const initialState = {
    user: {
        username: '',
        email: '',
        score: 0,
        position: 'Not Defined'
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_CHANGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.value.username,
                    email: action.value.email
                }
            };
        case actions.UPDATE_USERSCORE:
            return {
                ...state,
                user: {
                    ...state.user,
                    score: action.value
                }
            };
        case actions.UPDATE_USER_POSITION:
            return {
                ...state,
                user: {
                    ...state.user,
                    position: action.value
                }
            };
        default:
            return state;
    }
};

export default userReducer;
