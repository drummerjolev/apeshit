// HMJ
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MinBear = (): React.ReactElement => {
  const mesh = useRef<THREE.Mesh>(null!);
  const group = useRef<THREE.Group>(null!);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF('/minbeartest.gltf');

  useFrame(({ clock }) => {
    group.current.rotation.x = clock.getElapsedTime() / 3;
  });

  return (
    <group ref={group} dispose={null}>
      <mesh
        ref={mesh}
        geometry={nodes.Ears.geometry}
        material={materials['Material.001']}
        position={[-0.63, 2.9, 0]}
        scale={0.28}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Head_2.geometry}
        material={nodes.Head_2.material}
        position={[0, 2.21, 0]}
        scale={[0.85, 0.76, 0.85]}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Ear_2.geometry}
        material={nodes.Ear_2.material}
        position={[0.67, 2.9, 0]}
        rotation={[0.07, 0.06, -0.66]}
        scale={[0.3, 0.3, 0.3]}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Eyes_pop.geometry}
        material={materials['Material.011']}
        position={[0.31, 2.13, 0.72]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Eyebrows.geometry}
        material={materials['Material.007']}
        position={[0.19, 2.33, 0.76]}
        rotation={[1.3, -0.46, -0.22]}
        scale={0.1}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        position={[0, 0.03, 0]}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Dress.geometry}
        material={materials['Material.004']}
        position={[0, 0.02, 0]}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Eyes_plane.geometry}
        material={nodes.Eyes_plane.material}
        position={[0.32, 2.14, 0.73]}
        rotation={[1.59, 0, -0.32]}
        scale={0.06}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Ear_2001.geometry}
        material={nodes.Ear_2001.material}
        position={[0, 2.97, 0]}
        scale={0.41}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0, 1.57, 0.97]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/minbeartest.gltf');

export default MinBear;
