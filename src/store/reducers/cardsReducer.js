import * as actions from '../actions';

const initialState = {
    cards: [],
    backs: [
        require('../../media/backs/1.png'),
        require('../../media/backs/2.png'),
        require('../../media/backs/3.png'),
        require('../../media/backs/4.png')
    ],
    fronts: [
        require('../../media/cards/0.png'),
        require('../../media/cards/1.png'),
        require('../../media/cards/2.png'),
        require('../../media/cards/3.png'),
        require('../../media/cards/4.png'),
        require('../../media/cards/5.png'),
        require('../../media/cards/6.png'),
        require('../../media/cards/7.png'),
        require('../../media/cards/8.png'),
        require('../../media/cards/9.png'),
        require('../../media/cards/10.png'),
        require('../../media/cards/11.png')
    ],
    activeBack: 0,
    width: 4,
    height: 3
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.BACK_CHANGE:
            return {
                ...state,
                activeBack: action.value
            };
        case actions.SIZE_CHANGE:
            return {
                ...state,
                width: action.value.width,
                height: action.value.height
            };
        case actions.SET_CARDS:
            return {
                ...state,
                cards: action.value
            };
        case actions.ROLL_CARD:
            return {
                ...state,
                cards: [...state.cards].map((el, idx) => {
                    el.status =
                        action.value.id === idx ? (el.status === 'hidden' ? 'showed' : 'hidden') : el.status;
                    return el;
                })
            };
        default:
            return state;
    }
};

export default cardsReducer;
