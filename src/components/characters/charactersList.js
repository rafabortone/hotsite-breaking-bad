import { useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";

export default function CharactersList() {

  const {
    charactersList,
    setCharactersList,
    toggleModal,
    setCharacter,
    setQuotes 
  } = useContext(AppContext);

  const url = 'https://www.breakingbadapi.com/api/';

  useEffect(() => {
    async function getCharacters() {
      const request = await fetch(url + 'characters?limit=12');
      const response = await request.json();

      if (request.status === 200) {
        setCharactersList(response);
      }
    }
    getCharacters();

  }, [setCharactersList]);

  async function handleOpenModal(char) {
    const charName = char.name;

    const request = await fetch(url + 'quote?author=' + charName);
    const response = await request.json();

    if(request.status === 200) {
      setQuotes(response);
      setCharacter(char);
      toggleModal(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro inesperado, por favor tente mais tarde',
      })
    }

  }

  return(
    <>
      {charactersList.length ? 
        <ul className="characters-list">
          {
            charactersList.map(char=>{
              return(
                <li className="characters-list__item" key={char.char_id}
                  onClick={() => handleOpenModal(char)}
                >
                  <article className="characters-list__char">
                    <img src={char.img} className="characters-list__char--img"/>
                    <div className="characters-list__char--info">
                      <p className="characters-list__char--name">{char.name}</p>
                      <p className="characters-list__char--nickname">{char.nickname}</p>
                    </div>
                  </article>
                </li>
              )
            })
          }
        </ul> : <h1> loading list of characters....</h1>
      } 
    </>
  ); 

}