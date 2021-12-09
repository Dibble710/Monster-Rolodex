import React from 'react';

// Style Sheets
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set9`} alt="monster" />
        <h5>{props.monster.name}</h5>
        <p>{ props.monster.email }</p>
    </div>
);