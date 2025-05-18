"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push("/");
      } else {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-8 p-6 max-w-md w-full bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:underline text-sm text-center"
        >
          {isLogin
            ? "Don't have an account? Sign up here."
            : "Already have an account? Log in here."}
        </button>
      </div>
    </div>
  );
}
