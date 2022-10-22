import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import ClothesPage from './page/clothes-page/clothes-page';
import CounterPage from './page/counter-page';
import ErrorPage from './page/error-page';
import HomePage from './page/home-page/home-page';
import ProductDetails from 'page/product-details-page/product-details';
import React from 'react';
import SignInPage from './page/sign-in-page/sign-in';
import SignUpPage from './page/sign-up-page/sign-up';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/clothes">
                <Route index element={<ClothesPage />} />
                {/* <Route path=":parentCate" element={<ClothesDetail />} /> */}
            </Route>
            <Route path="/product-details" element={<ProductDetails />}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
