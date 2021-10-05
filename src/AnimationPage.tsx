// HMJ

import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import PlaySound from './animation/PlaySound';
import Button from './ui/Button';

type AnimationPagePropsType = {
  audioFile: string;
  audioFileName: string;
};

const AnimationPage = ({
  audioFile,
  audioFileName,
}: AnimationPagePropsType): React.ReactElement<AnimationPagePropsType> => (
  <div className="flex flex-col items-center h-98">
    <p className="py-12">{audioFileName}</p>
    <div className="flex flex-row w-full px-12 space-x-4">
      <div className="w-2/3 h-98">
        <Suspense fallback="Loading">
          <Canvas camera={{ position: [0, 0, 2], far: 50 }}>
            {audioFile != null && (
              <>
                <PlaySound url={audioFile} />
                <OrbitControls enableZoom={false} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
              </>
            )}
          </Canvas>
        </Suspense>
      </div>
      <div className="flex flex-col items-center w-1/3 py-8">
        <p className="flex-none">Hello World</p>
      </div>
    </div>
    <div className="p-16">
      <Button label="Mint NFT" />
    </div>
  </div>
);

export default AnimationPage;
