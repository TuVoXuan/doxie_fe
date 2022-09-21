import { GoPrimitiveDot } from 'react-icons/go';
import styles from './NavigateLink.module.css';
import NavLink from './nav-link';

interface Props {
    navigators: INavigator[];
}

export default function NavigateLink({ navigators }: Props) {
    return (
        <nav className={styles.navContainer}>
            {navigators.map((navigator, index) => {
                if (index > 0 && index <= navigators.length - 1) {
                    return (
                        <>
                            <GoPrimitiveDot size={8} />
                            <NavLink to={navigator.to} title={navigator.title} />
                        </>
                    );
                }
                return <NavLink key={new Date().toISOString()} to="/" title="home" />;
            })}
        </nav>
    );
}
