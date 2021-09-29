// HMJ
import { PublicKey, Transaction } from '@solana/web3.js';

export type DisplayEncoding = 'utf8' | 'hex';

export type PhantomEvent = 'disconnect' | 'connect';

export type PhantomRequestMethod =
  | 'connect'
  | 'disconnect'
  | 'signTransaction'
  | 'signAllTransactions'
  | 'signMessage';

export type ConnectOpts = {
  onlyIfTrusted: boolean;
};

export type PhantomProvider = {
  publicKey: PublicKey | null;
  isPhantom: boolean | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signMessage: (message: Uint8Array | string, display?: DisplayEncoding) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
};

export type SolanaWindow = {
  solana?: PhantomProvider;
};
