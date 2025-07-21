"use server";

import { createUser, getUserByEmail } from "@/repository/user.repository";

import { handleError } from "@/lib/utils";

export const loginAction = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);

    // check if user is exsist then check if password is correct
    if (!user) {
      return { errorMessage: "User not found" };
    }

    if (user.password !== password) {
      return { errorMessage: "Invalid password" };
    }
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const signUpAction = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);

    if (user) {
      return { errorMessage: "User already exists" };
    }

    await createUser(email, password);

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const getUserByEmailService = async (email: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    return { errorMessage: "User not found" };
  }

  return user;
};
