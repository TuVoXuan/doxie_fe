import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home-page';
import CounterPage from './page/counter-page';
import './styles/App.css';
import React from 'react';
import ClothesPage from './page/clothes-page';
import ClothesDetail from './page/clothes-detal';
import ErrorPage from './page/error-page';

function App() {
    var a;
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/clothes">
                <Route index element={<ClothesPage />} />
                <Route path=":id" element={<ClothesDetail />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
