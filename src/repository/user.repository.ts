import { cookies } from "next/headers";
import { PrismaClient, Prisma } from "@prisma/client";

import { prisma } from "@/db/prisma";

export async function createUser(email: string, password: string) {
  const client = await prisma;

  const userObject = await client.user.create({
    data: { email, password },
  });

  return userObject;
}

export async function getUser(userId: number) {
  const client = await prisma;

  const userObject = await client.user.findUnique({
    where: {
      id: userId,
    },
  });

  return userObject;
}

export async function getUserByEmail(email: string) {
  const client = await prisma;

  const userObject = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  return userObject;
}
