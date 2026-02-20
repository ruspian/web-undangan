"use server";

import { RegisterSchema } from "./../schemas/register";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import { Prisma } from "@prisma/client";
import { RegisterState } from "@/types/register";

export const RegisterAction = async (
  prevData: RegisterState,
  formData: FormData,
): Promise<RegisterState> => {
  try {
    const validated = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0].message,
      };
    }

    const { name, email, password } = validated.data;

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return {
        success: false,
        message: "Email sudah terdaftar",
      };
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Akun berhasil dibuat, silahkan login!",
    };
  } catch (error) {
    console.log("GAGAL REGISTRASI: ", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return {
          success: false,
          message: "Email sudah terdaftar",
        };
      }
    }

    return {
      success: false,
      message: "Kesalahan pada server, coba lagi!",
    };
  }
};
