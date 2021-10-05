// HMJ
import * as THREE from 'three';
import React, { forwardRef, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

type AnalyzerPropsType = {
  isLinear: boolean;
};

const Analyzer = forwardRef<THREE.Audio<AudioNode>, AnalyzerPropsType>(
  ({ isLinear }, forwardedRef) => {
    const sound = forwardedRef as React.RefObject<THREE.Audio<AudioNode>>;
    const mesh = useRef<THREE.Mesh>(null!);
    const analyser = useRef<THREE.AudioAnalyser>(null!);

    const group = useRef();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { nodes, materials, animations } = useGLTF('/cubetesting_metalic.glb');
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
      if (mesh.current != null) {
        const morphs = mesh.current.morphTargetDictionary;

        if (morphs != null) {
          morphs.Displace = 0.5;
          mesh.current.morphTargetInfluences = [0.05];
        }
      }
    });

    useEffect(() => {
      if (sound.current) {
        analyser.current = new THREE.AudioAnalyser(sound.current, 32);
      }
    }, []);
    useFrame(() => {
      if (analyser.current) {
        const data = analyser.current.getAverageFrequency();

        if (mesh.current && Object.keys(actions).length > 0 && data >= 50) {
          mesh.current.scale.x =
            mesh.current.scale.y =
            mesh.current.scale.z =
              (data / 100) * 0.02 + 0.25;
        }
      }
    });

    return (
      <group ref={group} dispose={null}>
        <group name="Armature" position={[0, -1.59, 0]} scale={3.23}>
          <mesh
            ref={mesh}
            geometry={nodes.Globe_1.geometry}
            material={materials['spherematerial.001']}
            morphTargetDictionary={nodes.Globe_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Globe_1.morphTargetInfluences}
            name="Globe_1"
            position={[0, 0.49, 0]}
            // TODO: share const with scale.x/y/z change above
            scale={0.27}
          >
            <meshNormalMaterial wireframe={isLinear} wireframeLinewidth={isLinear ? 3 : 1} />
          </mesh>
        </group>
      </group>
    );
  },
);

useGLTF.preload('/cubetesting_metalic.glb');

export default Analyzer;
