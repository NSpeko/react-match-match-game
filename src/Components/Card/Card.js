import React from 'react';
import './Card.css';
import {connect} from 'react-redux';

function Card(props) {
    const roll = () => {
        props.rollBack(props.card);
    };

    return (
        <div
            className={
                'card ' +
                (props.card.status === 'dropped'
                    ? 'card-dropped'
                    : props.card.status === 'hidden'
                        ? 'card-back'
                        : 'card-front')
            }
            onClick={() => roll()}
        >
            <img
                className={`card-image card-front-image ${
                    !(props.card.status === 'hidden') ? 'card-image-active' : ''
                    }`}
                src={props.card.front}
                alt=""
            />
            <img
                className={`card-image card-back-image ${
                    props.card.status === 'hidden' ? 'card-image-active' : ''
                    }`}
                src={props.backs[props.activeBackId]}
                alt=""
            />
        </div>
    );
}

const StoP = state => {
    return {
        activeBackId: state.cards.activeBack,
        backs: state.cards.backs
    };
};

export default connect(StoP)(Card);
