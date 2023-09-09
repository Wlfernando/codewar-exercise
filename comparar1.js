import React from 'react';

import { CurrentDogContext } from '../../contexts/CurrentDogContext';

function PopupWithForm({ onUpdateDog }) {

  const currentDog = React.useContext(CurrentDogContext);

    // estado de entrada y handlers omitidos por razones de brevedad

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateDog({ name, breed });
  }

  return (
    {/*omitido */}
  );
}

export default PopupWithForm;