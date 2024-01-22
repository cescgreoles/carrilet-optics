import React from "react";

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return <button onClick={goBack}>Atrás</button>;
};

export default BackButton;
