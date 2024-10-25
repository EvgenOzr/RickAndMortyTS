import { Link } from 'react-router-dom';
import cn from 'classnames'
import './Header.sass'

const Header = () => {
    return (
        <div className={cn('header flex items-center')}>
            <ul className="flex">
                <li>
                    <Link to='/'>Rick and Morty</Link>
                </li>
                <li>
                    <Link to='/character'>Characters</Link>
                </li>
                <li>
                    <Link to='/location'>Locations</Link>
                </li>
                <li>
                    <Link to='/episode'>Episodes</Link>
                </li>
                <li>
                    <Link to='/allImages'>All Images</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;