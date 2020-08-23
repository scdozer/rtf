import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";

function Sphere(props) {
  const { color, position } = props;
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/flakes.png");

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
  });

  return (
    <group ref={ref}>
      <mesh position={position}>
        <sphereBufferGeometry attach="geometry" args={[0.3, 32, 32]} />
        <meshPhysicalMaterial
          attach="material"
          color={color}
          clearcoat={1.0}
          clearcoatRoughness={0}
          metalness={0.5}
          roughness={0.3}
          normalMap={texture}
          normalScale={[1, 1]}
          normalMap-wrapS={THREE.RepeatWrapping}
          normalMap-wrapT={THREE.RepeatWrapping}
          normalMap-repeat={[4, 4]}
          normalMap-anisotropy={16}
        />
      </mesh>
    </group>
  );
}
export default Sphere;
