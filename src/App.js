import React from 'react'
import { Loader } from './components/Loader/Loader';
import { UnsplashImg } from './components/Image/UnsplashImg';
import s from "./App.module.scss"
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchImages } from './redux/imageReducer';

function App({ state, dispatch }) {

    function next() {
        setTimeout(() => dispatch(fetchImages(state)), 2000)
    }

    if(state.length === 1){
        next()
    }

    window.state = state

    return (
        <div className={s.App}>
            <InfiniteScroll
                dataLength={state.length}
                next={next}
                hasMore={true}
                loader={<Loader />}>
                <div className={s.wrapper}>
                    {state.map(image => <UnsplashImg small={image.urls.small} big={image.urls.full} key={image.id} author={image.user.name} />)}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default App;
