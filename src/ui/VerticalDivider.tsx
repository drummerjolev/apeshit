// HMJ

import React from 'react';

type VerticalDividerPropsType = {
  short?: boolean;
};

const VerticalDivider = ({ short }: VerticalDividerPropsType): React.ReactElement => (
  <hr className={`w-px ${short ? 'h-8 md:h-16' : 'md:h-64 h-32'} my-8 bg-white border-0`} />
);

export default VerticalDivider;
