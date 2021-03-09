import "./Chair.scss";

//Components
import Header from "./components/header";
import { Canvas } from "react-three-fiber";

import React from 'react'

export default function Chair() {
  return (
    <>
      <Header/>
      <Canvas/>
    </>
  )
}


