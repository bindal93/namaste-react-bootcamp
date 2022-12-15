import { createContext } from "react";

const UserContext = createContext({
  name: "default name",
  updateName: () => {},
});

export default UserContext;
