import React from 'react';
import './ScoreItem.css';

export default function ScoreItem(props) {
    return (
        <div className={`table-row ${props.className}`}>
            <div className="table-cell cell-rate">{props.rate}</div>
            <div className="table-cell cell-name">{props.username}</div>
            <div className="table-cell cell-email">{props.email}</div>
            <div className="table-cell cell-score">{props.score}</div>
        </div>
    );
}
