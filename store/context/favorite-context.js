import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids:[],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}){
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(mealId){
        console.log("add");
        setFavoriteMealIds((prev) => [...prev, mealId]);
    }

    function removeFavorite(mealId){
        console.log("remove");
        setFavoriteMealIds((prev) => prev.filter((id) => id !== mealId));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;