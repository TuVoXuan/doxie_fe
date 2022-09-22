import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home-page';
import CounterPage from './page/counter-page';
import './styles/App.css';
import React from 'react';
import ClothesPage from './page/clothes-page/clothes-page';
import ClothesDetail from './page/clothes-detal';
import ErrorPage from './page/error-page';
import SignInPage from './page/sign-in-page/sign-in';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/clothes">
                <Route index element={<ClothesPage />} />
                {/* <Route path=":parentCate" element={<ClothesDetail />} /> */}
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
