import * as actions from '../actions';

const initialState = {
    timer: {
        minutes: 0,
        seconds: 0,
        isOn: false,
        userTime: 0
    }
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.DROP_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    minutes: 0,
                    seconds: 0,
                    userTime: 0
                }
            };
        case actions.STOP_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    isOn: false
                }
            };
        case actions.START_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    isOn: true
                }
            };
        case actions.TIMER_PUSH:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    userTime: state.timer.userTime + 1
                }
            };
        case actions.ADD_SECOND:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    seconds: state.timer.seconds + 1
                }
            };
        case actions.ADD_MINUTE:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    minutes: state.timer.minutes + 1
                }
            };
        case actions.CLEAR_SECONDS:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    seconds: 0
                }
            };
        default:
            return state;
    }
};

export default timerReducer;
