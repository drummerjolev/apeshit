// HMJ
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import MinBear from './Minbeartest';
import SplineTest from './Spline-test';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <div className="w-full h-96">
        <Suspense fallback="Loading">
          <Canvas>
            <MinBear />
            <SplineTest />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} /> */}
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
