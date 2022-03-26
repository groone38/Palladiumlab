import React from 'react';
import classes from './Examples.module.sass'
import BaseButton from "../UI/BaseButton/BaseButton";
import Title from "../UI/title/Title";
import Grid from "./grid/Grid";

const Examples = () => {
    return (
        <div className={classes.examples}>
            <Title text1={'Примеры'} text2={'выполненных'} text3={'работ'}/>
            <Grid />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <BaseButton text={'Все проекты'}/>
            </div>
        </div>
    );
};

export default Examples;