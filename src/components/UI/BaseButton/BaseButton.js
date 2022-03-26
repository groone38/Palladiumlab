import React from 'react';
import classes from './BaseButton.module.sass';

const BaseButton = ({text, bold= false, white= false}) => {
    let fontWeight = (bold) ? 'bold' : null
    let colorWhite = (white) ? classes.white : null
    return (
        <div className={classes.btn_block + ' ' + (white && classes.rectangle)}>
            <button type={'button'} className={classes.btn + ' ' + colorWhite} style={{fontWeight: `${fontWeight}`}}>{text}</button>
            <div></div>
        </div>
    );
};

export default BaseButton;