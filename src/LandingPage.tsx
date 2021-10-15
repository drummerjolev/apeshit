// HMJ

import ReactPlayer from 'react-player';

import UploadButton from './ui/UploadButton';
import VerticalDivider from './ui/VerticalDivider';

type LandingPagePropsType = {
  setAudioFile: (base64: string) => void;
  setAudioFileName: (name: string) => void;
  setIsUploading: (isUploading: boolean) => void;
};

const VIMEO_URL = 'https://vimeo.com/632341476';

const LandingPage = ({
  setAudioFile,
  setAudioFileName,
  setIsUploading,
}: LandingPagePropsType): React.ReactElement<LandingPagePropsType> => (
  <div className="flex flex-col items-center p-12 text-center text-white">
    <h1 className="w-full pb-2 md:w-98">Beautiful, bespoke music visuals in an instant.</h1>
    <VerticalDivider />
    <h1 className="w-full pb-2 text-center">Available as collectibles for your fans.</h1>
    <VerticalDivider />
    <UploadButton
      setAudioFile={setAudioFile}
      setAudioFileName={setAudioFileName}
      setIsUploading={setIsUploading}
    />
    <div className="pt-4 space-y-1">
      <p className="text-xs">.wav or .mp3</p>
      <p className="text-xs">We do not store your music.</p>
    </div>
    <VerticalDivider />
    <p className="text">Our vision</p>
    <ReactPlayer url={VIMEO_URL} controls />
  </div>
);

export default LandingPage;
