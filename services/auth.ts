'use server'

import { cookies } from "next/headers";

export const LoginAction = async (token: string) => {
  const cookieStore = await cookies();

  cookieStore.set("auth-token", token, {
    maxAge: 60 * 60 * 24 * 7, 
    httpOnly: true,
    secure: true,
  });

  return {success : true}
}

export const LogoutAction = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("auth-token");

  return {success : true}
}
