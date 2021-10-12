// HMJ

import React from 'react';

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
  },
];

const Footer = (): React.ReactElement => (
  <footer className="flex flex-col justify-between h-full px-8 pt-8 pb-12 mt-8 bg-transparent md:px-16 md:pb-24 md:flex-row md:space-x-4 space-y-8 md:space-y-0">
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
  </footer>
);

export default Footer;
