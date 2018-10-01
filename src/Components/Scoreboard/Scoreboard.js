import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Scoreboard.css';
import ScorePage from '../ScorePage/ScorePage';
import Helper from '../Helper/Helper';
import * as actions from '../../store/actions';

class ScoreBoard extends Component {
    state = {
        users: [],
        active: 1,
        pagesCount: 1
    };

    componentDidMount = () => {
        Helper.getUsers(this.props.username).then(([usersArr, userPosition]) => {
            this.updateUsers(usersArr);
            this.props.updateUserPosition(userPosition);
        });
        this.props.changePage('scoreboard');
    };

    nextPage = () => {
        this.setState({
            active: this.state.active + 1
        });
    };

    prevPage = () => {
        this.setState({
            active: this.state.active - 1
        });
    };

    updateUsers = users => {
        this.setState({
            users: users,
            pagesCount: users.length
        });
    };

    render = () => {
        return (
            <div className="score-board">
                <h3>Scoreboard</h3>
                <div className={this.state.users.length ? 'hidden' : 'loader'}/>
                {this.state.users.map((usersSet, idx) => {
                    return (
                        <ScorePage
                            usersSet={usersSet}
                            page={idx + 1}
                            pagesCount={this.state.pagesCount}
                            key={idx}
                            active={idx + 1 === this.state.active ? true : false}
                        />
                    );
                })}
                <div className="pagination-container">
                    <div
                        onClick={() => this.prevPage()}
                        className={`arrow-btn btn-left ${this.state.active === 1 ? 'btn-dsb' : 'btn-enb'}`}
                    >
                        &#160;
                    </div>
                    <div
                        onClick={() => this.nextPage()}
                        className={`arrow-btn btn-right ${
                            this.state.active === this.state.pagesCount ? 'btn-dsb' : 'btn-enb'
                            }`}
                    >
                        &#160;
                    </div>
                </div>
            </div>
        );
    };
}

const StoP = state => {
    return {
        username: state.user.user.username
    };
};

const DtoP = dispatch => {
    return {
        changePage: pageName => dispatch({type: actions.PAGE_CHANGE, value: pageName}),
        updateUserPosition: position =>
            dispatch({type: actions.UPDATE_USER_POSITION, value: position})
    };
};

export default connect(
    StoP,
    DtoP
)(ScoreBoard);
