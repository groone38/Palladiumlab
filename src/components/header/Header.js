import React from 'react';
import classes from './Heade.module.sass'
import marker from '../../images/marker.svg'
import phone from '../../images/phone.svg'
import logo from '../../images/logo.svg'
import {useSelector} from "react-redux";
import Nav from "./nav/Nav";
import {ReactSVG} from "react-svg";
import MainText from "./mainText/MainText";

const Header = () => {
    const hover = useSelector(state => state.hover.hover)
    return (
        <>
            <header className={classes.header + ' ' + (hover ? classes.hover_header : null)}>
                <div className={classes.header_nav}>
                    <div className={classes.img + ' ' + (hover ? classes.hover_svg : null)}>
                        <ReactSVG src={marker} />
                    </div>
                    <div className={classes.header_block}>
                        <Nav nav={['Главная', 'О компании', 'Услуги']}/>
                        <ReactSVG src={logo} className={classes.img + ' ' + (hover ? classes.hover_svg : null)}/>
                        <Nav nav={['Цены', 'Портфолио', 'Контакты']}/>
                    </div>
                    <div className={classes.img + ' ' + (hover ? classes.hover_svg : null)}>
                        <ReactSVG src={phone}/>
                    </div>
                </div>
            </header>
            <MainText/>
        </>
    );
};

export default Header;