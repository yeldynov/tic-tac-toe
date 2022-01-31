import React, {Component} from "react";
import './Status.css'
import classNames from "classnames";

const Status = props => {

    const statusClasses = classNames({
        'winner-status': props.winner,
        'red-status': props.xIsNext,
        'blue-status': !props.xIsNext && !props.winner,
    })

    return(
        <div className={statusClasses}>{props.status}</div>
    )
}

export default Status