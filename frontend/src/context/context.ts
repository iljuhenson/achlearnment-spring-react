import {createContext} from "react";

export const TokenContext = createContext<{token: string | null, updateToken: (token: string | null) => void}>({
    token: null,
    updateToken: _ => {},
});