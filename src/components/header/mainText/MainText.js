import React from 'react';
import classes from "./MainText.module.sass";
import BaseButton from "../../UI/BaseButton/BaseButton";
import {useSelector} from "react-redux";

const MainText = () => {
    const hover = useSelector(state => state.hover.hover)
    const service = useSelector(state => state.services.service)
    let itemOpen = service.find(item => {
        if (item.open) {
            return item
        }
    })
    let mainText
    if (itemOpen !== undefined) {
        if (itemOpen.id === 1) {
            mainText = (
                <>
                    <h1 style={{display: 'inline'}}>Услуги по ремонту</h1>
                    <h1 className={classes.transparent}>в Москве и Московской области</h1>
                </>
            )
        } else if (itemOpen.id === 2) {
            mainText = (
                <>
                    <h1 style={{display: 'inline'}}>Виды работ по ремонту</h1>
                    <h1 className={classes.transparent}>в Москве и Московской области</h1>
                </>
            )
        } else if (itemOpen.id === 3) {
            mainText = (
                <>
                    <h1 style={{display: 'inline'}}>Дизаин интерьера</h1>
                    <h1 className={classes.transparent}>в Москве и Московской области</h1>
                </>
            )
        } else if (itemOpen.id === 4) {
            mainText = (
                <>
                    <h1 style={{display: 'inline'}}>Ремонт помещений</h1>
                    <h1 className={classes.transparent}>в Москве и Московской области</h1>
                </>
            )
        }
    } else {
        mainText = (
            <>
                <div style={{display: 'flex'}}>
                    <h1>Ремонт</h1>
                    <h1 style={{margin: '0 10px'}} className={classes.transparent}>и</h1>
                    <h1>дизайн</h1>
                </div>
                <h1 className={classes.transparent}>в Москве и Московской области</h1>
            </>
        )
    }
    return (
        <div className={classes.start_block + ' ' + (hover && classes.hover)}>
            {mainText}
            <BaseButton text={'Оставить заявку'} white={hover && true}/>
        </div>
    );
};

export default MainText;