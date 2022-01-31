import React from "react";
import './Square.css'
import classNames from 'classnames'

const Square = props => {

    const buttonClasses = classNames({
        'square': true,
        'red': props.value === 'X',
        'blue': props.value === 'O',
        'winner': props.winner
    })

    return(
        <button className={buttonClasses}
                onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default Square