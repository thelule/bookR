import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteBook) => {},
    removeFavorite: (bookId) => {},
    bookIsFavorite: (bookId) => {}
});


export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteBook) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteBook);
        });
    }

    function removeFavoriteHandler(bookId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(book => book.id !== bookId)
        })
    }

    function bookIsFavoriteHandler(bookId) {
        return userFavorites.some( book => book.id === bookId )
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        bookIsFavorite: bookIsFavoriteHandler
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;