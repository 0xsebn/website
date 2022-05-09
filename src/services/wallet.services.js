import { db } from "../fbconfig";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

const walletConnectionRef = collection(db, "wallets");
class WalletDataService {
  addWalletAddress = (newAddress) => {
    console.log(newAddress, "New address");
    return setDoc(doc(db, "wallets", newAddress), {});
  };
}

export default new WalletDataService();
