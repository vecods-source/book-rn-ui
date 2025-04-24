import { rootState } from "@/store/store";
import { useSelector } from "react-redux";
const useAuth = () => {
  const { user, token } = useSelector((state: rootState) => state.auth);
  console.log(user, token);
  if (user && token) {
    return user;
  } else {
    return null;
  }
};

export default useAuth;
