// HMJ
import React, { useState } from 'react';

import Footer from './Footer';
import LandingPage from './LandingPage';
import AnimationPage from './AnimationPage';

const App = (): React.ReactElement => {
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
      }}
    >
      <div className="flex-grow w-full">
        {isUploading && audioFile != null ? (
          <AnimationPage audioFile={audioFile} />
        ) : (
          <LandingPage setAudioFile={setAudioFile} setIsUploading={setIsUploading} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
