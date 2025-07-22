"use server";

import {
  createUser,
  getUserByEmail,
  getUserPassword,
} from "@/repository/user.repository";
import { prisma } from "@/db/prisma";

import { handleError } from "@/lib/utils";

export const loginAction = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);
    const userPassword = await getUserPassword(email);

    // check if user is exsist then check if password is correct
    if (!user) {
      return { errorMessage: "User not found" };
    }

    if (userPassword !== password) {
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
