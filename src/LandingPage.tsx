// HMJ

import UploadButton from './ui/UploadButton';
import VerticalDivider from './ui/VerticalDivider';

type LandingPagePropsType = {
  setAudioFile: (base64: string) => void;
  setIsUploading: (isUploading: boolean) => void;
};

const LandingPage = ({
  setAudioFile,
  setIsUploading,
}: LandingPagePropsType): React.ReactElement<LandingPagePropsType> => (
  <div className="flex flex-col items-center p-12  text-center text-white">
    <h1 className="pb-2 w-98">Beautiful, bespoke music visuals in an instant.</h1>
    <VerticalDivider />
    <h1 className="pb-2 w-98">Available as collectibles for your fans.</h1>
    <VerticalDivider />
    <UploadButton setAudioFile={setAudioFile} setIsUploading={setIsUploading} />
    <div className="pt-4 space-y-1 font-roboto">
      <p className="text-xs">.wav or .mp3</p>
      <p className="text-xs">We do not store your music.</p>
    </div>
  </div>
);

export default LandingPage;
