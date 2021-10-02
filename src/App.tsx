// HMJ
import React from 'react';

// import { PhantomProvider, SolanaWindow } from './typings';

// const getProvider = (): PhantomProvider | undefined => {
//   const anyWindow: SolanaWindow = window as SolanaWindow;
//   const provider = anyWindow.solana;

//   if (provider != null && provider.isPhantom) {
//     return provider;
//   }

//   window.open('https://phantom.app/', '_blank');
// };

// TODO: mint NFT
// TODO: add it to your wallet

const App = (): React.ReactElement => {
  // const provider = getProvider();
  // const [, setConnected] = useState(false);
  // useEffect(() => {
  //   if (provider) {
  //     provider.on('connect', () => {
  //       setConnected(true);
  //     });
  //     provider.on('disconnect', () => {
  //       setConnected(false);
  //     });
  //     provider.connect();

  //     return () => {
  //       provider.disconnect();
  //     };
  //   }
  // }, [provider]);

  // https://stackoverflow.com/questions/68215033/i-would-like-to-mint-a-new-token-on-solana-how-can-i-do-this-using-solana-web3
  // const createNFT = async () => {
  // }

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
