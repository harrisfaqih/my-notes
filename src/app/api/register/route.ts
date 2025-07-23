import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import bcrypt from "bcryptjs";

// export async function POST(request: NextRequest) {
//   const { email, password } = await request.json();

//   const hashedPassword = await bcrypt.hash(password, 3);

//   try {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//       },
//     });

//     return NextResponse.json(
//       { message: "User created successfully" },
//       { status: 201 },
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Cek apakah user sudah ada
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "null" },
      { status: 500 },
    );
  }
}
