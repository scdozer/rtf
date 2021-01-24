import * as THREE from "three";
import React, { useRef } from "react";
import { OrbitControls } from "drei";
import { Canvas, useFrame } from "react-three-fiber";
// import "./App.css";

const tempObject = new THREE.Object3D();

function Pyramid() {
  const ref = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time / 4);
    ref.current.rotation.y = Math.sin(time / 2);
    let i = 0;
    for (let x = 0; x < 2; x++)
      for (let y = 0; y < 2; y++)
        for (let z = 0; z < 2; z++) {
          const id = i++;
          tempObject.position.set(x, y, z);
          tempObject.rotation.x = Math.sin(z / 2 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <tetrahedronBufferGeometry attach="geometry" args={(5, 10)} />
      <meshPhongMaterial attach="material" color="#5ca4a9" />
    </instancedMesh>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>buncha useless shit</h2>
      <h1>
        by{" "}
        <a target="_blank" href="https://scottcardoza.com">
          scott cardoza
        </a>
      </h1>
      <p>
        you can click/drag and zoom in/out on all the 3d modles.built with
        react-three-fiber and other pmndrs libraries.
      </p>
      <p>most code is based of tutorials. credit given after i get rich.</p>
    </div>
  );
}

export default Home;
