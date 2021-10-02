// HMJ
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PositionalAudio, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import Analyzer from './Analyzer';
import Button from './Button';

function PlaySound({ url }: { url: string }) {
  // This component creates a suspense block, blocking execution until
  // all async tasks (in this case PositionAudio) have been resolved.
  const sound = useRef<THREE.Audio<AudioNode>>(null!);

  return (
    <Suspense fallback={null}>
      <PositionalAudio ref={sound} url={url} autoplay />
      <Analyzer ref={sound} />
    </Suspense>
  );
}

const App = (): React.ReactElement => {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target != null && event.target.files && event.target.files.length > 0) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        const base64 = reader.result ?? '';
        const base64String = base64.toString();

        setIsUploading(false);
        setAudioFile(base64String);
      };
    }
  };

  const handleUpload = () => {
    if (inputFileRef != null && inputFileRef.current != null) {
      inputFileRef.current.click();
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
      }}
    >
      <div className="flex-grow w-full">
        {!isUploading && !audioFile && (
          <div className="pt-12 text-center text-white">
            <h1 className="text-3xl font-semibold">Welcome, Music Maker.</h1>
            <div className="p-8 space-y-2">
              <p>
                We get it. You spend your time creating awesome music. You also want to create an{' '}
                <a className="font-bold" href="https://en.wikipedia.org/wiki/Non-fungible_token">
                  NFT
                </a>{' '}
                for your song.
              </p>
              <p>This tool generates beautiful, unique art matched to your music.</p>
            </div>
            <input
              ref={inputFileRef}
              accept=".mp3,.wav"
              className="hidden"
              type="file"
              onChange={handleInputChange}
            />
            <Button label="Load song" onClick={handleUpload} />
            <p className="pt-4 text-xs">
              Use any <b>.mp3</b> or <b>.wav</b> file
            </p>
          </div>
        )}
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
      </div>
      <footer className="h-full p-4 mt-8 bg-transparent">
        <div className="font-sans text-sm text-center text-white space-y-2">
          <p>We are Honey, Min and Jonathan.</p>
          <p>This is our entry for Solana's Ignition Hackathon 2021.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
