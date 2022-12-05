import './styles/App.css';
import React, { useEffect } from 'react';
import ClothesPage from './page/clothes-page/clothes-page';
import ErrorPage from './page/error-page/error-page';
import HomePage from './page/home-page/home-page';
import ProductDetails from 'page/product-details-page/product-details';
import SignInPage from './page/sign-in-page/sign-in';
import SignUpPage from './page/sign-up-page/sign-up';
import UserPage from './page/user-page/user-page';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectUser } from './redux/reducers/user-slice';
import { getCurrentUser } from './redux/actions/user-actions';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectRoute from './components/protect-route/protect-route';
import CartPage from 'page/cart-page/cart-page';
import CheckoutPage from './page/checkout-page/checkout-page';
import OrderDetail from 'page/order-detail/order-detail';
import CounterPage from 'page/counter-page';
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
    }, [sUser, userId]);
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-detail">
                <Route path=":id" element={<OrderDetail />} />
            </Route>
            <Route path="/clothes">
                <Route index element={<ClothesPage />} />
                {/* <Route path=":parentCate" element={<ClothesDetail />} /> */}
            </Route>
            <Route path="/user" element={<ProtectRoute />}>
                <Route path="profile" element={<UserPage />} />
                <Route path="transaction" element={<UserPage />}>
                    <Route path=":id" element={<UserPage />} />
                </Route>
            </Route>

            <Route path="/product-details/:id" element={<ProductDetails />}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
