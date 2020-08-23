import * as THREE from "three";
import React, { useRef } from "react";
import { OrbitControls } from "drei";
import { Canvas, useFrame } from "react-three-fiber";
// import "./App.css";

const tempObject = new THREE.Object3D();

function Boxes() {
  const ref = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time / 4);
    ref.current.rotation.y = Math.sin(time / 2);
    let i = 0;
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(5 - x, 5 - y, 5 - z);
          tempObject.rotation.y =
            Math.sin(x / 4 + time) +
            Math.sin(y / 4 + time) +
            Math.sin(z / 4 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]} />
      <meshPhongMaterial attach="material" color="teal" />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight castShadow={true} intensity={0.6} position={[0, 10, 4]} />
      {/* <OrbitControls /> */}
    </>
  );
}

function TrippyBoxes() {
  return (
    <Canvas colorManagement camera={{ position: [0, 0, 15], near: 5, far: 40 }}>
      <Scene />
      <Boxes />
    </Canvas>
  );
}

export default TrippyBoxes;
