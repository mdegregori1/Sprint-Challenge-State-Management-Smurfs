import React from 'react';


export const SmurfCard = props => {
    console.log('card props', props)
    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <p>Height: {props.smurf.height} </p>
            <p>Age: {props.smurf.age}</p>
        </div>
    )
}