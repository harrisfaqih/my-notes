import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import bcrypt from "bcryptjs";
import { error } from "console";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ success: false, error: "user not found" });
  }
  return NextResponse.json({
    success: true,
    user: { id: user.id, email: user.email },
  });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { success: false, error: "Password salah" },
      { status: 401 },
    );
  }
}
