// HMJ
import React, { useEffect, useState } from 'react';

import { PhantomProvider, SolanaWindow } from './typings';

const getProvider = (): PhantomProvider | undefined => {
  const anyWindow: SolanaWindow = window as SolanaWindow;
  const provider = anyWindow.solana;

  if (provider != null && provider.isPhantom) {
    return provider;
  }

  window.open('https://phantom.app/', '_blank');
};

const App = (): React.ReactElement => {
  const provider = getProvider();
  const [, setConnected] = useState(false);
  useEffect(() => {
    if (provider) {
      provider.on('connect', () => {
        setConnected(true);
      });
      provider.on('disconnect', () => {
        setConnected(false);
      });
      provider.connect();

      return () => {
        provider.disconnect();
      };
    }
  }, [provider]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
