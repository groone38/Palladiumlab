import React from 'react';
import classes from './Сopyright.module.sass'

const Сopyright = () => {
    return (
        <div className={classes.copyright}>
            <p>&#169; <strong>2020 Company.</strong> Соглашение об обработке персональных данных и политика конфиденциальности</p>
            <p>Сделано в <strong>Palladiumlab</strong></p>
        </div>
    );
};

export default Сopyright;