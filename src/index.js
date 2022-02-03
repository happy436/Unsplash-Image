import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';
import store from "./redux/redux-store"
import './index.scss';


let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Header />
            <App 
                state={store.getState().ImageReducer}
                dispatch={store.dispatch}
            />
            <Footer />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    reRender(state);
})