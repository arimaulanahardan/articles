import React, { useState, useEffect, useCallback } from "react";
import { signup, signin } from "@/services/authService";
import { ISignup, ISignin } from "@/interfaces";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = useCallback(async (data: ISignup) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await signup(data);
      console.log("User registered successfully:", response);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (data: ISignin) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await signin(data);
      console.log("User logged in successfully:", response);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, success, register, login };
}
