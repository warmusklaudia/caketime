import { createContext, useContext } from 'react'

export interface TokenContextType {
  token: string | undefined
  setToken: Function
}

// Context in React = props die je in de hele app wenst te gebruiken
export const TokenContext = createContext<TokenContextType>({
  token: undefined,
  setToken: (t: string) => {},
})
export const useToken = () => useContext(TokenContext)
