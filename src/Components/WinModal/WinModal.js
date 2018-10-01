import React from 'react';
import './WinModal.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Helper from '../Helper/Helper';
import * as actions from '../../store/actions';

function WinModal(props) {
    const oneMore = () => {
        props.setCards(Helper.generateCardsArr(props.width, props.height));
        props.setWinModalStatusShowed(false);
    };

    return (
        <div className={`win-box ${props.hidden ? 'hidden' : ''}`}>
            <div className="win-message">
                <span className="win-header">You win!</span>
                <span className="win-score">Your score is: {props.user.score}</span>
                <p className="win-text">
                    Congratulations, {props.user.username}! Can you make it one more time?
                </p>
            </div>
            <div className="win-buttons">
                <button className="win-button" onClick={() => oneMore()}>
                    Play Again
                </button>
                <Link to="/scoreboard" className="link">
                    <button onClick={() => props.setWinModalStatusShowed(false)} className="win-button">
                        Show ScoreList
                    </button>
                </Link>
            </div>
        </div>
    );
}

const StoP = state => {
    return {
        user: state.user.user,
        hidden: !state.pages.winModalIsShowed,
        width: state.cards.width,
        height: state.cards.height
    };
};

const DtoP = dispatch => {
    return {
        setCards: cards => dispatch({type: actions.SET_CARDS, value: cards}),
        setWinModalStatusShowed: status =>
            dispatch({type: actions.CHANGE_WINMODAL_STATUS, value: status})
    };
};

export default connect(
    StoP,
    DtoP
)(WinModal);
