"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  console.log("Login function called");

  const supabase = await createClient();
  console.log("Supabase client created");

  // Extract and log form data
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log("Form data extracted:", data);

  // Attempt login
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    console.error("Login error:", error.message);
    redirect("/error");
  }

  console.log("Login successful, revalidating path");
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  console.log("Signup function called");

  const supabase = await createClient();
  console.log("Supabase client created");

  // Extract and log form data
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log("Form data extracted:", data);

  // Attempt signup
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    console.error("Signup error:", error.message);
    redirect("/error");
  }

  console.log("Signup successful, revalidating path");
  revalidatePath("/", "layout");
  redirect("/");
}
