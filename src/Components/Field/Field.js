import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Field.css';
import Card from '../Card/Card';
import * as actions from '../../store/actions';

function Field(props) {
    const style = {
        display: 'grid',
        gridTemplate: `repeat(${props.height}, 1fr) / repeat(${props.width}, 1fr)`
    };

    const rollCard = card => {
        props.rollCard(card);
        setTimeout(() => {
            props.pushCardToCompare(card);
        }, 300);
    };

    return (
        <div className="field-container" style={style}>
            {props.cards.map((el, idx) => {
                return (
                    <Card
                        rollBack={rollCard}
                        key={idx}
                        card={{
                            value: el.value,
                            status: el.status,
                            front: props.fronts[el.value],
                            id: idx
                        }}
                    />
                );
            })}
        </div>
    );
}

const StoP = state => {
    return {
        cards: state.cards.cards,
        width: state.cards.width,
        height: state.cards.height,
        fronts: state.cards.fronts,
        compareArr: state.cards.compareArr
    };
};

const DtoP = dispatch => {
    return {
        rollCard: card => dispatch({type: actions.ROLL_CARD, value: card})
    };
};

export default withRouter(
    connect(
        StoP,
        DtoP
    )(Field)
);
