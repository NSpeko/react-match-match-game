import React from 'react';
import './BackSelector.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

function BackSelector(props) {
    return (
        <div className="back-container">
            {props.backs.map((el, idx) => {
                return (
                    <div key={idx} onClick={() => props.onBackChange(idx)} className="back">
                        <img
                            src={el}
                            className={el === props.backs[props.back] ? 'active-back-image' : 'back-image'}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        back: state.cards.activeBack,
        backs: state.cards.backs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBackChange: backId => dispatch({type: actions.BACK_CHANGE, value: backId})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackSelector);
