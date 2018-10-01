import React, {Component} from 'react';
import './Authorization.css';
import personImage from '../../media/person.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Authorization extends Component {
    state = {
        user: {
            username: '',
            email: ''
        }
    };

    componentDidMount = () => {
        this.props.changePage('Authorization');
    };

    changeValue = name => evt => {
        const value = evt.target.value;
        this.setState(({user}) => ({
            user: {
                ...user,
                [name]: value.trim()
            }
        }));
    };

    sendUserData = () => {
        this.props.changeUserData(this.state.user);
        this.props.setRegistered();
    };

    render = () => {
        return (
            <form className="registration-container">
                <span className="header-name">Authorization</span>
                <div className="authorization-container">
                    <div className="user-fields">
                        <img className="person-image" src={personImage} alt=""/>
                        <div className="name-field">
                        <label htmlFor="username">Username:</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter your username"
                            id="username"
                            value={this.state.user.username}
                            onChange={this.changeValue('username')}
                        />
                    </div>
                        <div className="email-field">
                            <label htmlFor="email">Email:</label>
                            <input
                                required
                                type="email"
                                pattern="(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
                                placeholder="Enter your email"
                                id="email"
                                value={this.state.user.email}
                                onChange={this.changeValue('email')}
                            />
                        </div>
                    </div>
                </div>
                <div onClick={() => this.sendUserData(this.state.user)}>
                    <Link to="/rules" className="submit-link">
                        Submit
                    </Link>
                </div>
            </form>
        );
    };
}

const StP = state => {
    return {
        user: state.user.user
    };
};

const DtP = dispatch => {
    return {
        changePage: pageName => dispatch({type: actions.PAGE_CHANGE, value: pageName}),
        changeUserData: user => dispatch({type: actions.USER_CHANGE, value: user}),
        setRegistered: () => dispatch({type: actions.SET_REGISTERED})
    };
};

export default connect(
    StP,
    DtP
)(Authorization);
