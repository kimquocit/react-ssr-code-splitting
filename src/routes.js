import React from 'react';
import Loadable from 'react-loadable';

export default [
    {
        path: "/",
        component: Loadable({
            loader: () => import('./pages/Home'),
            loading: () => <div>loading...</div>,
            modules: ['Home'],
        }),
        exact: true
    },
    {
        path: "/about",
        component: Loadable({
            loader: () => import('./pages/About'),
            loading: () => <div>loading...</div>,
            modules: ['About'],
        }),
        exact: true
    },
    {
        path: "/blog",
        component: Loadable({
            loader: () => import('./pages/Blog'),
            loading: () => <div>loading...</div>,
            modules: ['Blog'],
        }),
        exact: true
    },
    {
        //path: "/category/:id",
        path: "/category",
        component: Loadable({
            loader: () => import('./pages/Category'),
            loading: () => <div>loading category...</div>,
            modules: ['Category'],
        })
    },
    {
        //path: "/product/:id",
        path: "/product",
        component: Loadable({
            loader: () => import('./pages/Product'),
            loading: () => <div>loading product...</div>,
            modules: ['Product'],
        })
    }
]