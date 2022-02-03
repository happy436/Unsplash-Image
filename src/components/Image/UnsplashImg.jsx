import React from 'react';
import s from "./UnsplashImg.module.scss"

export const UnsplashImg = ({ small, big, author }) => {

    function Big(el) {
        Modal.current.classList.toggle(s.close)
    }

    const Modal = React.createRef()

    function CloseModal(){
        Modal.current.classList.toggle(s.close)
    }

    return (
        <div className={s.imgWrapper}>
            <img className={s.Image} onClick={Big}  alt="Random" src={small}></img>
            <p className={s.author}>{author}</p>
            <div className={`${s.modal} ${s.close}`} ref={Modal}>
                <span className={s.closeImg} onClick={CloseModal}>&times;</span>
                <img alt="big" src={big} className={s.modalContent}></img>
            </div>
        </div>
    )
};
