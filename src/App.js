import './App.css';
import * as THREE from "three";
import React, {component} from 'react';

let scene, camera, renderer, cube;

function init() {
  //creating scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a3b4c);

  //add camera
  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight
  );

  //renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //add geometry
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  animate();
}

 //animation
function animate(){
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);

}


function App() {
  return (
    <div className="App">
      {init()}
    </div>
  );
}

export default App;
