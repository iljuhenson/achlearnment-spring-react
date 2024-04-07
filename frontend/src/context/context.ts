import {createContext} from "react";

export const TokenContext = createContext<{token: string | undefined, updateToken: (token: string | undefined) => void}>({
    token: undefined,
    updateToken: _ => {},
});