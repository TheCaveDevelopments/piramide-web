import { useMediaQuery } from 'react-responsive';
import { NavBar, Logo, SwipeableTemporaryDrawer } from './components';
import './styles/Header.scss';

export const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <header>
            <Logo source="piramide-logo-sintexto.png" />
            <nav>
                {isMobile ? <SwipeableTemporaryDrawer /> :
                    <NavBar />}
            </nav>
        </header>
    )
}