import React, {Component} from 'react';
import './Timer.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Timer extends Component {
    componentDidMount = () => {
        this.timerInterval = null;
        this.setTimer();
    };

    setTimer = () => {
        this.timerInterval = setInterval(() => {
            if (this.props.timerIsOn) {
                this.props.pushTimer();
                if (this.props.timer.seconds === 59) {
                    this.props.addMinute();
                    this.props.clearSeconds();
                } else {
                    this.props.addSecond();
                }
            } else {
            }
        }, 1000);
    };

    componentWillUnmount = () => {
        this.props.stopTimer();
        this.props.dropTimer();
        clearInterval(this.timerInterval);
    };

    render = () => {
        return (
            <div className="timer">
                <div className="minutes">
                    {this.props.minutes >= 10 ? this.props.minutes : `0${this.props.minutes}`}
                </div>
                :
                <div className="seconds">
                    {this.props.seconds >= 10 ? this.props.seconds : `0${this.props.seconds}`}
                </div>
            </div>
        );
    };
}

const StoP = state => {
    return {
        minutes: state.timer.timer.minutes,
        seconds: state.timer.timer.seconds,
        timerIsOn: state.timer.timer.isOn,
        timer: state.timer.timer
    };
};

const DtoP = dispatch => {
    return {
        clearSeconds: () => dispatch({type: actions.CLEAR_SECONDS}),
        addMinute: () => dispatch({type: actions.ADD_MINUTE}),
        addSecond: () => dispatch({type: actions.ADD_SECOND}),
        pushTimer: () => dispatch({type: actions.TIMER_PUSH}),
        startTimer: () => dispatch({type: actions.START_TIMER}),
        stopTimer: () => dispatch({type: actions.STOP_TIMER}),
        dropTimer: () => dispatch({type: actions.DROP_TIMER})
    };
};

export default connect(
    StoP,
    DtoP
)(Timer);
