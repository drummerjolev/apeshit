// HMJ
import React, { useState } from 'react';

import Footer from './Footer';
import LandingPage from './LandingPage';
import AnimationPage from './AnimationPage';

const App = (): React.ReactElement => {
  const [audioFileName, setAudioFileName] = useState<string | null>(null);
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
        {isUploading ? (
          <p className="pt-32 text-xs text-center text-white">Generating visuals</p>
        ) : audioFile != null && audioFileName != null ? (
          <AnimationPage audioFile={audioFile} audioFileName={audioFileName} />
        ) : (
          <LandingPage
            setAudioFile={setAudioFile}
            setAudioFileName={setAudioFileName}
            setIsUploading={setIsUploading}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
