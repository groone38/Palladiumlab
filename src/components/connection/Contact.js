import React from 'react';
import classes from './Contact.module.sass'
import Title from "../UI/title/Title";
import BaseButton from "../UI/BaseButton/BaseButton";
import clip from '../../images/clip.svg'

const Contact = () => {
    return (
        <footer className={classes.footer}>
            <Title text1={'Связаться'} text2={'с нами'}/>
            <div className={classes.contact}>
                <div className={classes.office}>
                    <p>Офис</p>
                    <span>Москва, ул. Уличная, д. 1, оф. 1</span>
                </div>
                <div className={classes.work}>
                    <p>Режим работы</p>
                    <span>Пн-Вт: 1000 — 1900; Сб-Вс: 1000 — 1500</span>
                </div>
                <form className={classes.form}>
                    <p>Остались вопросы?</p>
                    <label htmlFor="name">Ваше имя</label>
                    <input type="text" name={'name'} id={"name"} placeholder={'Иван Иванов'}/>
                    <label htmlFor="tel">Телефон / E-mail</label>
                    <input type="text" name={'tel'} id={"tel"} placeholder={'example@example.com'}/>
                    <label htmlFor="message">Ваше сообщение</label>
                    <div className={classes.message}>
                        <input type="text" name={'message'} id={"message"} placeholder={'Текст обращения'}/>
                        <img src={clip} alt="clip" className={classes.clip}/>
                    </div>
                    <span>Нажимая на кнопку «Получить консультацию», вы соглашаетесь на <p>обработку персональных данных</p></span>
                    <BaseButton text={'Получить консультацию'} bold={true}/>
                </form>
                <div className={classes.email}>
                    <p>E-mail</p>
                    <span>company@company.ru</span>
                </div>
                <div className={classes.number}>
                    <p>Телефон</p>
                    <span>8 (800) 900-00-00</span>
                </div>
                <div className={classes.social}>
                    <p>Социальные сети</p>
                    <div style={{width: '30px', height: '30px', backgroundColor: 'black'}}></div>
                    <div style={{width: '30px', height: '30px', backgroundColor: 'black'}}></div>
                    <div style={{width: '30px', height: '30px', backgroundColor: 'black'}}></div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;