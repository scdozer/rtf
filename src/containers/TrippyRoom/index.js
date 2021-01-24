import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

import Ball from "./../../components/Ball";
// import Sphere from "./../../components/Sphere";
import Cube from "./../../components/Cube";

import "./../../App.css";

function TrippyRoom() {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 15] }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[2, 2, 3]} />
      <Ball />
      <Suspense fallback={null}>
        {/* <Sphere color="black" position={[1, 0, 0]} />
        <Sphere color="white" position={[0, 1, 0]} />
        <Sphere color="black" position={[-1, 0, 0]} />
        <Sphere color="white" position={[0, -1, 0]} /> */}
        <Cube scale={[10, 10, 10]} />
      </Suspense>
    </Canvas>
  );
}

export default TrippyRoom;
