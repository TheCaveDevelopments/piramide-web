import './styles/navbar.scss';
import { navOptions } from '../variables';
import { handleScroll } from '../../../../utilities';

export const NavBar = () => {
    return (
        <ul>
            {navOptions.map((option) => (
                <li key={option.id}>
                    <a
                        className='nav-link'
                        href={option.path}
                        onClick={(e) => handleScroll(e, option.path.substring(1))}
                    >
                        {option.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}