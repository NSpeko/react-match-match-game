import React from 'react';
import './ScorePage.css';
import ScoreItem from '../ScoreItem/ScoreItem';
import {connect} from 'react-redux';

function ScorePage(props) {
    return (
        <div className={`page ${props.active ? 'active-page' : 'hidden-page'}`}>
            <div className="score-table">
                <div className="score-table-body">
                    <div className="table-row table-header">
                        <div className="table-cell  cell-rate">Rate</div>
                        <div className="table-cell cell-name">Username</div>
                        <div className="table-cell cell-email">Email</div>
                        <div className="table-cell cell-score">Score</div>
                    </div>
                    {props.usersSet.map(el => (
                        <ScoreItem
                            className={props.user.username === el.username ? 'active-user' : 'user'}
                            rate={el.rate}
                            username={el.username}
                            email={el.email}
                            score={el.score}
                            key={el._id}
                        />
                    ))}
                </div>
            </div>
            <div className="pages">
                Page {props.page} from {props.pagesCount}
            </div>
            <span>Your rate: {props.user.position}</span>
        </div>
    );
}

const StoP = state => {
    return {
        user: state.user.user
    };
};

export default connect(StoP)(ScorePage);
