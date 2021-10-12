// HMJ

import React, { Suspense, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import PlaySound from './animation/PlaySound';
import Button from './ui/Button';
import VerticalDivider from './ui/VerticalDivider';

type AnimationPagePropsType = {
  audioFile: string;
  audioFileName: string;
};

const INSTRUCTIONS: React.ReactElement[] = [
  <>
    Use a{' '}
    <a
      href="https://chrome.google.com/webstore/detail/scrnli-screenshot-screen/ijejnggjjphlenbhmjhhgcdpehhacaal"
      rel="noreferrer"
      target="_blank"
    >
      screen recorder
    </a>{' '}
    to record your unique visuals.
  </>,
  <>
    Upload your file to a decentralized storage platform, such as IPFS or Arweave. We recommend{' '}
    <a href="https://www.pinata.cloud/" rel="noreferrer" target="_blank">
      Pinata
    </a>
    .
  </>,
  <>
    Create a <i>manifest.json</i> file, according to the{' '}
    <a
      href="https://medium.com/metaplex/metaplex-metadata-standard-45af3d04b541"
      rel="noreferrer"
      target="_blank"
    >
      Metaplex
    </a>{' '}
    standard. Upload it to IPFS with Pinata.
  </>,
  <>
    Create your NFT on the Solana blockchain. You can use{' '}
    <a href="https://github.com/InnerMindDAO/MintUI" rel="noreferrer" target="_blank">
      MintUI
    </a>
    .
  </>,
  <>Put your NFT up for sale, share with your fans!</>,
];

const AnimationPage = ({
  audioFile,
  audioFileName,
}: AnimationPagePropsType): React.ReactElement<AnimationPagePropsType> => {
  const [isLinear, setIsLinear] = useState(true);
  const [hasColor, setHasColor] = useState(true);
  const [areInstructionsShown, setAreInstructionsShown] = useState(false);

  const handleToggleLinear = () => {
    setIsLinear((previousValue) => !previousValue);
  };

  const handleToggleColor = () => {
    setHasColor((previousValue) => !previousValue);
  };

  const handleMintNFTClick = () => {
    setAreInstructionsShown(true);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="py-12">{audioFileName}</p>
      <div className="flex flex-col w-full px-4 md:px-12 md:flex-row md:space-x-4">
        <div className="w-full h-64 md:h-98 md:w-2/3">
          <Suspense fallback="Loading">
            <Canvas camera={{ position: [0, 0, 2], far: 50 }}>
              {audioFile != null && (
                <>
                  <PlaySound hasRainbowColor={hasColor} isLinear={isLinear} url={audioFile} />
                  <OrbitControls enableZoom={false} />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                </>
              )}
            </Canvas>
          </Suspense>
        </div>

        <div className="flex flex-col items-center justify-center w-full py-8 md:w-1/3">
          <div className="text-sm md:text-xs grid grid-cols-2 gap-4">
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
      <Button disabled={areInstructionsShown} label="Mint NFT" onClick={handleMintNFTClick} />

      {areInstructionsShown && (
        <>
          <div className="flex flex-col items-center px-4 pt-8 space-y-4">
            <p className="text-center">Oops, we’re still working on one-tap minting!</p>
            <p className="text-xs">In the meantime, please follow the instructions.</p>
          </div>

          <VerticalDivider short />
          <div className="flex flex-col md:space-x-4 md:space-y-0 space-y-8 md:flex-row">
            {INSTRUCTIONS.map((instruction, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="flex flex-row items-center flex-1 px-8 md:p-0 md:flex-col md:space-y-2 space-y-0 space-x-4 md:space-x-0"
              >
                <p className="text-lg font-bold font-anton">{index + 1}</p>
                <p className="text-xs md:text-center">{instruction}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AnimationPage;
