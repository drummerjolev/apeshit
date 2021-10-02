// HMJ
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PositionalAudio, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import Analyzer from './Analyzer';

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target != null && event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        const base64 = reader.result ?? '';
        const base64String = base64.toString();

        setAudioFile(base64String);
      };
    }
  };

  return (
    <div className="App">
      <div className="w-full h-screen">
        <input accept=".mp3,.wav" type="file" onChange={handleInputChange} />
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
  );
};

export default App;
