import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { BackSide } from "three";

function Cube(props) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/lol.jpg");

  useFrame(() => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.z += 0.003;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial
        map={texture}
        attach="material"
        side={BackSide}
        map-wrapS={THREE.RepeatWrapping}
        map-wrapT={THREE.RepeatWrapping}
        map-repeat={[2, 1]}
      />
    </mesh>
  );
}
export default Cube;
