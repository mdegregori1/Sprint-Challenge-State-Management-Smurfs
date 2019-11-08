import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createSmurf } from '../actions'



const SmurfForm = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: '',
        height: '',
        age: 0
    })

    const textInput = e => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={() => dispatch(createSmurf(input))}>
            <div>
                <input
                    type='text'
                    name='name'
                    placeholder='name of smurf'
                    onChange={textInput}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='height of smurf'
                    onChange={textInput}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='age of smurf'
                    onChange={textInput}
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SmurfForm;

