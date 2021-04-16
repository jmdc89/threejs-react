import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pinacle(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/torrecompress.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Modelotorresimpl.geometry}
        material={materials["default"]}
      />
    </group>
  );
}

useGLTF.preload("/torrecompress.glb");
