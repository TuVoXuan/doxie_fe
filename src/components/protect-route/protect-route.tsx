import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function ProtectRoute() {
    const userId = localStorage.getItem('userId');
    return userId ? <Outlet /> : <Navigate to="/sign-in" />;
}
