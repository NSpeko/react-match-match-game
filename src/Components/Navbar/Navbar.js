import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';

function Navbar(props) {
    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li className="auth-link">
                        <Link
                            className={`nav-link ${props.page === 'Authorization' ? 'active-route' : ''}`}
                            to="/authorization"
                        >
                            Authorization
                        </Link>
                    </li>
                    <li className="rules-link">
                        <Link
                            className={`nav-link ${props.page === 'Rules' ? 'active-route' : ''}`}
                            to="/rules"
                        >
                            Rules
                        </Link>
                    </li>
                    <li className="game-link">
                        <Link
                            className={`nav-link ${
                                props.registered ? (props.page === 'Game' ? 'active-route' : '') : 'hidden-route'
                                }`}
                            to="/game"
                        >
                            Game
                        </Link>
                    </li>
                    <li className="score-link">
                        <Link
                            className={`nav-link ${props.page === 'ScoreBoard' ? 'active-route' : ''}`}
                            to="/scoreboard"
                        >
                            Score
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const StoP = state => {
    return {
        page: state.pages.activeRoutePage,
        registered: state.pages.registered
    };
};

export default connect(StoP)(Navbar);
