// import { PhantomProvider, SolanaWindow } from './typings';

// const getProvider = (): PhantomProvider | undefined => {
// const anyWindow: SolanaWindow = window as SolanaWindow;
// const provider = anyWindow.solana;

// if (provider != null && provider.isPhantom) {
// return provider;
// }

// window.open('https://phantom.app/', '\_blank');
// };

// TODO: mint NFT
// TODO: add it to your wallet

// const scene = new THREE.Scene();
// React.useEffect(() => {
// const loader = new GLTFLoader();
// loader.load(
// 'minbeartest.gltf',
// (gltf) => {
// scene.add(gltf.scene);
// },
// (xhr) => {
// console.log((xhr.loaded / xhr.total) \* 100 + '% loaded');
// },
// () => {
// console.log('An error happened');
// },
// );
// }, []);
// console.log(scene);
// const provider = getProvider();
// const [, setConnected] = useState(false);
// useEffect(() => {
// if (provider) {
// provider.on('connect', () => {
// setConnected(true);
// });
// provider.on('disconnect', () => {
// setConnected(false);
// });
// provider.connect();

// return () => {
// provider.disconnect();
// };
// }
// }, [provider]);

// https://stackoverflow.com/questions/68215033/i-would-like-to-mint-a-new-token-on-solana-how-can-i-do-this-using-solana-web3
// const createNFT = async () => {
// }
