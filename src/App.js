import React, { useEffect } from 'react'
import { Loader } from './components/Loader/Loader';
import { UnsplashImg } from './components/Image/UnsplashImg';
import s from "./App.module.scss"
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchImages } from './redux/imageReducer';

function App({state, dispatch}) {

    return (
        <div className={s.App}>
            <InfiniteScroll
                dataLength={state.length} 
                next={dispatch(fetchImages())} 
                hasMore={true} 
                loader={<Loader />}>
                <div className={s.wrapper}>
                    {state.map(image => <UnsplashImg small={image.urls.small} big={image.urls.full} key={image.id} author={image.user.name}/>)}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default App;
