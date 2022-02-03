import React from 'react';
import s from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={s.header}>
            <h1>Unsplash</h1>
            <p>The internet's source of freely usable images.</p>
            <p>Powered by creators everywhere</p>
        </header>
    );
};
