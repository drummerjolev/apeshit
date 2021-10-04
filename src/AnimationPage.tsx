// HMJ

import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import PlaySound from './animation/PlaySound';

type AnimationPagePropsType = {
  audioFile: string;
};

const AnimationPage = ({
  audioFile,
}: AnimationPagePropsType): React.ReactElement<AnimationPagePropsType> => (
  <div className="h-96">
    <Suspense fallback="Loading">
      <Canvas camera={{ position: [0, 0, 5], far: 50 }}>
        {audioFile != null && (
          <>
            <PlaySound url={audioFile} />
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
          </>
        )}
      </Canvas>
    </Suspense>
  </div>
);

export default AnimationPage;
