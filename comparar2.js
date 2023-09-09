import React from 'react';

function PopupWithForm({ onUpdateDog }) {

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