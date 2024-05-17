import {
  createWallet,
  walletConnect,
} from "thirdweb/wallets";
export const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("com.trustwallet.app"),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
  createWallet("app.phantom"),
] as Array<any>;