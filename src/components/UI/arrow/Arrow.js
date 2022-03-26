import React from 'react';
import classes from './Arrow.module.sass'
import arrow from "../../../images/arrow_down.svg";

const Arrow = ({rotate= false}) => {
    return (
        <div className={classes.arrow + ' ' + (rotate ? classes.transform : null)}><img src={arrow} alt="arrow"/></div>
    );
};

export default Arrow;