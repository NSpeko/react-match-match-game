import React, {Component} from 'react';
import './Game.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Timer from '../Timer/Timer';
import BackSelector from '../BackSelector/BackSelector';
import DifficultySelector from '../DifficultySelector/DifficultySelector';
import Field from '../Field/Field';
import WinModal from '../WinModal/WinModal';
import Helper from '../Helper/Helper';
import * as actions from '../../store/actions';

class Game extends Component {
    state = {
        compareArr: []
    };

    componentDidMount = () => {
        this.props.changePage('Game');
        this.props.setCards(Helper.generateCardsArr(this.props.width, this.props.height));
    };

    pushCardToCompare = card => {
        if (!this.props.timerIsOn) {
            this.props.startTimer();
        }

        this.setState(({compareArr}) => ({
            compareArr: [...compareArr, card]
        }));

        if (this.state.compareArr.length === 2) {
            this.props.setCards(
                Helper.changeCards(
                    Helper.compareCards(this.state.compareArr),
                    this.props.cards,
                    this.state.compareArr
                )
            );
            this.setState({
                compareArr: []
            });
            this.isWin();
        }
    };

    isWin = () => {
        return this.props.cards.filter(el => el.status === 'dropped').length === this.props.cards.length
            ? this.win()
            : null;
    };

    win = () => {
        this.props.setWinModalStatusShowed(true);
        this.props.stopTimer();
        this.props.updateUserScore(
            Helper.calculateScore(this.props.width, this.props.height, this.props.userTime)
        );
        Helper.sendUserData({
            username: this.props.user.username,
            email: this.props.user.email,
            score: this.props.user.score
        });
    };

    render = () => {
        return (
            <div className="game-window">
                {!(this.props.user.username && this.props.user.email) ? (
                    <Redirect to="/Authorization"/>
                ) : (
                    ''
                )}
                <div className="game-container">
                    <BackSelector className="back-container" backs={this.backs}/>
                    <DifficultySelector className="difficulty-container"/>
                    <div className="field-container">
                        <Field pushCardToCompare={this.pushCardToCompare}/>
                    </div>
                    <WinModal/>
                </div>
                <Timer/>
            </div>
        );
    };
}

const StoP = state => {
    return {
        cards: state.cards.cards,
        width: state.cards.width,
        height: state.cards.height,
        user: state.user.user,
        userTime: state.timer.timer.userTime
    };
};

const DtoP = dispatch => {
    return {
        changePage: pageName => dispatch({type: actions.PAGE_CHANGE, value: pageName}),
        setCards: cards => dispatch({type: actions.SET_CARDS, value: cards}),
        startTimer: () => dispatch({type: actions.START_TIMER}),
        stopTimer: () => dispatch({type: actions.STOP_TIMER}),
        setWinModalStatusShowed: status =>
            dispatch({type: actions.CHANGE_WINMODAL_STATUS, value: status}),
        updateUserScore: score => dispatch({type: actions.UPDATE_USERSCORE, value: score})
    };
};

export default connect(
    StoP,
    DtoP
)(Game);
