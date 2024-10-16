import { useMediaQuery } from 'react-responsive';
import { NavBar, Logo, SwipeableTemporaryDrawer } from './components';
import './styles/Header.scss';

export const Header = () => {
    const isTabletORMobile = useMediaQuery({ query: '(max-width: 1023px)' });
    
    return (
        <header>
            <Logo source="9.svg" />
            <nav>
                {isTabletORMobile ? <SwipeableTemporaryDrawer /> :
                    <NavBar />}
            </nav>
        </header>
    )
}