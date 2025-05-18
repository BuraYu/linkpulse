"use client";

import React from "react";
import { login } from "../actions";

const LoginForm = () => {
  return (
    <form action={login} className="flex flex-col gap-4">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="password" className="text-sm font-medium text-gray-700">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
