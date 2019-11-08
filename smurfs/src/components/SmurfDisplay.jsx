import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SmurfCard } from './SmurfCard'

import { fetchSmurfs } from '../actions'

const SmurfDisplay = props => {
    console.log('Smurf Diplay Props', props.smurfs)
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    return (
        <div>
            {props.smurfs.map(event => {
                return (
                    <SmurfCard smurf={event} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfDisplay)