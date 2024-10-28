import './styles/navbar.scss';
import { navOptions } from '../variables';
import { handleScroll } from '../../../../utilities';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [activeSection, setActiveSection] = useState({});
    const [ishover, setIshover] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <ul>
            {navOptions.map((option) => (
                <li key={option.id} >
                    <a
                        className={!ishover && activeSection === option.path.substring(1) ? 'active' : ''}
                        href={option.path}
                        onClick={(e) => handleScroll(e, option.path.substring(1))}
                        onMouseEnter={() => setIshover(true)}
                        onMouseLeave={() => setIshover(false)}
                    >
                        {option.name.toUpperCase()}
                    </a>
                </li>
            ))}
        </ul>
    )
}