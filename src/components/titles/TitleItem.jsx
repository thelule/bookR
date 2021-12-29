import { useContext } from 'react';
import classes from './TitleItem.module.css';
import Card from "../ui/Card";
import FavoritesContext from '../../store/Favorites-context';

function TitleItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const bookIsFavorite = favoritesCtx.bookIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if(bookIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id
            });
        }
    }
    return ( 
        <li className={classes.item}>
            <Card>
            <h1>{props.id}</h1>
            <div >
                <button onClick={toggleFavoriteStatusHandler} className={classes.favBtn}>
                    {bookIsFavorite ? 'Remove from favs' : 'Add to favs'}
                </button>
            </div>
            </Card>
        </li>
     );
}

export default TitleItem;