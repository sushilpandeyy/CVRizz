import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  try {
    const hash: string = await hashPassword(req.password);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: req.email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: 'User Already Exsisted' }, { status: 400 });
    }
    const newUser = await prisma.user.create({
      data: {
        username: req.username,
        email: req.email,
        password: hash,
        firstName: req.firstName,
        lastName: req.lastName,
      },
    });
    return NextResponse.json({message: "New User Added"},{status: 200});
  } catch (error) {
    console.log('Error creating user:', error);
    return NextResponse.json({message: "Internal Server Error"},{status: 500});
  }
}