"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "a@a.com" && password === "teste") {
    const cookieStore = await cookies();
    cookieStore.set("token", "123", {
      httpOnly: true,
    });
    redirect("/");
  }
  throw Error("Verifique suas credênciais")
}
