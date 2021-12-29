import { useContext } from 'react';
import TitleList from '../components/titles/TitleList';
import FavoritesContext from '../store/Favorites-context';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    return ( <section>
        <h1>My favorites</h1>
        <TitleList titles = {favoritesCtx.favorites} />
    </section> );
}

export default FavoritesPage;