import { DEMO_ACCOUNT } from "../data/demoAccount";

export async function checkLogin(
  username: string,
  password: string
): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    username === DEMO_ACCOUNT.username &&
    password === DEMO_ACCOUNT.password
  );
}
