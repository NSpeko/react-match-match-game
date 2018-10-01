import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Rules.css';
import * as actions from '../../store/actions';

class Rules extends Component {
    componentDidMount = () => {
        this.props.onPageChange('Rules');
    };

    render = () => {
        return (
            <div className="rules-container">
                <div className="game-rules">
                    <h3 className="rules-header">How to win the Game</h3>
                    <ul type="i" className="rule-list">
                        <li className="rule"> - Do not be anonimus today. Authorizate yourself!</li>
                        <li className="rule"> - Play this Game!</li>
                        <ul>
                            <li className="rule">
                                {' '}
                                + The player chooses a card and turns it over.Then he selects another.
                            </li>
                            <li className="rule"> + If the two cards are a matching pair they dissapear.</li>
                        </ul>
                        <li className="rule"> - Be the champion and slay your opponents!</li>
                    </ul>
                </div>
                <div>
                    <Link className="rules-button" to="/game">
                        Clear
                    </Link>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPageChange: pageName => dispatch({type: actions.PAGE_CHANGE, value: pageName})
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Rules);
