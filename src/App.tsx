// HMJ
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import MinBear from './Minbeartest';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <div className="w-full h-screen">
        <Suspense fallback="Loading">
          <Canvas>
            <MinBear />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
