import React from 'react';
import './DifficultySelector.css';
import {connect} from 'react-redux';
import Helper from '../Helper/Helper';
import * as actions from '../../store/actions';

function DifficultySelector(props) {
    const sizeCompare = (width, height) =>
        width === props.width && height === props.height ? true : false;

    const onDifficultyChange = (width, height) => {
        props.sizeChange(width, height);
        props.setCards(Helper.generateCardsArr(width, height));
        props.stopTimer();
        props.dropTimer();
    };

    return (
        <div className="difficulty-container">
            <div
                className={`easy-dif dif-card ${sizeCompare(3, 2) ? 'active' : ''}`}
                onClick={() => onDifficultyChange(3, 2)}
            >
                E
            </div>
            <div
                className={`medium-dif dif-card ${sizeCompare(4, 3) ? 'active' : ''}`}
                onClick={() => onDifficultyChange(4, 3)}
            >
                M
            </div>
            <div
                className={`hard-dif dif-card ${sizeCompare(5, 5) ? 'active' : ''}`}
                onClick={() => onDifficultyChange(5, 4)}
            >
                H
            </div>
            <div
                className={`nightmare-dif dif-card ${sizeCompare(6, 5) ? 'active' : ''}`}
                onClick={() => onDifficultyChange(6, 5)}
            >
                N
            </div>
        </div>
    );
}

const StoP = state => {
    return {
        width: state.cards.width,
        height: state.cards.height
    };
};

const DtoP = dispatch => {
    return {
        sizeChange: (width, height) =>
            dispatch({type: actions.SIZE_CHANGE, value: {width: width, height: height}}),
        setCards: cards => dispatch({type: actions.SET_CARDS, value: cards}),
        dropTimer: () => dispatch({type: actions.DROP_TIMER}),
        stopTimer: () => dispatch({type: actions.STOP_TIMER})
    };
};

export default connect(
    StoP,
    DtoP
)(DifficultySelector);
