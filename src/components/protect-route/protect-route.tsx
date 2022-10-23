import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../redux/reducers/user-slice';

interface Props {
    children: JSX.Element;
}

export default function ProtectRoute({ children }: Props) {
    const sUser = useAppSelector(selectUser);
    const navigate = useNavigate();
    if (sUser.isLogin === false) {
        navigate('/sign-in');
        return <></>;
    }

    return children;
}
