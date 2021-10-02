// HMJ

import React, { useRef } from 'react';
import { useGLTF, OrthographicCamera } from '@react-three/drei';

const SplineTest = (): React.ReactElement => {
  const mesh = useRef<THREE.Mesh>(null!);
  const group = useRef<THREE.Group>(null!);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes } = useGLTF('/spline-test.gltf');

  return (
    <group ref={group} dispose={null}>
      <OrthographicCamera far={50000} makeDefault={false} near={-50000} position={[0, 0, 1000]}>
        <directionalLight
          intensity={0.75}
          position={[850000, 1300000, 1000000]}
          rotation={[-0.92, 0.48, -0.34]}
        />
      </OrthographicCamera>
      <mesh
        ref={mesh}
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[36, 14, 178]}
      />
    </group>
  );
};

useGLTF.preload('/spline-test.gltf');

export default SplineTest;
