import { useContext } from "react";
import { StoreContext } from "../stores/provider";

const useStores = () => {
  return useContext(StoreContext);
}

export default useStores;
