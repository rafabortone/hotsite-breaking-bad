import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import IconClose from '../icons/icon-close.svg'
import CharacterView from './characters/characterView'


export default function Modal() {
  const {
    modalVisible,
    toggleModal
  } = useContext(AppContext);


  return (
    <>
      {modalVisible ?
        <div className="modal" data-testeid="modal" tabIndex="-1">
          <div className="modal__content" >
            <div className="modal__close">
              <img 
                src={IconClose} 
                onClick={() => toggleModal(false)}
              />
            </div>
            <CharacterView/>
          </div>
        </div> : null
      }
    </>
  );
}