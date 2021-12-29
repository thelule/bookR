import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>The Book Guardian</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>View All</Link>
                    </li>
                    <li>
                        <Link to='/new'>New Book</Link>                        
                    </li>
                    <li>
                        <Link to='/fav'>Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>);
}

export default MainNavigation;