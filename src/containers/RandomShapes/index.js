import * as THREE from "three";
import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { useSprings, a } from "react-spring/three";
import { OrbitControls } from "drei";
// import "./styles.css";

const number = 35;
const colors = [
  "#A2CCB6",
  "#FCEEB5",
  "#EE786E",
  "#e0feff",
  "lightpink",
  "lightblue",
];
const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        // color={springs[index].color}
        color="teal"
        roughness={0.25}
        metalness={0.3}
      />
    </a.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={1} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.5}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

function RandomShapes() {
  return (
    <Canvas shadowMap camera={{ position: [0, 0, 200], fov: 100 }}>
      <OrbitControls />
      <Lights />
      <Content />
    </Canvas>
  );
}
export default RandomShapes;
