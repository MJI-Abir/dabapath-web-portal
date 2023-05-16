import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: false,
  user: {
    // isLoggedIn: false,
    accessToken: "",
    refereshToken: "",
    id: null,
    name: "",
    email: null,
    phone: null,
    photo: "",
    groups: [],
    verified: false,
  },
};

const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };
