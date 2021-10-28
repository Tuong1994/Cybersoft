import React from 'react';
import { Route } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomeTemplate = (props) => {
    let { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </div>
    }} />
}

export default HomeTemplate;