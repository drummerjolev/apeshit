// HMJ

import React from 'react';

const FOOTER_CONTENTS = [
  {
    role: 'Graphic Design',
    name: 'Honey',
    link: '',
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
  },
];

const Footer = (): React.ReactElement => (
  <footer className="flex flex-row justify-between h-full px-16 pt-8 pb-24 mt-8 bg-transparent space-x-4">
    {FOOTER_CONTENTS.map((person) => (
      <div key={person.name} className="font-sans text-sm text-center text-white">
        <p className="pb-2 font-extrabold">{person.role.toUpperCase()}</p>
        {person.link ? (
          <a href={person.link} rel="noreferrer" target="_blank">
            <p>{person.name}</p>
          </a>
        ) : (
          <p>{person.name}</p>
        )}
      </div>
    ))}
  </footer>
);

export default Footer;
