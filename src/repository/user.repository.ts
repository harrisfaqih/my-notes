"use server";

// import { cookies } from "next/headers";
// import { PrismaClient, Prisma } from "@prisma/client";

import { prisma } from "@/db/prisma";

export async function createUser(email: string, password: string) {
  const client = await prisma;

  const userObject = await client.user.create({
    data: { email, password },
  });

  return userObject;
}

// export async function getUser(userId: number) {
//   const client = await prisma;

//   const userObject = await client.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   return userObject;
// }

// export async function getUserByEmail(email: string) {
//   const client = await prisma;

// const userObject = await client.user.findFirst({
//   where: {
//     email: email,
//   },
// });

// return userObject;
//   return null;
// }

// export async function getUserPassword(email: string) {
//   const client = await prisma;
//   const user = await client.user.findFirst({
//     where: { email },
//     select: { password: true },
//   });
//   return user?.password || null;
// }

//import { prisma } from "@/db/prisma";

// Ambil user berdasarkan ID
export async function getUserById(userId: number) {
  return prisma.user.findUnique({
    where: { id: userId },
  });
}

// Ambil user berdasarkan email
export async function getUserByEmail(email: string) {
  // return prisma.user.findUnique({
  //   where: { email },
  // });
  return null;
}

// Ambil password user berdasarkan email
export async function getUserPassword(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { password: true },
  });
  return user?.password || null;
}
