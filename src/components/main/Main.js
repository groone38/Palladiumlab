import React from 'react';
import classes from './Main.module.sass'
import image from '../../images/Image.png'
import image2 from '../../images/img_service/image2.png'
import image3 from '../../images/img_service/image3.png'
import image4 from '../../images/img_service/image4.png'
import {useDispatch, useSelector} from "react-redux";
import {toggleHover} from "../store/action/hover";
import {hoverServices} from "../store/action/services";
import Arrow from "../UI/arrow/Arrow";
import {HOVER_NOT_SERVICES, HOVER_SERVICES} from "../store/action/actionTypes";

const Main = () => {
    const service = useSelector(state => state.services.service)
    const dispatch = useDispatch()
    let itemOpen = service.find(item => {
        if (item.open) {
            return item
        }
    })
    const handlerHover = (e, back) => {
        let item = service.find(item => {
            if (item.id === e) {
                return item
            }
        })
        if (item.id === 1) {
            back.target.style.backgroundColor = '#EB5757'
        } else if (item.id === 2) {
            back.target.style.backgroundColor = '#219653'
        } else if (item.id === 3) {
            back.target.style.backgroundColor = '#2F80ED'
        } else if (item.id === 4) {
            back.target.style.backgroundColor = '#9B51E0'
        }
        back.target.style.height = '100%'
        dispatch(toggleHover())
        dispatch(hoverServices(e, HOVER_SERVICES))
    }
    const handlerOut = (e, back) => {
        dispatch(toggleHover())
        dispatch(hoverServices(e, HOVER_NOT_SERVICES))
        back.target.style.backgroundColor = `transparent`
        back.target.style.height = 'auto'
    }
    return (
        <>
            <div className={classes.img}>
                {
                    itemOpen !== undefined && ((itemOpen.id === 1) ? <img src={image} alt="imag"/>
                        : (itemOpen.id === 2) ? <img src={image2} alt="imag"/>
                            : (itemOpen.id === 3) ? <img src={image3} alt="imag"/>
                                : <img src={image4} alt="imag"/>)
                }
            </div>
            <div className={classes.service}>
                <div className={classes.services}>
                    {service.map(item => {
                        return (
                            <div key={item.id} className={classes.services_block + ' ' + (item.open ? classes.hover : null)}
                                 onMouseEnter={(back) => handlerHover(item.id, back)}
                                 onMouseOut={(back) => handlerOut(item.id, back)}>
                                <p>{item.text}</p>
                                {item.open &&
                                <>
                                    <span>С другой стороны реализация намеченных плановых заданий требуют от нас анализа.</span>
                                    <Arrow rotate={true}/>
                                </>
                                }
                            </div>
                        )
                    })}
                </div>
                <Arrow/>
            </div>
        </>
    );
};

export default Main;