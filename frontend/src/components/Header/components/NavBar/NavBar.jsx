import './styles/navbar.scss';
import { navOptions } from '../variables';
export const NavBar = () => {
    return (
        <ul>
            {navOptions.map((option) => (
                <li key={option.id}>
                    <a href={option.path}>{option.name}</a>
                </li>
            ))}
        </ul>
    )
}