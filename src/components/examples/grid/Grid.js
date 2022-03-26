import React from 'react';
import classes from './Grid.module.sass'
import image1 from "../../../images/image_example/image1.png";
import image2 from "../../../images/image_example/image2.png";
import image3 from "../../../images/image_example/image3.png";
import image4 from "../../../images/image_example/image4.png";
import image5 from "../../../images/image_example/image5.png";
import image6 from "../../../images/image_example/image6.png";
import image7 from "../../../images/image_example/image7.png";
import image8 from "../../../images/image_example/image8.png";

const Grid = () => {
    return (
        <div className={classes.grid}>
            <div className={classes.img + ' ' + classes.one}>
                <img src={image1} alt="image"/>
                <div>
                    <p>Новостройка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.two}>
                <img src={image2} alt="image"/>
                <div>
                    <p>Новостройка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.three}>
                <img src={image3} alt="image"/>
                <div>
                    <p>Вторичка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.four}>
                <img src={image4} alt="image"/>
                <div>
                    <p>Вторичка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.five}>
                <img src={image5} alt="image"/>
                <div>
                    <p>Новостройка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.six}>
                <img src={image6} alt="image"/>
                <div>
                    <p>Вторичка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.seven}>
                <img src={image7} alt="image"/>
                <div>
                    <p>Вторичка</p>
                </div>
            </div>
            <div className={classes.img + ' ' + classes.eight}>
                <img src={image8} alt="image"/>
                <div>
                    <p>Новостройка</p>
                </div>
            </div>
        </div>
    );
};

export default Grid;