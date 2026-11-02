import { createContext, ReactNode, useContext, useState } from "react";
import { loginWithUsernamePassword } from "./services/authService";
import type { StoreProfile } from "./types";

type AuthValue = {
  user: StoreProfile | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext =
  createContext<AuthValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StoreProfile | null>(null);

  async function login(username: string, password: string) {
    const profile =
      await loginWithUsernamePassword(username, password);

    if (!profile) return false;

    setUser(profile);
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return value;
}