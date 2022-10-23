import { Routes, Route } from 'react-router-dom';
import HomePage from './page/home-page/home-page';
import CounterPage from './page/counter-page';
import './styles/App.css';
import React, { useEffect } from 'react';
import ClothesPage from './page/clothes-page/clothes-page';
import ErrorPage from './page/error-page';
import SignInPage from './page/sign-in-page/sign-in';
import SignUpPage from './page/sign-up-page/sign-up';
import UserPage from './page/user-page/user-page';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectUser } from './redux/reducers/user-slice';
import { getCurrentUser } from './redux/actions/user-actions';
import { useNavigate } from 'react-router-dom';
import ProtectRoute from './components/protect-route/protect-route';

function App() {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const getCurrUser = async (userId: string) => {
        try {
            await dispatch(getCurrentUser(userId)).unwrap();
        } catch (error) {
            console.log('error: ', error);
            navigate('/sign-in');
        }
    };

    useEffect(() => {
        if (userId && sUser.isLogin === false) {
            getCurrUser(userId);
        }
    }, []);
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
                <Route
                    path="profile"
                    element={
                        <ProtectRoute>
                            <UserPage />
                        </ProtectRoute>
                    }
                />
                <Route
                    path="transaction"
                    element={
                        <ProtectRoute>
                            <UserPage />
                        </ProtectRoute>
                    }
                >
                    <Route
                        path=":id"
                        element={
                            <ProtectRoute>
                                <UserPage />
                            </ProtectRoute>
                        }
                    />
                </Route>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
