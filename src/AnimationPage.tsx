// HMJ

import React, { Suspense, useState } from 'react';
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
}: AnimationPagePropsType): React.ReactElement<AnimationPagePropsType> => {
  const [isLinear, setIsLinear] = useState(true);
  const [hasColor, setHasColor] = useState(true);

  const handleToggleLinear = () => {
    setIsLinear((previousValue) => !previousValue);
  };

  const handleToggleColor = () => {
    setHasColor((previousValue) => !previousValue);
  };

  return (
    <div className="flex flex-col items-center h-98">
      <p className="py-12">{audioFileName}</p>
      <div className="flex flex-row w-full px-12 space-x-4">
        <div className="w-2/3 h-98">
          <Suspense fallback="Loading">
            <Canvas camera={{ position: [0, 0, 2], far: 50 }}>
              {audioFile != null && (
                <>
                  <PlaySound isLinear={isLinear} url={audioFile} />
                  <OrbitControls enableZoom={false} />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                </>
              )}
            </Canvas>
          </Suspense>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 py-8">
          <div className="text-xs grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <p className="text-gray-400">Wireframe</p>
            <label className="flex items-center cursor-pointer">
              <input checked={isLinear} type="checkbox" onChange={handleToggleLinear} />
              <span className="ml-2">Linear</span>
            </label>
            {/* Row 2 */}
            <p className="text-gray-400">Colour</p>
            <label className="flex items-center cursor-pointer">
              <input checked={hasColor} type="checkbox" onChange={handleToggleColor} />
              <span className="ml-2">Rainbow</span>
            </label>
          </div>
        </div>
      </div>

      <div className="p-16">
        <Button label="Mint NFT" />
      </div>
    </div>
  );
};

export default AnimationPage;
