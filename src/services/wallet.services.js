import { db } from "../fbconfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

const walletConnectionRef = collection(db, "wallets");
class WalletDataService {
  addWalletAddress = (newAddress) => {
    console.log(newAddress, "New address");
    return addDoc(walletConnectionRef, newAddress);
  };
}

export default new WalletDataService();
