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

    // Error tersebut muncul karena properti 'password' tidak ada pada tipe 'user' yang dikembalikan oleh fungsi getUserByEmail.
    // Kemungkinan besar, pada repository/user.repository.ts, fungsi getUserByEmail hanya mengambil field tertentu (misal: id, email), tanpa menyertakan password.
    // Solusi: Ambil password user dengan fungsi getUserPassword, atau modifikasi getUserByEmail agar juga mengembalikan password.
    // Contoh solusi (menggunakan getUserPassword):

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
