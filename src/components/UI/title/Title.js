import React from 'react';
import classes from './Title.module.sass'
import line from "../../../images/rectangle.svg";

const Title = ({text1, text2, text3 = null}) => {
    return (
        <div className={classes.title}>
            <h2>{text1}</h2>
            <h2 className={classes.transparent}>{text2}</h2>
            <h2>{text3}</h2>
            <div className={classes.line}>
                <img src={line} alt="line"/>
            </div>
        </div>
    );
};

export default Title;