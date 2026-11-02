import { DEMO_ACCOUNT } from "../data/demoAccount";
import type { StoreProfile } from "../types";

export async function loginWithUsernamePassword(
  username: string,
  password: string
): Promise<StoreProfile | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const valid =
    username === DEMO_ACCOUNT.username &&
    password === DEMO_ACCOUNT.password;

  return valid ? DEMO_ACCOUNT.profile : null;
}
