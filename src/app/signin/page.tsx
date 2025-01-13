"use client";

import React from "react";
import { LoginForm } from "@/components/auth/login-form";

const SigninPage = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
    </div>
  );
};

export default SigninPage;
