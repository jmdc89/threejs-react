import React, {Suspense, useRef} from 'react';
import "./Chair.scss";

//Components
import Header from "./components/header";
import {Section} from './components/section';
import { Canvas, useFrame } from "react-three-fiber";

import {Html, useGLTF} from "@react-three/drei";

const Model = ({modelPath}) => {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => {
  return (
  <>
    <ambientLight intensity={0.3}/>
    <directionalLight position={[10,10,5]} intensity={0.5}/>
    {/* <directionalLight position={[0,10,0]} intensity={0.75}/> */}
    <spotLight intensity={0.75} position={[0,1000,0]}/>
  </>
  );
}

const HTMLContent = ({children, modelPath, positionY}) => {

  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
      <Section factor={1.5} offset={1}>
           <group position={[0,positionY,0]}>
             <mesh ref={ref} position={[0,-35,0]}>
               <Model modelPath={modelPath}/>
             </mesh>
           <Html fullscreen>{children}</Html> 
           </group>
      </Section>
  );
};

export default function Chair() {
  return (
    <>
      <Header/>
      <Canvas colorManagement camera={{ position: [0,0,120], fov:70}}>
        <Lights/>
          <Suspense fallback={null}>
             <HTMLContent modelPath="/armchairYellow.gltf" positionY={250}>
             <div className='container'>
                <h1 className='title'>Yellow</h1>
              </div>
             </HTMLContent>
              <HTMLContent modelPath="/armchairGreen.gltf" positionY={0}>
             <div className='container'>
                <h1 className='title'>Green</h1>
              </div>
             </HTMLContent>
          </Suspense>
      </Canvas>
    </>
  )
}


