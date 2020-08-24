import * as THREE from "three";
import React, { useRef } from "react";
// import { OrbitControls } from "drei";
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
          // Math.sin(x / 2 + time) +
          // Math.sin(y / 2 + time) + Math.sin(z / 2 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <tetrahedronBufferGeometry attach="geometry" args={(5, 10)} />
      <meshPhongMaterial attach="material" color="teal" />
    </instancedMesh>
  );
}

function ManyMany() {
  // const ref = useRef();
  return <Pyramid />;
}

function TrippyPyramid() {
  return (
    <Canvas colorManagement camera={{ position: [0, 0, 30], near: 5, far: 40 }}>
      <ambientLight intensity={0.9} />
      <pointLight intensity={0.9} position={[0, 10, 25]} />
      <ManyMany />
    </Canvas>
  );
}

export default TrippyPyramid;
