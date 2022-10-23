import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home-page/home-page';
import CounterPage from './page/counter-page';
import './styles/App.css';
import React from 'react';
import ClothesPage from './page/clothes-page/clothes-page';
import ErrorPage from './page/error-page';
import SignInPage from './page/sign-in-page/sign-in';
import SignUpPage from './page/sign-up-page/sign-up';
import UserPage from './page/user-page/user-page';

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
            <Route path="/user">
                <Route path="profile" element={<UserPage />} />
                <Route path="transaction" element={<UserPage />}>
                    <Route path=":id" element={<UserPage />} />
                </Route>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
