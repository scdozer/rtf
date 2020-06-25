import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

const VERTICES_NUM = 128;

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function Ball() {
  const [cubeRenderTarget] = useState(
    new THREE.WebGLCubeRenderTarget(128, {
      format: THREE.RGBFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    })
  );
  const ref = useRef();
  const camera = useRef();
  useFrame(({ clock, gl, scene }) => {
    const time = clock.getElapsedTime() / 10;

    const noiseFactor = 2;

    for (let i = 0; i < ref.current.geometry.vertices.length; i++) {
      const p = ref.current.geometry.vertices[i];
      p.normalize().multiplyScalar(
        0.3 * Math.random() + 1 * easeInOutQuad(Math.sin(2 * Math.PI * time))
        // easeInOutQuad(Math.sin(2 * Math.PI * time)) *
        // window.noise.perlin3(
        //   p.x * noiseFactor + time,
        //   p.y * noiseFactor + time,
        //   p.z * noiseFactor + time
        // )
      );
    }
    ref.current.geometry.computeVertexNormals();
    ref.current.geometry.normalsNeedUpdate = true;
    ref.current.geometry.verticesNeedUpdate = true;

    ref.current.visible = false;
    camera.current.update(gl, scene);
    ref.current.visible = true;
  });

  return (
    <>
      <cubeCamera ref={camera} args={[0.1, 5000, cubeRenderTarget]} />
      <mesh ref={ref} scale={[1, 1, 1]}>
        <sphereGeometry
          attach="geometry"
          args={[2, VERTICES_NUM, VERTICES_NUM]}
        />
        <meshLambertMaterial
          attach="material"
          color={0xffffff}
          envMap={cubeRenderTarget.texture}
        />
      </mesh>
    </>
  );
}
export default Ball;
