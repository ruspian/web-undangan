"use server";

import bcryptjs from "bcryptjs";
import { LoginSchema } from "@/schemas/login";
import { LoginState } from "./../types/login.d";
import { prisma } from "@/lib/prisma";

export const LoginAction = async (
  prevData: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  try {
    const validated = LoginSchema.safeParse(Object.fromEntries(formData));

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0].message,
      };
    }

    const { email, password } = validated.data;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User belum terdaftar!",
      };
    }

    const isPassword = await bcryptjs.compare(
      password,
      user?.password as string,
    );

    if (!isPassword) {
      return {
        success: false,
        message: "Password salah",
      };
    }

    return {
      success: true,
      message: "Login berhasil",
    };
  } catch (error) {
    console.log("GAGAL LOGIN: ", error);

    return {
      success: false,
      message: "Kesalahan pada server, coba lagi!",
    };
  }
};
