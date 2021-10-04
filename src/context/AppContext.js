import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const[charactersList, setCharactersList] = useState([]);
  const [modalVisible, toggleModal] = useState(false);
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState([]);


  return (
    <AppContext.Provider 
      value={{
        charactersList,
        setCharactersList,
        modalVisible,
        toggleModal,
        character,
        setCharacter,
        quotes,
        setQuotes
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;