// HMJ
import * as THREE from 'three';
import React, { forwardRef, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Analyzer = forwardRef<THREE.Audio<AudioNode>>((props, forwardedRef) => {
  const sound = forwardedRef as React.RefObject<THREE.Audio<AudioNode>>;
  const mesh = useRef<THREE.Mesh>(null!);
  const analyser = useRef<THREE.AudioAnalyser>(null!);

  const group = useRef();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF('/testball5.glb');

  useEffect(() => {
    if (sound.current) {
      analyser.current = new THREE.AudioAnalyser(sound.current, 32);
    }
  }, []);
  useFrame(() => {
    if (analyser.current) {
      const data = analyser.current.getAverageFrequency();

      if (mesh.current) {
        mesh.current.scale.x =
          mesh.current.scale.y =
          mesh.current.scale.z =
            (data / 100) * 0.4 + 0.6;
      }
    }
  });

  return (
    <group ref={group} dispose={null}>
      <mesh
        ref={mesh}
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        rotation={[0.94, -0.22, 0.61]}
      />
    </group>
  );
});

useGLTF.preload('/testball5.glb');

export default Analyzer;
