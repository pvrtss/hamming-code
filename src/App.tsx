import React, { useState } from "react";
import "./App.css";
import { MainCard } from "./components/MainCard";
import { Background } from "./components/MainCard/MainCard.style";
import { Card } from "./components/Card";
import { Fader } from "./components/Card/Card.style";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState<boolean>(false);

  const onClickInfo = () => {
    setInfoModal(true);
    setShowModal(true);
  };

  const onClickTest = () => {
    setInfoModal(false);
    setShowModal(true);
  };

  const onClickClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Background />
      {showModal && (
        <>
          <Fader />
          {infoModal ? (
            <Card info onClick={onClickClose} />
          ) : (
            <Card onClick={onClickClose} />
          )}
        </>
      )}
      <MainCard onClickInfo={onClickInfo} onClickTest={onClickTest} />
    </>
  );
}

export default App;
