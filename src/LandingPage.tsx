// HMJ

import UploadButton from './ui/UploadButton';

type LandingPagePropsType = {
  setAudioFile: (base64: string) => void;
  setIsUploading: (isUploading: boolean) => void;
};

const LandingPage = ({
  setAudioFile,
  setIsUploading,
}: LandingPagePropsType): React.ReactElement<LandingPagePropsType> => (
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
    <UploadButton setAudioFile={setAudioFile} setIsUploading={setIsUploading} />
    <p className="pt-4 text-xs">
      Use any <b>.mp3</b> or <b>.wav</b> file
    </p>
  </div>
);

export default LandingPage;
