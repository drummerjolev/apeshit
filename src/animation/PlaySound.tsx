// HMJ
import React, { Suspense, useRef } from 'react';
import { PositionalAudio } from '@react-three/drei';
import * as THREE from 'three';

import Analyzer from './Analyzer';

type PlaySoundPropsType = {
  url: string;
};

const PlaySound = ({ url }: PlaySoundPropsType): React.ReactElement<PlaySoundPropsType> => {
  // This component creates a suspense block, blocking execution until
  // all async tasks (in this case PositionAudio) have been resolved.
  const sound = useRef<THREE.Audio<AudioNode>>(null!);

  return (
    <Suspense fallback={null}>
      <PositionalAudio ref={sound} url={url} autoplay />
      <Analyzer ref={sound} />
    </Suspense>
  );
};

export default PlaySound;