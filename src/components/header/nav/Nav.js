import React from 'react';
import classes from './Nav.module.sass'

const Nav = ({nav}) => {
    return (
        <ul className={classes.block_nav}>
            {nav.map(item => <li key={item + Date}>{item}</li>)}
        </ul>
    );
};

export default Nav;