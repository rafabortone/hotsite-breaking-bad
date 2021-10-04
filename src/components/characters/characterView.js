import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function CharacterView() {

  const {
    character,
    quotes
  } = useContext(AppContext);

  const occupation = character.occupation.join(', ');

  return (
    <>
      <article className="character-view">
        <div className="character-view__wrapper">
          <div className="character-view__img">
            <img src={character.img} />
          </div>
          <div className="character-view__info">
            <h3 className="character-view__info--name">{character.name}</h3>
            <p className="character-view__info--nickname">{character.nickname}</p>
            <div className="character-view__info--details">
              <p>{'Birthday: ' + character.birthday}</p>
              <p>{'Occupation: ' + occupation}</p>
              <p>{'Portrayed: ' + character.portrayed}</p>
              <p>{'Status: ' + character.status}</p>
            </div>
            <div className="character-view__quotes">
              <ul>
                {quotes.map(({ quote, quote_id }) => {
                  return (
                    <li key={quote_id}>
                      <p>"{quote}"</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}