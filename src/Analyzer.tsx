// HMJ
import * as THREE from 'three';
import React, { forwardRef, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

const Analyzer = forwardRef<THREE.Audio<AudioNode>>((props, forwardedRef) => {
  const sound = forwardedRef as React.RefObject<THREE.Audio<AudioNode>>;
  const mesh = useRef<THREE.Mesh>(null!);
  const analyser = useRef<THREE.AudioAnalyser>(null!);

  const group = useRef();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF('/testball9.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions['Displace.001Action']?.play();
  });

  useEffect(() => {
    if (sound.current) {
      analyser.current = new THREE.AudioAnalyser(sound.current, 32);
    }
  }, []);
  useFrame(() => {
    if (analyser.current) {
      // const data = analyser.current.getAverageFrequency();

      if (mesh.current && Object.keys(actions).length > 0) {
        actions['KeyAction.003']?.play();
        // actions['KeyAction.003']?.play();
        // mesh.current.scale.x =
        //   mesh.current.scale.y =
        //   mesh.current.scale.z =
        //     (data / 100) * 0.4 + 0.6;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={mesh}
        geometry={nodes.Displace.geometry}
        material={materials.Material}
        scale={1.27}
      />
    </group>
  );
});

useGLTF.preload('/testball9.gltf');

export default Analyzer;
