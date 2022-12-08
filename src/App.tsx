import React, { useState } from "react";
import "./App.css";
import { MainCard } from "./components/MainCard";
import { Background } from "./components/MainCard/MainCard.style";
import { TestCard } from "./components/TestCard";
import { Fader, TestCardWrap } from "./components/TestCard/TestCard.style";
import { makeReport } from "./utils/error-finder";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickMain = () => {
    setShowModal(true);
  }

  const onClickTest = () => {
    setShowModal(false)
  }
  
  return (
    <>
      <Background />
      {showModal && <><Fader /> <TestCard onClick={onClickTest}/></>}
      <MainCard onClick={onClickMain}/>
    </>
  );
}

export default App;
