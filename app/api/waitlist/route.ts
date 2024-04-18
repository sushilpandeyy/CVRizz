import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const emailSchema = z.string().email("Invalid email address");
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
      const req = await request.json();
      const { email } = req;
      emailSchema.parse(email)

      if (!email) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const exsisting = await prisma.waitlist.findUnique({
        where: {
            email: email
        },
      })
      if(exsisting){
        return NextResponse.json({message: "You are a true hero 😎"}, {status: 209});
      }
      const newuser = await prisma.waitlist.create({
        data: {
          email
        },
      });
      return NextResponse.json({ message: 'Thanks for Joining🤩', waitlist: newuser }, { status: 200 });
  
    } catch (error) {
      console.error('Error adding waitlist:', error);
      return NextResponse.json({ message: 'Oops, some error occured 😓' }, { status: 500 });
    }
  }