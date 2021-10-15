// HMJ

import React from 'react';

import Button from './ui/Button';

const SOLSEA_LINK = 'https://solsea.io/nft/6kDGBSv9q6ZGjRUmToKLkWuPMYgFMAiUaVnm2zQVcjsT';

const FOOTER_CONTENTS = [
  {
    role: 'Graphic Design',
    name: 'Honey',
    link: 'https://www.linkedin.com/in/honeychang/',
  },
  {
    role: 'Product Design & 3D Art',
    name: 'Min',
    link: 'https://www.linkedin.com/in/min-kim-40588910a/',
  },
  {
    role: 'Development',
    name: 'Jonathan',
    link: 'https://www.linkedin.com/in/drummerjolev/',
  },
  {
    role: 'Music',
    name: 'Nocturnal',
    link: 'https://linktr.ee/nocturnal.band',
  },
];

const Footer = (): React.ReactElement => (
  <footer className="h-full p-8 pb-12 md:px-16 md:pb-16">
    <div className="flex flex-col justify-between pb-8 mt-8 bg-transparent md:flex-row md:space-x-4 space-y-8 md:space-y-0">
      {FOOTER_CONTENTS.map((person) => (
        <div key={person.name} className="font-sans text-sm text-center text-white">
          <p className="pb-2 font-extrabold">{person.role.toUpperCase()}</p>
          {person.link ? (
            <a href={person.link} rel="noreferrer" target="_blank">
              {person.name}
            </a>
          ) : (
            <>{person.name}</>
          )}
        </div>
      ))}
    </div>
    <div
      className="flex flex-col items-center justify-center w-full text-white md:flex-row md:space-x-8 space-x-0 space-y-8 md:space-y-0"
      style={{ backgroundColor: '#08080A' }}
    >
      <img alt="preview" className="h-32 md:h-48" src="preview-img.png" />
      <p className="text-2xl text-center font-anton">Be the first to collect an Apeshit NFT</p>
      <a href={SOLSEA_LINK} rel="noreferrer" target="_blank">
        <Button label="Buy now" />
      </a>
    </div>
  </footer>
);

export default Footer;
