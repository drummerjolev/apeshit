// HMJ

import React, { useRef } from 'react';

import Button from './Button';

type UploadButtonPropsType = {
  setAudioFile: (base64: string) => void;
  setAudioFileName: (name: string) => void;
  setIsUploading: (isUploading: boolean) => void;
};

const UploadButton = ({
  setAudioFile,
  setAudioFileName,
  setIsUploading,
}: UploadButtonPropsType): React.ReactElement => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target != null && event.target.files && event.target.files.length > 0) {
      setIsUploading(true);
      const reader = new FileReader();
      setAudioFileName(event.target.files[0].name);
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
    <>
      <input
        ref={inputFileRef}
        accept=".mp3,.wav"
        className="hidden"
        type="file"
        onChange={handleInputChange}
      />
      <Button label="Drop the beats" large onClick={handleUpload} />
    </>
  );
};

export default UploadButton;
