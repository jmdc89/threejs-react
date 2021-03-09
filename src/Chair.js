import React, {Suspense} from 'react';
import "./Chair.scss";

//Components
import Header from "./components/header";
import {Section} from './components/section';
import { Canvas } from "react-three-fiber";

import {Html, useGLTF} from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/armchairYellow.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
      <Section factor={1.5} offset={1}>
           <group position={[0,250,0]}>
             <mesh position={[0,35,0]}>
               <Model/>
             </mesh>
           <Html fullscreen>
              <div className='container'>
                <h1 className='title'>Hello</h1>
              </div>
          </Html> 
           </group>
      </Section>
  );
};

export default function Chair() {
  return (
    <>
      <Header/>
      <Canvas colorManagement camera={{ position: [0,0,120], fov:70}}>
          <Suspense fallback={null}>
             <HTMLContent/>
          </Suspense>

      </Canvas>
    </>
  )
}


